import { useEffect } from "react";
import { useLang } from "@/context/LangContext";
import { habilidades } from "@/data/skills";
import SkillIcon from "@/components/SkillIcon";
import RevealText from "@/components/RevealText";

export default function Stacks() {
  const { t } = useLang();

  useEffect(() => {
    document.title = `${t.nav.stacks} — Gabriel Marinho`;
  }, [t]);

  const grupos = (["Uso em projeto", "Em estudo"] as const).map((grupo) => ({
    key: grupo,
    label: grupo === "Uso em projeto" ? t.stacks_page.group_used : t.stacks_page.group_studying,
    items: habilidades.filter((h) => h.grupo === grupo),
  }));

  return (
    <main id="main-content" className="page-enter">
      <div
        style={{
          maxWidth: "1000px",
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
            marginBottom: "32px",
          }}
        >
          {t.stacks_page.title}
        </h1>

        {/* Intro */}
        <RevealText>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body-lg)",
              lineHeight: 1.65,
              color: "var(--subtle)",
              maxWidth: "68ch",
              marginBottom: "clamp(3rem, 6vw, 5rem)",
              borderBottom: "1px solid var(--border)",
              paddingBottom: "clamp(3rem, 6vw, 5rem)",
            }}
          >
            {t.stacks_page.intro}
          </p>
        </RevealText>

        {/* Groups */}
        {grupos.map((grupo, gi) => (
          <section
            key={grupo.key}
            style={{
              marginBottom: gi < grupos.length - 1 ? "clamp(3rem, 6vw, 5rem)" : 0,
            }}
          >
            <RevealText>
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
                {grupo.label}
              </h2>
            </RevealText>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                gap: "12px",
              }}
            >
              {grupo.items.map((h, i) => (
                <RevealText key={h.nome} delay={i * 40}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      padding: "16px",
                      border: "1px solid var(--border)",
                      background: "var(--surface)",
                    }}
                  >
                    <SkillIcon icone={h.icone} nome={h.nome} size={28} />
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: "var(--text-body)",
                          color: "var(--ink)",
                          fontWeight: 500,
                          lineHeight: 1.2,
                        }}
                      >
                        {h.nome}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.7rem",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          color: "var(--subtle)",
                          marginTop: "4px",
                        }}
                      >
                        {h.nivel}
                      </p>
                    </div>
                  </div>
                </RevealText>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
