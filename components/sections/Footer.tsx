"use client";

import { usePrefs } from "@/components/Preferences";
import { profile } from "@/lib/i18n";

export default function Footer() {
  const { t } = usePrefs();

  return (
    <footer className="footer section-wrap">
      <a className="brand" href="#home">
        <span className="brand-mark">H<span>.</span></span>
        <span>{profile.shortName}<small>{t.ui.role}</small></span>
      </a>
      <span>{t.footer.tagline}</span>
      <a href="#home">{t.footer.top}</a>
      <small>© {new Date().getFullYear()} {profile.fullName} · {t.ui.fullRole}</small>
    </footer>
  );
}