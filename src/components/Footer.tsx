import { Link } from "react-router-dom";
import { useLang } from "@/context/LangContext";

export default function Footer() {
  const { t } = useLang();

  const navItems = [
    { label: t.nav.home, to: "/" },
    { label: t.nav.projects, to: "/projetos" },
    { label: t.nav.stacks, to: "/stacks" },
    { label: t.nav.about, to: "/sobre" },
    { label: t.nav.contact, to: "/contato" },
  ];

  const social = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/gabriel-p-43213a3b0/" },
    { label: "Instagram", href: "https://www.instagram.com/_gabrie.lxz_/" },
    { label: "E-mail", href: "mailto:gabrielmarinhopaiva325@gmail.com" },
  ];

  return (
    <footer
      style={{ background: "var(--ink)", color: "var(--bg)" }}
      className="overflow-hidden"
    >
      {/* Top grid */}
      <div
        className="grid grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12 pt-16 pb-12"
        style={{ borderBottom: "1px solid color-mix(in srgb, var(--bg) 15%, transparent)" }}
      >
        {/* Navegação */}
        <div>
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-mono)", color: "color-mix(in srgb, var(--bg) 50%, transparent)" }}
          >
            {t.footer.nav}
          </p>
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm transition-opacity hover:opacity-60"
                  style={{ color: "var(--bg)", fontFamily: "var(--font-body)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes */}
        <div>
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ fontFamily: "var(--font-mono)", color: "color-mix(in srgb, var(--bg) 50%, transparent)" }}
          >
            {t.footer.social}
          </p>
          <ul className="flex flex-col gap-2">
            {social.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-opacity hover:opacity-60"
                  style={{ color: "var(--bg)", fontFamily: "var(--font-body)" }}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Copyright */}
        <div className="col-span-2 md:col-span-1 flex items-end">
          <p
            className="text-xs uppercase tracking-widest"
            style={{ fontFamily: "var(--font-mono)", color: "color-mix(in srgb, var(--bg) 50%, transparent)" }}
          >
            {t.footer.copy}
          </p>
        </div>
      </div>

      {/* Wordmark — gigante, cortado pela borda inferior */}
      <div className="overflow-hidden leading-none px-4 md:px-8 pt-6 pb-0" aria-hidden="true">
        <p
          className="font-display select-none whitespace-nowrap"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 18vw, 14rem)",
            letterSpacing: "-0.02em",
            lineHeight: 0.85,
            color: "var(--bg)",
            opacity: 0.08,
          }}
        >
          GABRIEL MARINHO
        </p>
      </div>
    </footer>
  );
}
