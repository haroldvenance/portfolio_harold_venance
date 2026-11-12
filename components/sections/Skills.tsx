"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Code2, ShieldCheck, Boxes } from "lucide-react";
import { usePrefs } from "@/components/Preferences";

const skillMeta = [
  { icon: Code2, color: "cyan" },
  { icon: BrainCircuit, color: "violet" },
  { icon: ShieldCheck, color: "blue" },
  { icon: Boxes, color: "pink" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } } };

export default function Skills() {
  const { t } = usePrefs();

  return (
    <section className="expertise section-wrap section-block" id="expertise">
      <div className="section-heading heading-row">
        <div>
          <span className="section-index">{t.skills.index}</span>
          <h2>{t.skills.h2[0]}<span className="gradient-text">{t.skills.h2[1]}</span></h2>
        </div>
        <p>{t.skills.side[0]}<br />{t.skills.side[1]}</p>
      </div>
      <motion.div className="skill-grid" variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
        {skillMeta.map(({ icon: Icon, color }, i) => (
          <motion.article className={`skill-card ${color}`} variants={item} key={color}>
            <div className="skill-top">
              <span className="skill-icon"><Icon size={21} /></span>
              <span className="card-arrow"><ArrowUpRight size={17} /></span>
            </div>
            <h3>{t.skills.items[i].title}</h3>
            <p>{t.skills.items[i].tags}</p>
            <div className="skill-meter"><span /></div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}