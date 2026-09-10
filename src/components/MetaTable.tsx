import { useLang } from "@/context/LangContext";
import type { Projeto } from "@/data/types";

interface Props {
  projeto: Projeto;
}

export default function MetaTable({ projeto }: Props) {
  const { t } = useLang();
  const m = t.project_detail.meta;

  const rows: { label: string; value: string }[] = [
    { label: m.ano,         value: String(projeto.ano) },
    { label: m.tipo,        value: projeto.tipo },
    { label: m.cliente,     value: projeto.cliente },
    { label: m.papel,       value: projeto.papel },
    { label: m.duracao,     value: projeto.duracao },
    { label: m.equipe,      value: projeto.equipe.join(", ") },
    { label: m.tecnologias, value: projeto.tecnologias.join(" · ") },
  ];

  const cellStyle: React.CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: "var(--text-mono-sm)",
    letterSpacing: "0.06em",
    padding: "12px 0",
    verticalAlign: "top",
  };

  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        tableLayout: "fixed",
      }}
    >
      <tbody>
        {rows.map((row, i) => (
          <tr
            key={row.label}
            style={{
              borderBottom: i < rows.length - 1 ? "1px dashed var(--border)" : "none",
            }}
          >
            <td
              style={{
                ...cellStyle,
                width: "30%",
                textTransform: "uppercase",
                color: "var(--subtle)",
                paddingRight: "24px",
              }}
            >
              {row.label}
            </td>
            <td style={{ ...cellStyle, color: "var(--ink)" }}>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
