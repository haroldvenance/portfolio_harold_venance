"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X, Download } from "lucide-react";
import Controls from "@/components/Controls";
import { usePrefs } from "@/components/Preferences";
import { profile } from "@/lib/i18n";

const navIds = ["about", "expertise", "projects", "experience", "contact"] as const;

export default function Header() {
  const { t } = usePrefs();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const mailto = `mailto:${profile.email}`;

  return (
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu}>
        <span className="brand-mark">H<span>.</span></span>
        <span>{profile.shortName}<small>{t.ui.role}</small></span>
      </a>
      <nav className={menuOpen ? "nav nav-open" : "nav"}>
        {navIds.map((id) => (
          <a key={id} href={`#${id}`} onClick={closeMenu}>{t.nav[id]}</a>
        ))}
      </nav>
      <Controls />
      <button className="menu-toggle" aria-label={t.ui.toggleMenu} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}
      </button>
      
      {/* Actions desktop */}
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <a className="resume-link" href={profile.cvUrl} target="_blank" rel="noreferrer" title={t.ui.downloadCv}>
          <Download size={15} /> <span className="cv-text">CV</span>
        </a>
        <a className="resume-link" href={`${mailto}?subject=${encodeURIComponent(t.contact.mailSubject)}`}>
          {t.topCta} <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
}