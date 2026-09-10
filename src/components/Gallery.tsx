import { useState } from "react";
import SmartImage from "./SmartImage";
import Lightbox from "./Lightbox";
import { useLang } from "@/context/LangContext";

interface GalleryItem {
  src: string;
  alt: string;
  legenda: string;
}

interface Props {
  items: GalleryItem[];
}

export default function Gallery({ items }: Props) {
  const { t } = useLang();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <section aria-label={t.project_detail.gallery}>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-display-md)",
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: "32px",
          }}
        >
          {t.project_detail.gallery}
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "12px",
          }}
        >
          {items.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setLightboxIndex(i)}
              aria-label={`Abrir: ${item.alt}`}
              style={{
                display: "block",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <figure style={{ margin: 0 }}>
                <SmartImage
                  src={item.src}
                  alt={item.alt}
                  style={{
                    width: "100%",
                    aspectRatio: "16/9",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "4px",
                    border: "1px solid var(--border)",
                    transition: "opacity 0.2s",
                  }}
                />
                <figcaption
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-mono-sm)",
                    color: "var(--subtle)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginTop: "8px",
                  }}
                >
                  {item.legenda}
                </figcaption>
              </figure>
            </button>
          ))}
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((i) => Math.max(0, (i ?? 0) - 1))}
          onNext={() => setLightboxIndex((i) => Math.min(items.length - 1, (i ?? 0) + 1))}
        />
      )}
    </>
  );
}
