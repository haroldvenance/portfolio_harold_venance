"use client";

import { Moon, Sun } from "lucide-react";
import { usePrefs } from "@/components/Preferences";
import type { Lang } from "@/lib/i18n";

const languages: { code: Lang; flag: string; label: string }[] = [
  { code: "fr", flag: "🇫🇷", label: "Français" },
  { code: "en", flag: "🇬🇧", label: "English" },
];

export default function Controls() {
  const { theme, lang, setLang, toggleTheme, t } = usePrefs();

  return (
    <div className="controls">
      <div className="lang-switch" role="group" aria-label={t.ui.language}>
        {languages.map(({ code, flag, label }) => (
          <button key={code} type="button" lang={code} aria-pressed={lang === code} aria-label={label} onClick={() => setLang(code)}>
            <span className="flag" aria-hidden="true">{flag}</span>
            {code.toUpperCase()}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? t.ui.switchToLight : t.ui.switchToDark}
        title={theme === "dark" ? t.ui.switchToLight : t.ui.switchToDark}
      >
        {/* Les deux icônes sont superposées ; CSS affiche la bonne selon data-theme (aucun saut au chargement). */}
        <Sun className="icon-sun" size={16} aria-hidden="true" />
        <Moon className="icon-moon" size={16} aria-hidden="true" />
      </button>
    </div>
  );
}
