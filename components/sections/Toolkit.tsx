"use client";

import { motion } from "framer-motion";
import { usePrefs } from "@/components/Preferences";
import { HardHat } from "lucide-react"; // Ajout de l'icône pour Hardhat
import {
  SiPython, SiRust, SiTypescript, SiFastapi, SiNodedotjs,
  SiPostgresql, SiSolidity, SiEthereum,
  SiGit, SiDocker
} from "react-icons/si";
import { BiOpenai } from "react-icons/bi"; // Import corrigé pour OpenAI

const toolkit = [
  { name: "Python", icon: <SiPython /> },
  { name: "Rust", icon: <SiRust /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "SQL", icon: <SiPostgresql /> },
  { name: "LLMs / RAG", icon: <BiOpenai /> }, // Utilisation de BiOpenai
  { name: "Solidity", icon: <SiSolidity /> },
  { name: "Ethereum", icon: <SiEthereum /> },
  { name: "Hardhat", icon: <HardHat /> }, // Utilisation de HardHat de lucide-react
  { name: "Git", icon: <SiGit /> },
  { name: "Docker", icon: <SiDocker /> },
];

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
        {toolkit.map((item, i) => (
          <motion.span 
            key={item.name} 
            whileHover={{ y: -4, scale: 1.04 }} 
            transition={{ type: "spring", stiffness: 300 }} 
            className={i % 4 === 0 ? "highlight" : ""}
          >
            {item.icon} 
            {item.name}
          </motion.span>
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