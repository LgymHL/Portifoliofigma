import { useEffect, useRef } from "react";
import SmartImage from "./SmartImage";

interface GalleryItem {
  src: string;
  alt: string;
  legenda: string;
}

interface Props {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ items, index, onClose, onPrev, onNext }: Props) {
  const item = items[index];
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(0,0,0,0.92)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        ref={closeRef}
        aria-label="Fechar"
        onClick={onClose}
        style={{
          position: "absolute",
          top: "24px",
          right: "24px",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </button>

      {/* Prev */}
      {index > 0 && (
        <button
          aria-label="Anterior"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          ←
        </button>
      )}

      {/* Next */}
      {index < items.length - 1 && (
        <button
          aria-label="Próxima"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          →
        </button>
      )}

      {/* Image */}
      <figure
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: "90vw", maxHeight: "80vh", display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <SmartImage
          src={item.src}
          alt={item.alt}
          style={{
            maxWidth: "90vw",
            maxHeight: "72vh",
            objectFit: "contain",
            display: "block",
            borderRadius: "4px",
          }}
        />
        <figcaption
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-mono-sm)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)",
            textAlign: "center",
          }}
        >
          {item.legenda}
        </figcaption>
      </figure>
    </div>
  );
}
