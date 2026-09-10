import { useReveal } from "@/hooks/useReveal";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}

export default function RevealText({ children, className, style, delay = 0 }: Props) {
  const { ref, revealed } = useReveal();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={{
        transform: revealed ? "translateY(0)" : "translateY(48px)",
        clipPath: revealed ? "inset(0 0 0% 0)" : "inset(0 0 110% 0)",
        opacity: revealed ? 1 : 0,
        transition: `transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms, clip-path 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms, opacity 0.6s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
