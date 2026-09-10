import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLang } from "@/context/LangContext";
import { projetos } from "@/data/projects";
import MetaTable from "@/components/MetaTable";
import SmartImage from "@/components/SmartImage";
import Gallery from "@/components/Gallery";
import RevealText from "@/components/RevealText";

const SECTION_HEADING: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "var(--text-display-md)",
  letterSpacing: "-0.02em",
  lineHeight: 1,
  color: "var(--ink)",
  marginBottom: "24px",
};

const BODY_P: React.CSSProperties = {
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-body-lg)",
  lineHeight: 1.65,
  color: "var(--ink)",
  maxWidth: "68ch",
  marginBottom: "16px",
};

const SECTION: React.CSSProperties = {
  paddingTop: "clamp(3rem, 6vw, 5rem)",
  paddingBottom: "clamp(3rem, 6vw, 5rem)",
  borderBottom: "1px solid var(--border)",
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useLang();

  const projeto = projetos.find((p) => p.slug === slug);

  useEffect(() => {
    if (!projeto) {
      navigate("/404", { replace: true });
    }
  }, [projeto, navigate]);

  useEffect(() => {
    if (projeto) document.title = `${projeto.titulo} — Gabriel Marinho`;
  }, [projeto]);

  if (!projeto) return null;

  const containerStyle: React.CSSProperties = {
    maxWidth: "860px",
    margin: "0 auto",
    padding: "0 clamp(1.5rem, 5vw, 4rem)",
  };

  return (
    <main id="main-content" className="page-enter">
      {/* ── TÍTULO ── */}
      <header
        style={{
          padding: "clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem) clamp(3rem, 6vw, 5rem)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display-lg)",
              letterSpacing: "-0.02em",
              lineHeight: 0.92,
              color: "var(--ink)",
              marginBottom: "16px",
            }}
          >
            {projeto.titulo}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "var(--text-display-md)",
              color: "var(--subtle)",
              lineHeight: 1.1,
            }}
          >
            {projeto.subtitulo}
          </p>
        </div>
      </header>

      {/* ── FICHA TÉCNICA ── */}
      <section style={{ ...SECTION }}>
        <div style={containerStyle}>
          <MetaTable projeto={projeto} />
        </div>
      </section>

      {/* ── CAPA FULL-BLEED ── */}
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <SmartImage
          src={projeto.capa}
          alt={projeto.titulo}
          style={{
            width: "100%",
            display: "block",
            aspectRatio: "16/9",
            objectFit: "cover",
          }}
        />
      </div>

      {/* ── O PROBLEMA ── */}
      <section style={{ ...SECTION }}>
        <div style={containerStyle}>
          <RevealText>
            <h2 style={SECTION_HEADING}>{t.project_detail.problem}</h2>
          </RevealText>
          {projeto.problema.map((p, i) => (
            <RevealText key={i} delay={i * 60}>
              <p style={BODY_P}>{p}</p>
            </RevealText>
          ))}
        </div>
      </section>

      {/* ── A SOLUÇÃO ── */}
      <section style={{ ...SECTION, background: "var(--surface)" }}>
        <div style={containerStyle}>
          <RevealText>
            <h2 style={SECTION_HEADING}>{t.project_detail.solution}</h2>
          </RevealText>
          {projeto.solucao.map((p, i) => (
            <RevealText key={i} delay={i * 60}>
              <p style={BODY_P}>{p}</p>
            </RevealText>
          ))}
          {/* Funcionalidades */}
          <RevealText delay={120}>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "24px 0 0",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {projeto.funcionalidades.map((f, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "var(--text-body)",
                    lineHeight: 1.5,
                    color: "var(--ink)",
                    paddingLeft: "20px",
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: 0,
                      color: "var(--accent)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    →
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </RevealText>
        </div>
      </section>

      {/* ── RESULTADOS ESPERADOS ── */}
      <section style={{ ...SECTION }}>
        <div style={containerStyle}>
          <RevealText>
            <h2 style={SECTION_HEADING}>{t.project_detail.results}</h2>
          </RevealText>
          {/* AVISO OBRIGATÓRIO — texto exato conforme especificação */}
          <RevealText delay={40}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-mono-sm)",
                letterSpacing: "0.04em",
                color: "var(--subtle)",
                marginBottom: "24px",
                padding: "12px 16px",
                border: "1px solid var(--border)",
                lineHeight: 1.5,
              }}
            >
              {t.project_detail.results_disclaimer}
            </p>
          </RevealText>
          {projeto.resultadosEsperados.map((p, i) => (
            <RevealText key={i} delay={i * 60 + 60}>
              <p style={BODY_P}>{p}</p>
            </RevealText>
          ))}
        </div>
      </section>

      {/* ── MEU PAPEL ── */}
      <section style={{ ...SECTION, background: "var(--surface)" }}>
        <div style={containerStyle}>
          <RevealText>
            <h2 style={SECTION_HEADING}>{t.project_detail.my_role}</h2>
          </RevealText>
          {projeto.meuPapel.map((p, i) => (
            <RevealText key={i} delay={i * 60}>
              <p style={BODY_P}>{p}</p>
            </RevealText>
          ))}
        </div>
      </section>

      {/* ── APRENDIZADOS ── */}
      <section style={{ ...SECTION }}>
        <div style={containerStyle}>
          <RevealText>
            <h2 style={SECTION_HEADING}>{t.project_detail.learnings}</h2>
          </RevealText>
          {projeto.aprendizados.map((p, i) => (
            <RevealText key={i} delay={i * 60}>
              <p style={BODY_P}>{p}</p>
            </RevealText>
          ))}
        </div>
      </section>

      {/* ── GALERIA ── */}
      <section
        style={{
          padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Gallery items={projeto.galeria} />
        </div>
      </section>

      {/* ── LINKS DEMO ── */}
      {projeto.links.length > 0 && (
        <section
          style={{
            padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={containerStyle}>
            {projeto.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: "44px",
                  padding: "0 24px",
                  background: "var(--accent)",
                  color: "var(--bg)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-mono-sm)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
              >
                {t.project_detail.demo} ↗
              </a>
            ))}
          </div>
        </section>
      )}

      {/* ── VOLTAR ── */}
      <div
        style={{
          padding: "clamp(2rem, 4vw, 3rem) clamp(1.5rem, 5vw, 4rem)",
        }}
      >
        <div style={containerStyle}>
          <Link
            to="/projetos"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-mono-sm)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--subtle)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
          >
            {t.project_detail.back}
          </Link>
        </div>
      </div>
    </main>
  );
}
