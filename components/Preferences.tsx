"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, STORAGE_KEYS, type Dict, type Lang, type Theme } from "@/lib/i18n";

type Prefs = {
  theme: Theme;
  lang: Lang;
  t: Dict;
  toggleTheme: () => void;
  setLang: (lang: Lang) => void;
};

const PreferencesContext = createContext<Prefs | null>(null);

function save(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* stockage indisponible (navigation privée, etc.) : on ignore */
  }
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;
  save(STORAGE_KEYS.theme, theme);
}

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  // Valeurs par défaut identiques au rendu serveur ; le script inline de layout.tsx
  // a déjà posé les vraies préférences sur <html> avant le premier affichage.
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    const root = document.documentElement;
    setTheme(root.getAttribute("data-theme") === "light" ? "light" : "dark");
    setLangState(root.getAttribute("lang") === "en" ? "en" : "fr");
  }, []);

  const t = dictionaries[lang];

  // Langue : <html lang>, titre de l'onglet et meta description suivent la langue choisie.
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [lang, t]);

  const toggleTheme = useCallback(() => {
    const next: Theme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const doc = document as unknown as { startViewTransition?: (cb: () => void) => unknown };

    if (!reduce && typeof doc.startViewTransition === "function") {
      // Fondu enchaîné natif de toute la page (Chrome, Edge, Safari récents).
      doc.startViewTransition(() => applyTheme(next));
    } else if (!reduce) {
      // Repli : transitions CSS brèves sur les couleurs.
      const root = document.documentElement;
      root.classList.add("theme-fade");
      applyTheme(next);
      window.setTimeout(() => root.classList.remove("theme-fade"), 450);
    } else {
      applyTheme(next);
    }
    setTheme(next);
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    save(STORAGE_KEYS.lang, next);
  }, []);

  const value = useMemo(() => ({ theme, lang, t, toggleTheme, setLang }), [theme, lang, t, toggleTheme, setLang]);
  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePrefs(): Prefs {
  const ctx = useContext(PreferencesContext);
  if (!ctx) throw new Error("usePrefs doit être utilisé dans <PreferencesProvider>");
  return ctx;
}
