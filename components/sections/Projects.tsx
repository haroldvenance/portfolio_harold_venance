"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, BrainCircuit, LockKeyhole, Network,
  ShieldCheck, Sparkles, Terminal, X, ChevronDown, ChevronUp, Database, Code2
} from "lucide-react";
import { usePrefs } from "@/components/Preferences";

const projectMeta = [
  { number: "01", stack: ["Python", "FastAPI", "RAG", "Vector Search"], icon: BrainCircuit, color: "violet", visual: "rag" },
  { number: "02", stack: ["Solidity", "Ethereum", "Hardhat", "Web3.js"], icon: Network, color: "cyan", visual: "chain" },
  { number: "03", stack: ["FastAPI", "JWT", "Testing", "Docker"], icon: LockKeyhole, color: "blue", visual: "security" },
  { number: "04", stack: ["Solidity", "ERC-20", "React", "The Graph"], icon: Network, color: "cyan", visual: "chain" },
  { number: "05", stack: ["Python", "Scikit-Learn", "Pandas", "Kafka"], icon: BrainCircuit, color: "violet", visual: "rag" },
  { number: "06", stack: ["Rust", "GraphQL", "PostgreSQL", "Redis"], icon: Database, color: "cyan", visual: "default" },
  { number: "07", stack: ["Python", "Nmap", "OWASP", "Docker"], icon: LockKeyhole, color: "blue", visual: "security" },
  { number: "08", stack: ["Airflow", "Spark", "Python", "AWS"], icon: Database, color: "cyan", visual: "default" },
  { number: "09", stack: ["Solidity", "IPFS", "Next.js", "Ethers.js"], icon: Network, color: "cyan", visual: "chain" },
  { number: "10", stack: ["OpenAI API", "LangChain", "Pinecone", "Node.js"], icon: BrainCircuit, color: "violet", visual: "rag" },
  { number: "11", stack: ["Node.js", "OAuth2", "JWT", "Docker"], icon: Code2, color: "cyan", visual: "default" },
  { number: "12", stack: ["Cryptography", "Rust", "X25519", "AES-GCM"], icon: LockKeyhole, color: "blue", visual: "security" },
  { number: "13", stack: ["React", "WebSockets", "D3.js", "Go"], icon: Database, color: "cyan", visual: "default" },
  { number: "14", stack: ["Solidity", "OpenZeppelin", "Tally", "React"], icon: Network, color: "cyan", visual: "chain" },
  { number: "15", stack: ["Python", "PyTorch", "FAISS", "FastAPI"], icon: BrainCircuit, color: "violet", visual: "rag" },
  { number: "16", stack: ["Rust", "Tokio", "ZeroMQ", "Docker"], icon: Code2, color: "cyan", visual: "default" },
  { number: "17", stack: ["Burp Suite", "Python", "FastAPI", "OWASP"], icon: LockKeyhole, color: "blue", visual: "security" },
  { number: "18", stack: ["Python", "TensorFlow", "IoT", "MQTT"], icon: Database, color: "cyan", visual: "default" },
  { number: "19", stack: ["Web3.js", "Stripe API", "Node.js", "Solidity"], icon: Network, color: "cyan", visual: "chain" },
  { number: "20", stack: ["GPT-4 API", "LangChain", "Python", "Streamlit"], icon: BrainCircuit, color: "violet", visual: "rag" },
];

export default function Projects() {
  const { t } = usePrefs();
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  // Fermeture de la modale au clavier (Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeProject !== null) {
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  const activeMeta = activeProject !== null ? projectMeta[activeProject] : null;
  const activeText = activeProject !== null ? t.projects.items[activeProject] : null;

  return (
    <section className="projects section-wrap section-block" id="projects">
      <div className="section-heading heading-row">
        <div>
          <span className="section-index">{t.projects.index}</span>
          <h2>{t.projects.h2}</h2>
        </div>
        <span className="side-note">{t.projects.side}</span>
      </div>
      
      <div className="project-grid">
        {projectMeta.map((project, index) => {
          // Masque les projets supérieurs à l'index 4 (5 projets affichés par défaut)
          if (!showAllProjects && index >= 5) return null;
          
          const Icon = project.icon;
          const text = t.projects.items[index];
          
          return (
            <motion.article 
              className={`project-card ${project.color}`} 
              key={project.number} 
              initial={{ opacity: 0, y: 22 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: (index % 5) * 0.1 }}
            >
              <div className={`project-visual ${project.visual}`}>
                <span className="project-number">{project.number} / {t.projects.caseStudy}</span>
                {project.visual === "rag" && (
                  <div className="rag-visual">
                    <div className="rag-node"><BrainCircuit /></div>
                    <span className="rag-link l1" /><span className="rag-link l2" />
                    <span className="rag-node small s1">DOC</span>
                    <span className="rag-node small s2">DB</span>
                    <span className="rag-node small s3">LLM</span>
                  </div>
                )}
                {project.visual === "chain" && (
                  <div className="chain-visual">
                    <span>01</span><span>02</span><span>03</span><span>04</span>
                    <Network />
                  </div>
                )}
                {project.visual === "security" && (
                  <div className="security-visual">
                    <div className="shield-orbit"><ShieldCheck /></div>
                    <span className="code-line line-1" /><span className="code-line line-2" />
                    <span className="code-line line-3" /><span className="code-line line-4" />
                  </div>
                )}
                <span className="project-icon"><Icon size={16} /> {text.type}</span>
              </div>
              <div className="project-content">
                <div className="project-status">{text.status}</div>
                <h3>{text.title}</h3>
                <p>{text.description}</p>
                <div className="tech-pills">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                <button className="text-link" onClick={() => setActiveProject(index)}>
                  {t.projects.explore} <ArrowUpRight size={15} />
                </button>
              </div>
            </motion.article>
          );
        })}
      </div>

      <div className="projects-more-btn">
        <button className="button button-ghost" onClick={() => setShowAllProjects(!showAllProjects)}>
          {showAllProjects ? t.projects.seeLess : t.projects.seeMore}
          {showAllProjects ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      <p className="project-disclaimer"><Sparkles size={14} /> {t.projects.disclaimer}</p>

      {/* Modal d'étude de cas */}
      {activeProject !== null && activeMeta && activeText && (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}>
          <motion.div 
            className="project-modal" 
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="modal-title" 
            initial={{ opacity: 0, y: 16, scale: 0.98 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            onClick={e => e.stopPropagation()}
          >
            <button className="modal-close" aria-label={t.ui.close} onClick={() => setActiveProject(null)}>
              <X />
            </button>
            <span className="section-index">{activeMeta.number} / {t.projects.modalIndex}</span>
            <h2 id="modal-title">{activeText.title}</h2>
            <p>{activeText.description}</p>
            <div className="modal-note">
              <Terminal size={18} />
              <div>
                <strong>{t.projects.modalNoteTitle}</strong>
                <p>{t.projects.modalNote}</p>
              </div>
            </div>
            <div className="tech-pills">{activeMeta.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
            <button className="button button-primary" onClick={() => setActiveProject(null)}>
              {t.projects.back} <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}