"use client";

import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { usePrefs } from "@/components/Preferences";
import { profile } from "@/lib/i18n";

export default function Contact() {
  const { t } = usePrefs();
  const mailto = `mailto:${profile.email}`;

  return (
    <section className="contact section-wrap section-block" id="contact">
      <div className="contact-orb" aria-hidden="true"><div /><div /><div /></div>
      <div className="contact-copy">
        <span className="section-index">{t.contact.index}</span>
        <h2>{t.contact.h2[0]}<br /><span className="gradient-text">{t.contact.h2[1]}</span></h2>
        <p>{t.contact.body}</p>
        <a className="button button-primary" href={`${mailto}?subject=${encodeURIComponent(t.contact.mailSubject)}`}>{t.contact.cta} <ArrowUpRight size={16} /></a>
      </div>
      <div className="contact-links">
        <a href={mailto}><Mail size={17} /><span><small>{t.contact.email}</small>{profile.email}</span><ArrowUpRight size={15} /></a>
        <a href={profile.whatsapp.url} target="_blank" rel="noreferrer"><MessageCircle size={17} /><span><small>WHATSAPP</small>{profile.whatsapp.label}</span><ArrowUpRight size={15} /></a>
        <a href={profile.github.url} target="_blank" rel="noreferrer"><Github size={17} /><span><small>GITHUB</small>{profile.github.label}</span><ArrowUpRight size={15} /></a>
        <a href={profile.linkedin.url} target="_blank" rel="noreferrer"><Linkedin size={17} /><span><small>LINKEDIN</small>{profile.linkedin.label}</span><ArrowUpRight size={15} /></a>
      </div>
    </section>
  );
}