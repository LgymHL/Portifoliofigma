import { assetMap } from "@/data/assets";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderRatio?: string;
}

export default function SmartImage({ src, alt, placeholderRatio = "56.25%", className, style, ...rest }: Props) {
  const resolved = assetMap[src];

  if (resolved) {
    return (
      <img
        src={resolved}
        alt={alt}
        className={className}
        style={style}
        {...rest}
      />
    );
  }

  return (
    <div
      className={className}
      style={{ position: "relative", width: "100%", paddingBottom: placeholderRatio, background: "var(--border)", ...style }}
      role="img"
      aria-label={alt}
    >
      <span
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-mono-sm)",
          color: "var(--subtle)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        {src}
      </span>
    </div>
  );
}
