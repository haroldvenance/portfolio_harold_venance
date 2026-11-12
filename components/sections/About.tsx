"use client";

import { CheckCircle2 } from "lucide-react";
import { usePrefs } from "@/components/Preferences";
import { Rich } from "@/components/ui/Rich";

export default function About() {
  const { t } = usePrefs();

  return (
    <section className="about section-wrap section-block" id="about">
      <div className="section-heading">
        <span className="section-index">{t.about.index}</span>
        <h2>{t.about.h2[0]}<span className="gradient-text">{t.about.h2[1]}</span></h2>
      </div>
      <div className="about-grid">
        <p className="about-lead"><Rich parts={t.about.lead} as="em" /></p>
        <div className="about-copy">
          <p>{t.about.body}</p>
          <div className="principles">
            {t.about.principles.map((label) => <span key={label}><CheckCircle2 /> {label}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}