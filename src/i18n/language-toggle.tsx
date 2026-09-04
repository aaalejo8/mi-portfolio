"use client";

import { useLanguage } from "@/i18n/language-provider";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed right-5 top-5 z-50 flex items-center rounded-full border border-white/15 bg-black/40 p-1 font-mono text-xs backdrop-blur-md">
      {(["es", "en"] as const).map((option) => (
        <button
          key={option}
          onClick={() => setLang(option)}
          className={`rounded-full px-3 py-1.5 transition-colors ${
            lang === option ? "bg-accent/20 text-accent" : "text-white/50 hover:text-white/80"
          }`}
          aria-pressed={lang === option}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
