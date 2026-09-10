import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/context/LangContext";

export default function NotFound() {
  const { t } = useLang();

  useEffect(() => {
    document.title = "404 — Gabriel Marinho";
  }, []);

  return (
    <main id="main-content" className="page-enter">
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 4rem)",
          paddingTop: "calc(clamp(4rem, 8vw, 8rem) + 4rem)",
        }}
      >
        <p
          aria-hidden="true"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-display-xl)",
            letterSpacing: "-0.02em",
            lineHeight: 0.85,
            color: "var(--border)",
            marginBottom: "24px",
            userSelect: "none",
          }}
        >
          404
        </p>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-display-md)",
            letterSpacing: "-0.02em",
            color: "var(--ink)",
            marginBottom: "12px",
          }}
        >
          {t.pages.notFound}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body)",
            color: "var(--subtle)",
            marginBottom: "32px",
          }}
        >
          {t.pages.notFoundSub}
        </p>
        <Link
          to="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            height: "36px",
            padding: "0 20px",
            background: "var(--accent)",
            color: "var(--bg)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-mono-sm)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          {t.pages.backHome}
        </Link>
      </section>
    </main>
  );
}
