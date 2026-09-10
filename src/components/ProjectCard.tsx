import { Link } from "react-router-dom";
import SmartImage from "./SmartImage";

interface Props {
  slug: string;
  titulo: string;
  ano: number;
  cliente: string;
  capa: string;
  tecnologias: string[];
}

export default function ProjectCard({ slug, titulo, ano, cliente, capa, tecnologias }: Props) {
  return (
    <Link
      to={`/projetos/${slug}`}
      className="group block"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <article>
        {/* Image */}
        <div
          style={{
            overflow: "hidden",
            borderRadius: "4px",
            border: "1px solid var(--border)",
            marginBottom: "16px",
          }}
        >
          <SmartImage
            src={capa}
            alt={titulo}
            className="w-full"
            style={{
              display: "block",
              aspectRatio: "16/9",
              objectFit: "cover",
              transition: "transform 0.5s ease",
            }}
            placeholderRatio="56.25%"
          />
        </div>

        {/* Meta */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-display-md)",
              letterSpacing: "-0.02em",
              lineHeight: 0.95,
              color: "var(--ink)",
              transition: "color 0.2s",
            }}
            className="group-hover:text-accent"
          >
            {titulo}
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--text-body)",
              color: "var(--subtle)",
            }}
          >
            {cliente}
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-mono-sm)",
              color: "var(--subtle)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {ano} · {tecnologias.join(" · ")}
          </p>
        </div>
      </article>
    </Link>
  );
}
