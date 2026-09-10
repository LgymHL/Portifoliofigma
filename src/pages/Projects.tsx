import { useEffect, useMemo, useState } from "react";
import { useLang } from "@/context/LangContext";
import { projetos } from "@/data/projects";
import FilterPills from "@/components/FilterPills";
import ProjectCard from "@/components/ProjectCard";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function Projects() {
  const { t } = useLang();
  const [active, setActive] = useState(t.projects_page.filter_all);

  // Sync active filter label when language switches
  useEffect(() => {
    setActive(t.projects_page.filter_all);
  }, [t.projects_page.filter_all]);

  const allTechs = useMemo(
    () => Array.from(new Set(projetos.flatMap((p) => p.tecnologias))),
    [],
  );

  const filtered = useMemo(() => {
    if (active === t.projects_page.filter_all) return projetos;
    return projetos.filter((p) => p.tecnologias.includes(active));
  }, [active, t.projects_page.filter_all]);

  useEffect(() => {
    document.title = `${t.nav.projects} — Gabriel Marinho`;
  }, [t]);

  const countLabel =
    filtered.length === 1
      ? `${pad(filtered.length)} ${t.projects_page.project_singular}`
      : `${pad(filtered.length)} ${t.projects_page.project_plural}`;

  return (
    <main id="main-content" className="page-enter">
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem) clamp(4rem, 8vw, 8rem)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "24px",
            flexWrap: "wrap",
            marginBottom: "clamp(2rem, 5vw, 4rem)",
            borderBottom: "1px solid var(--border)",
            paddingBottom: "24px",
          }}
        >
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display-lg)",
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
              color: "var(--ink)",
            }}
          >
            {t.projects_page.title}
          </h1>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-mono-sm)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--subtle)",
            }}
          >
            {countLabel}
          </span>
        </div>

        {/* Filters */}
        <div style={{ marginBottom: "clamp(2rem, 4vw, 3rem)" }}>
          <FilterPills options={allTechs} active={active} onChange={setActive} />
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body)",
              color: "var(--subtle)",
              paddingTop: "48px",
            }}
          >
            {t.projects_page.empty}
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 540px), 1fr))",
              gap: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            {filtered.map((p) => (
              <ProjectCard
                key={p.slug}
                slug={p.slug}
                titulo={p.titulo}
                ano={p.ano}
                cliente={p.cliente}
                capa={p.capa}
                tecnologias={p.tecnologias}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
