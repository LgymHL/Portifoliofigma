import { createContext, useContext, useEffect, useState } from "react";
import { pt, type Translations } from "@/i18n/pt";
import { en } from "@/i18n/en";

type Lang = "pt" | "en";

interface LangContextValue {
  lang: Lang;
  t: Translations;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue>({
  lang: "pt",
  t: pt,
  setLang: () => {},
});

const translations: Record<Lang, Translations> = { pt, en };

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem("gm-lang");
    return stored === "en" ? "en" : "pt";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("gm-lang", l);
  };

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
