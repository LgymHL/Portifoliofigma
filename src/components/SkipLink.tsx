import { useLang } from "@/context/LangContext";

export default function SkipLink() {
  const { t } = useLang();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
      style={{
        background: "var(--accent)",
        color: "var(--bg)",
        fontFamily: "var(--font-mono)",
      }}
    >
      {t.skipLink}
    </a>
  );
}
