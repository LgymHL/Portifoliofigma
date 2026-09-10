import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/context/LangContext";
import { projetos } from "@/data/projects";
import { habilidades } from "@/data/skills";
import Marquee from "@/components/Marquee";
import SmartImage from "@/components/SmartImage";
import RevealText from "@/components/RevealText";
import SkillIcon from "@/components/SkillIcon";

export default function Home() {
  const { t } = useLang();
  const destaque = projetos.find((p) => p.destaque);
  const [before, highlight, after] = t.hero.headline;

  useEffect(() => {
    document.title = "Gabriel Marinho — Portfólio";
  }, []);

  return (
    <main id="main-content" className="page-enter">
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 clamp(1.5rem, 5vw, 4rem)",
          paddingTop: "calc(4rem + 48px)",
          paddingBottom: "clamp(3rem, 8vh, 6rem)",
          background: "var(--bg)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
          {/* Metadata line */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-mono-sm)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--subtle)",
              marginBottom: "clamp(1.5rem, 4vh, 3rem)",
            }}
          >
            {t.hero.meta}
          </p>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display-xl)",
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
              color: "var(--ink)",
              maxWidth: "16ch",
              marginBottom: "clamp(1.5rem, 4vh, 3rem)",
            }}
          >
            {before}
            <em
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--accent)",
              }}
            >
              {highlight}
            </em>
            {after}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-lg)",
              lineHeight: 1.65,
              color: "var(--subtle)",
              maxWidth: "52ch",
            }}
          >
            {t.hero.sub}
          </p>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee />

      {/* ── PROJETO EM DESTAQUE ── */}
      {destaque && (
        <section
          style={{
            padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
            background: "var(--bg)",
          }}
        >
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <RevealText>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-mono-sm)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--subtle)",
                  marginBottom: "24px",
                }}
              >
                {t.featured.label}
              </p>
            </RevealText>

            <RevealText delay={80}>
              <Link
                to={`/projetos/${destaque.slug}`}
                style={{ display: "block", textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "4px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <SmartImage
                    src={destaque.capa}
                    alt={destaque.titulo}
                    style={{
                      width: "100%",
                      display: "block",
                      aspectRatio: "16/9",
                      objectFit: "cover",
                    }}
                  />
                  {/* Caption overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "clamp(1rem, 3vw, 2rem)",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-display-md)",
                        letterSpacing: "-0.02em",
                        lineHeight: 1,
                        color: "#fff",
                        marginBottom: "8px",
                      }}
                    >
                      {destaque.titulo}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "var(--text-mono-sm)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.65)",
                      }}
                    >
                      {t.featured.caption_year} · {t.featured.caption_client}
                    </p>
                  </div>
                </div>
              </Link>
            </RevealText>
          </div>
        </section>
      )}

      {/* ── SOBRE RESUMIDO ── */}
      <section
        style={{
          padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr)",
            gap: "clamp(2rem, 6vw, 5rem)",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Foto */}
          <div>
            <SmartImage
              src="/img/perfil.jpg"
              alt={t.about_page.photo_alt}
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
          </div>

          {/* Texto */}
          <RevealText>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body-lg)",
                  lineHeight: 1.65,
                  color: "var(--ink)",
                  maxWidth: "68ch",
                }}
              >
                {t.about_home.p1}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--text-body-lg)",
                  lineHeight: 1.65,
                  color: "var(--ink)",
                  maxWidth: "68ch",
                }}
              >
                {t.about_home.p2}
              </p>
              <Link
                to="/sobre"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: "36px",
                  padding: "0 20px",
                  background: "var(--ink)",
                  color: "var(--bg)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-mono-sm)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  alignSelf: "flex-start",
                  transition: "opacity 0.2s",
                }}
              >
                {t.about_home.cta} →
              </Link>
            </div>
          </RevealText>
        </div>
      </section>

      {/* ── FAIXA DE STACKS ── */}
      <section
        style={{
          padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)",
          background: "var(--bg)",
        }}
      >
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <Link
            to="/stacks"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "24px",
              alignItems: "center",
              textDecoration: "none",
              opacity: 0.85,
              transition: "opacity 0.2s",
            }}
            aria-label={t.stacks_strip.label}
          >
            {habilidades.map((h) => (
              <SkillIcon key={h.nome} icone={h.icone} nome={h.nome} size={28} />
            ))}
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-mono-sm)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--subtle)",
                marginLeft: "8px",
              }}
            >
              {t.stacks_strip.label} →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
