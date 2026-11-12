"use client";

import { motion } from "framer-motion";
import { 
  ArrowDownRight, 
  ArrowRight, 
  ArrowUpRight, 
  BrainCircuit, 
  ShieldCheck, 
  Boxes, 
  Download 
} from "lucide-react";
import { usePrefs } from "@/components/Preferences";
import { profile } from "@/lib/i18n";
import { Rich } from "@/components/ui/Rich";

function NetworkVisual({ labels }: { labels: { ai: string; aiSub: string; sec: string; chain: string } }) {
  return (
    <div className="network-visual" aria-hidden="true">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="core-cube"><span /><span /><span /></div>
      {[
        ["node node-a", "◇"], ["node node-b", "01"], ["node node-c", "AI"],
        ["node node-d", "⬡"], ["node node-e", "</>"], ["node node-f", "∞"],
      ].map(([cls, label]) => <div key={cls} className={cls}>{label}</div>)}
      <svg className="network-lines" viewBox="0 0 520 420" fill="none">
        <path d="M260 210 L120 100 L68 220 L190 320 L260 210 L390 115 L454 245 L330 330 L260 210" />
        <path d="M120 100 L390 115 M68 220 L454 245 M190 320 L330 330" />
      </svg>
      <div className="float-label label-ai"><BrainCircuit size={15} /> {labels.ai} <small>{labels.aiSub}</small></div>
      <div className="float-label label-sec"><ShieldCheck size={15} /> {labels.sec}</div>
      <div className="float-label label-chain"><Boxes size={15} /> {labels.chain}</div>
    </div>
  );
}

export default function Hero() {
  const { t } = usePrefs();
  const [h1a, h1b, h1c, h1d, h1e] = t.hero.h1;

  return (
    <section className="hero section-wrap" id="home">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div className="eyebrow"><span className="status-dot" /> {profile.fullName} <span className="eyebrow-line" /></div>
        <h1>{h1a}<span className="gradient-text">{h1b}</span>{h1c}<br />{h1d}<span className="gradient-text alt">{h1e}</span></h1>
        <p className="hero-subtitle"><Rich parts={t.hero.subtitle} /></p>
        <div className="hero-tags">
          <span><BrainCircuit size={15} /> {t.hero.tags[0]}</span><i />
          <span><ShieldCheck size={15} /> {t.hero.tags[1]}</span><i />
          <span><Boxes size={15} /> {t.hero.tags[2]}</span>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">{t.hero.primary} <ArrowRight size={16} /></a>
          <a className="button button-ghost" href={profile.cvUrl} target="_blank" rel="noreferrer">{t.ui.downloadCv} <Download size={16} /></a>
          <a className="button button-ghost" href="#contact">{t.hero.secondary} <ArrowUpRight size={16} /></a>
        </div>
        <div className="availability"><span className="status-dot" /> {t.hero.availability}</div>
        <div className="location"><span>⌖</span> {t.hero.location} <b>·</b> {t.hero.worldwide}</div>
      </motion.div>
      <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }}>
        <NetworkVisual labels={t.hero.labels} />
        <div className="art-caption"><span>{t.hero.caption[0]}</span><span>{t.hero.caption[1]}</span></div>
      </motion.div>
      <a className="scroll-cue" href="#about"><span /> {t.hero.scroll} <ArrowDownRight size={14} /></a>
    </section>
  );
}