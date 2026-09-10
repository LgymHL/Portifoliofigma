const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const DEVICON_MAP: Record<string, string> = {
  vscode:     "vscode/vscode-original.svg",
  html5:      "html5/html5-original.svg",
  css3:       "css3/css3-original.svg",
  javascript: "javascript/javascript-original.svg",
  react:      "react/react-original.svg",
  python:     "python/python-original.svg",
  git:        "git/git-original.svg",
  github:     "github/github-original.svg",
};

interface Props {
  icone: string;
  nome: string;
  size?: number;
}

export default function SkillIcon({ icone, nome, size = 32 }: Props) {
  if (icone.startsWith("iniciais:")) {
    const initials = icone.replace("iniciais:", "");
    return (
      <span
        aria-label={nome}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: size,
          height: size,
          background: "var(--accent)",
          color: "var(--bg)",
          fontFamily: "var(--font-mono)",
          fontSize: size * 0.34,
          fontWeight: 500,
          letterSpacing: "0.02em",
          flexShrink: 0,
        }}
      >
        {initials}
      </span>
    );
  }

  if (icone.startsWith("devicon:")) {
    const key = icone.replace("devicon:", "");
    const path = DEVICON_MAP[key];
    if (path) {
      return (
        <img
          src={`${DEVICON_BASE}/${path}`}
          alt={nome}
          width={size}
          height={size}
          style={{ display: "block", flexShrink: 0 }}
          loading="lazy"
        />
      );
    }
  }

  return (
    <span
      aria-label={nome}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        border: "1px solid var(--border)",
        fontFamily: "var(--font-mono)",
        fontSize: size * 0.3,
        color: "var(--subtle)",
        flexShrink: 0,
      }}
    >
      ?
    </span>
  );
}
