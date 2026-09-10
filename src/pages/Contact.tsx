import { useEffect } from "react";
import { useLang } from "@/context/LangContext";

interface BigLinkProps {
  href: string;
  label: string;
  external?: boolean;
}

function BigLink({ href, label, external }: BigLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="contact-big-link"
      style={{
        display: "block",
        fontFamily: "var(--font-display)",
        fontSize: "clamp(2rem, 7vw, 5rem)",
        letterSpacing: "-0.02em",
        lineHeight: 1,
        color: "var(--ink)",
        textDecoration: "none",
        padding: "clamp(1rem, 2.5vw, 1.5rem) 0",
        borderBottom: "1px solid var(--border)",
        position: "relative",
        transition: "color 0.2s",
      }}
    >
      {label}
      {/* Animated underline via pseudo-element handled in CSS */}
    </a>
  );
}

export default function Contact() {
  const { t } = useLang();
  const c = t.contact_page;

  useEffect(() => {
    document.title = `${t.nav.contact} — Gabriel Marinho`;
  }, [t]);

  return (
    <main id="main-content" className="page-enter">
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "clamp(6rem, 12vw, 10rem) clamp(1.5rem, 5vw, 4rem) clamp(4rem, 8vw, 8rem)",
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-display-lg)",
            letterSpacing: "-0.02em",
            lineHeight: 0.9,
            color: "var(--ink)",
            marginBottom: "24px",
          }}
        >
          {c.title}
        </h1>

        {/* Intro */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-body-lg)",
            lineHeight: 1.65,
            color: "var(--subtle)",
            maxWidth: "60ch",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          {c.intro}
        </p>

        {/* Links */}
        <nav aria-label="Links de contato">
          <BigLink
            href="mailto:gabrielmarinhopaiva325@gmail.com"
            label="gabrielmarinhopaiva325@gmail.com"
          />
          <BigLink
            href="https://www.linkedin.com/in/gabriel-p-43213a3b0/"
            label="LinkedIn"
            external
          />
          <BigLink
            href="https://www.instagram.com/_gabrie.lxz_/"
            label="Instagram"
            external
          />
        </nav>

        {/*
          TELEFONE — comentado por decisão do dono do site.
          Publicar número de telefone em site aberto atrai spam automatizado.
          Para ativar, remova este bloco de comentário.

          <BigLink
            href="tel:+5598984385595"
            label="(98) 98438-5595"
          />
        */}
      </div>
    </main>
  );
}
