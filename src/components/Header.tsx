import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLang } from "@/context/LangContext";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const { t, lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: t.nav.projects, to: "/projetos" },
    { label: t.nav.stacks, to: "/stacks" },
    { label: t.nav.about, to: "/sobre" },
    { label: t.nav.contact, to: "/contato" },
  ];

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "font-mono text-xs uppercase tracking-widest transition-colors",
      isActive ? "text-accent" : "hover:text-accent",
    ].join(" ");

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16"
      style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
    >
      {/* Monograma */}
      <NavLink
        to="/"
        aria-label="Gabriel Marinho — Início"
        className="flex-shrink-0"
      >
        <span
          className="flex items-center justify-center w-9 h-9 text-sm font-display font-bold select-none"
          style={{
            border: "1px solid var(--ink)",
            color: "var(--ink)",
            fontFamily: "var(--font-display)",
            letterSpacing: "-0.02em",
          }}
        >
          GM
        </span>
      </NavLink>

      {/* Nav — desktop */}
      <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={navLinkClass}
            style={({ isActive }) => isActive ? { color: "var(--accent)" } : { color: "var(--subtle)" }}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Controls */}
      <div className="flex items-center gap-3">
        {/* Lang toggle */}
        <button
          onClick={() => setLang(lang === "pt" ? "en" : "pt")}
          aria-label={t.lang.toggle}
          aria-pressed={lang === "en"}
          className="font-mono text-xs uppercase tracking-widest px-3 h-8 transition-colors"
          style={{
            border: "1px solid var(--border)",
            color: "var(--subtle)",
            background: "transparent",
          }}
        >
          {lang === "pt" ? "EN" : "PT"}
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label={t.theme.toggle}
          aria-pressed={theme === "dark"}
          className="w-8 h-8 flex items-center justify-center transition-colors"
          style={{ border: "1px solid var(--border)", color: "var(--subtle)" }}
        >
          {theme === "light" ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.22 3.22l1.06 1.06M11.72 11.72l1.06 1.06M3.22 12.78l1.06-1.06M11.72 4.28l1.06-1.06" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13.5 9.5A6 6 0 016.5 2.5a6 6 0 100 11 6 6 0 007-4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          style={{ color: "var(--ink)" }}
        >
          <span className={`block w-5 h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 flex flex-col items-center justify-center gap-10"
          style={{ background: "var(--bg)" }}
        >
          <button
            className="absolute top-5 right-6 w-8 h-8 flex items-center justify-center"
            aria-label="Fechar menu"
            onClick={() => setMenuOpen(false)}
            style={{ color: "var(--ink)" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <nav className="flex flex-col items-center gap-8" aria-label="Menu mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-display"
                style={({ isActive }) => ({
                  fontFamily: "var(--font-display)",
                  color: isActive ? "var(--accent)" : "var(--ink)",
                  letterSpacing: "-0.02em",
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
