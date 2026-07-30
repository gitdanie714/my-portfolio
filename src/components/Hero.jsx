import React from "react";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const resumeUrl = "https://drive.google.com/file/d/1TXV_iKrfBdR3SBKZ8FAXhhQAlwSM6bQ-/view?usp=sharing";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[calc(100vh-5rem)] items-center py-20 sm:py-28">
      <div className="absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <div className="max-w-4xl">
        <p className="hero-enter text-sm font-bold uppercase tracking-[0.22em] text-accent">Hello, I’m Orji Daniella</p>
        <h1 className="hero-enter hero-enter-delay-1 mt-5 text-5xl font-semibold leading-[0.98] tracking-tight text-primary sm:text-6xl lg:text-7xl">Software Engineer <span className="text-accent">with a full-stack lens.</span></h1>
        <p className="hero-enter hero-enter-delay-2 mt-7 max-w-2xl text-lg leading-8 text-secondary sm:text-xl">I help teams ship more confidently by examining the details that shape dependable, intuitive product experiences—from user flows to API behavior and edge cases.</p>
        <div className="hero-enter hero-enter-delay-3 mt-9 flex flex-wrap gap-3">
          <a href="#projects" className="button-primary">View QA-focused work <FaArrowDown className="text-xs" /></a>
          <a href={resumeUrl} target="_blank" rel="noreferrer" className="button-secondary"><HiOutlineDocumentArrowDown className="text-lg" /> Download résumé</a>
        </div>
        <div className="hero-enter hero-enter-delay-3 mt-8 flex gap-4 text-secondary">
          <a aria-label="GitHub" className="social-link" href="https://github.com/gitdanie714" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a aria-label="LinkedIn" className="social-link" href="https://www.linkedin.com/in/daniella-garcia-714/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
}
