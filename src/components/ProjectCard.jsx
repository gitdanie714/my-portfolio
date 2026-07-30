import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";

export default function ProjectCard() {
  return projects.map((project) => (
    <article key={project.title} className="group grid overflow-hidden rounded-3xl border border-line bg-white transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl md:grid-cols-[1.1fr_0.9fr]">
      <div className="p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{project.context}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-primary">{project.title}</h3>
        <div className="mt-6 space-y-4 text-sm leading-6 text-secondary">
          <p><span className="font-semibold text-primary">Product:</span> {project.description}</p>
          <p><span className="font-semibold text-primary">Validation focus:</span> {project.validation}</p>
          <p><span className="font-semibold text-primary">Quality practice:</span> {project.quality}</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-secondary">{tag}</span>)}</div>
        <div className="mt-7 flex flex-wrap gap-5 text-sm font-semibold text-primary"><a className="inline-link" href={project.code} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a><a className="inline-link" href={project.link} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Live demo</a></div>
      </div>
      <a href={project.link} target="_blank" rel="noreferrer" className="block min-h-64 overflow-hidden bg-primary" aria-label={`View ${project.title} live demo`}><img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="h-full min-h-64 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100" /></a>
    </article>
  ));
}
