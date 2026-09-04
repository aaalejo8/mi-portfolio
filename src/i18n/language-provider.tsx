"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { es } from "@/i18n/locales/es";
import { en } from "@/i18n/locales/en";

export type Lang = "es" | "en";

const dictionaries = { es, en };

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: typeof es;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "portfolio-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("es");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const detected =
      stored === "es" || stored === "en"
        ? stored
        : navigator.language.toLowerCase().startsWith("en")
          ? "en"
          : "es";
    // Runs once after hydration to sync client-only language preference (localStorage/navigator).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLangState(detected);
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
