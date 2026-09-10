import { useLang } from "@/context/LangContext";

const ACCENT_CYCLE = ["var(--accent)", "var(--accent-2)", "var(--accent-3)"];

interface Props {
  options: string[];
  active: string;
  onChange: (value: string) => void;
}

export default function FilterPills({ options, active, onChange }: Props) {
  const { t } = useLang();
  const all = [t.projects_page.filter_all, ...options];

  return (
    <div role="group" aria-label="Filtrar por tecnologia" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {all.map((option, i) => {
        const isActive = option === active;
        const accentColor = ACCENT_CYCLE[(i - 1 + ACCENT_CYCLE.length) % ACCENT_CYCLE.length];
        return (
          <button
            key={option}
            onClick={() => onChange(option)}
            aria-pressed={isActive}
            style={{
              height: "36px",
              padding: "0 16px",
              borderRadius: "999px",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-mono-sm)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
              border: "none",
              background: isActive ? (option === t.projects_page.filter_all ? "var(--ink)" : accentColor) : "transparent",
              color: isActive ? "var(--bg)" : "var(--subtle)",
              outline: isActive ? "none" : undefined,
              transition: "background 0.2s, color 0.2s",
              boxShadow: isActive ? "none" : `inset 0 0 0 1px var(--border)`,
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
