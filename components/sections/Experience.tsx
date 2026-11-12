"use client";

import { motion } from "framer-motion";
import { usePrefs } from "@/components/Preferences";

export default function Experience() {
  const { t } = usePrefs();

  return (
    <section className="experience section-wrap section-block" id="experience">
      <div className="section-heading">
        <span className="section-index">{t.experience.index}</span>
        <h2>{t.experience.h2[0]}<span className="gradient-text">{t.experience.h2[1]}</span></h2>
      </div>
      <div className="timeline">
        {t.experience.items.map((job, index) => (
          <motion.article className="timeline-item" key={index} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.12 }}>
            <div className="timeline-marker"><span /></div>
            <div className="timeline-period">{job.period}</div>
            <div className="timeline-content">
              <div className="timeline-title">
                <h3>{job.role}</h3>
                <span>{job.company}</span>
              </div>
              <ul>{job.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}