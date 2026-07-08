import React from "react";
import { projects } from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


export default function ProjectCard() {
  return (
    <>
      {projects.map((project) => (
        <article
          key={project.title}
          className="group mx-auto grid w-full max-w-5xl overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[0_24px_70px_rgba(0,0,0,0.32)] md:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="flex flex-col justify-center p-7 text-left sm:p-9">
            <div className="mb-2 flex items-center gap-6">
              <img
                src={project.image}
                alt=""
                className="h-12 w-12 rounded-full border border-line object-cover"
              />
              <p className="text-base font-mono text-primary">{project.shortTitle}</p>
            </div>
            <p className="mb-2 text-sm font-semibold leading-6 text-muted">{project.context}</p>
            <h2 className="text-2xl font-semibold leading-tight text-primary sm:text-3xl">
              {project.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-secondary">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg text-secondary">
              <span>{project.tags.join(" | ")}</span>

            </div>
            <div className="mt-5 flex items-center gap-x-3 gap-y-2 text-sm text-secondary">
                <a
                href={project.code}
                className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-secondary"
              >
                <FaGithub className="inline h-4 w-4" />
              </a>
              <span className="mx-2 text-secondary">|</span>
              <a
                href={project.link}
                className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-secondary"
              >
                <FaExternalLinkAlt className="inline h-4 w-4" />
              </a>

              </div>
          </div>

          <a href={project.link} className="block" aria-label={project.title}>
            <div className="h-full min-h-[18rem] overflow-hidden bg-black">
              <img
                src={project.image}
                alt={`${project.title} project visual`}
                className="h-full min-h-[18rem] w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
            </div>
          </a>
        </article>
      ))}
    </>
  );
}
