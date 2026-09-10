import { useEffect } from "react";
import { useLang } from "@/context/LangContext";
import SmartImage from "@/components/SmartImage";
import RevealText from "@/components/RevealText";

export default function About() {
  const { t } = useLang();
  const a = t.about_page;

  useEffect(() => {
    document.title = `${t.nav.about} — Gabriel Marinho`;
  }, [t]);

  const BODY_P: React.CSSProperties = {
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-body-lg)",
    lineHeight: 1.65,
    color: "var(--ink)",
    maxWidth: "68ch",
    marginBottom: "20px",
  };

  return (
    <main id="main-content" className="page-enter">
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem) clamp(4rem, 8vw, 8rem)",
        }}
      >
        {/* Page title */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-display-lg)",
            letterSpacing: "-0.02em",
            lineHeight: 0.9,
            color: "var(--ink)",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
            borderBottom: "1px solid var(--border)",
            paddingBottom: "clamp(2rem, 4vw, 3rem)",
          }}
        >
          {a.title}
        </h1>

        {/* Two column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr)",
            gap: "clamp(2rem, 6vw, 5rem)",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
          className="about-grid"
        >
          {/* Photos column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <SmartImage
              src="/img/perfil.jpg"
              alt={a.photo_alt}
              style={{
                width: "100%",
                display: "block",
                aspectRatio: "3/4",
                objectFit: "cover",
                borderRadius: "4px",
                border: "1px solid var(--border)",
              }}
              placeholderRatio="133%"
            />
            <SmartImage
              src="/img/projetos/globaltec-pitch.jpg"
              alt={a.pitch_alt}
              style={{
                width: "100%",
                display: "block",
                aspectRatio: "16/10",
                objectFit: "cover",
                borderRadius: "4px",
                border: "1px solid var(--border)",
              }}
              placeholderRatio="62.5%"
            />
          </div>

          {/* Text column */}
          <div>
            <RevealText>
              <p style={BODY_P}>{a.p1}</p>
              <p style={BODY_P}>{a.p2}</p>
              <p style={BODY_P}>{a.p3}</p>
            </RevealText>
          </div>
        </div>

        {/* Timeline */}
        <RevealText>
          <section>
            <h2
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-mono-sm)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--subtle)",
                marginBottom: "24px",
              }}
            >
              {a.timeline_title}
            </h2>
            <ol
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {a.timeline.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: "24px",
                    padding: "16px 0",
                    borderBottom: i < a.timeline.length - 1 ? "1px dashed var(--border)" : "none",
                    alignItems: "baseline",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-mono-sm)",
                      letterSpacing: "0.08em",
                      color: "var(--accent)",
                      flexShrink: 0,
                      width: "3.5rem",
                    }}
                  >
                    {item.year}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-mono-sm)",
                      letterSpacing: "0.04em",
                      color: "var(--ink)",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.event}
                  </span>
                </li>
              ))}
            </ol>
          </section>
        </RevealText>
      </div>
    </main>
  );
}
