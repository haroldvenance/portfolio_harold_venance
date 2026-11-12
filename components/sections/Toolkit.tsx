"use client";

import { motion } from "framer-motion";
import { usePrefs } from "@/components/Preferences";

const toolkit = ["Python", "Rust", "TypeScript", "FastAPI", "Node.js", "SQL", "LLMs / RAG", "Solidity", "Ethereum", "Hardhat", "Git", "Docker"];

export default function Toolkit() {
  const { t } = usePrefs();

  return (
    <section className="stack section-wrap section-block">
      <div className="stack-copy">
        <span className="section-index">{t.toolkit.index}</span>
        <h2>{t.toolkit.h2[0]}<br />{t.toolkit.h2[1]}<span className="gradient-text">{t.toolkit.h2[2]}</span></h2>
        <p>{t.toolkit.body}</p>
      </div>
      <div className="stack-cloud">
        {toolkit.map((tag, i) => (
          <motion.span key={tag} whileHover={{ y: -4, scale: 1.04 }} transition={{ type: "spring", stiffness: 300 }} className={i % 4 === 0 ? "highlight" : ""}>{tag}</motion.span>
        ))}
      </div>
      <div className="terminal">
        <div className="terminal-bar"><span /><span /><span /><small>~/harold/engineering</small></div>
        <div className="terminal-body">
          <p><b>➜</b> whoami</p>
          <p className="terminal-result">{t.toolkit.whoami}</p>
          <p><b>➜</b> mission --status</p>
          <p className="terminal-result success">{t.toolkit.mission}<span>▌</span></p>
        </div>
      </div>
    </section>
  );
}