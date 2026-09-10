const CONTENT = "PROJETOS · VISÃO COMPUTACIONAL · AGENTES DE IA · FRONT-END · PYTHON · ";

export default function Marquee() {
  const repeated = CONTENT.repeat(4);

  return (
    <div
      aria-hidden="true"
      style={{
        overflow: "hidden",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--bg)",
        padding: "18px 0",
      }}
    >
      <div className="marquee-track" style={{ display: "flex", width: "max-content" }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.25rem, 3vw, 2rem)",
            letterSpacing: "-0.01em",
            color: "var(--ink)",
            WebkitTextStroke: "1px var(--ink)",
            WebkitTextFillColor: "transparent",
            whiteSpace: "nowrap",
            paddingRight: "2rem",
          }}
        >
          {repeated}
        </span>
        <span
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.25rem, 3vw, 2rem)",
            letterSpacing: "-0.01em",
            color: "var(--ink)",
            WebkitTextStroke: "1px var(--ink)",
            WebkitTextFillColor: "transparent",
            whiteSpace: "nowrap",
            paddingRight: "2rem",
          }}
        >
          {repeated}
        </span>
      </div>
    </div>
  );
}
