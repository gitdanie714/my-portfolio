import React from "react";
import { projects } from "../data/projects";

const socials = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Resume", href: "#" },
  { label: "Email", href: "mailto:hello@example.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 text-sm text-secondary sm:px-8 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <p className="mb-4 font-medium text-primary">Daniella</p>
          <p className="mt-3 max-w-xs leading-6">
            Made with care and a lot of clean commits.
          </p>
        </div>

        <div>
          <p className="mb-4 font-medium text-primary">
            navigation
          </p>
          <div className="space-y-3">
            <a href="#work" className="block transition-colors hover:text-primary">Work</a>
            <a href="#about" className="block transition-colors hover:text-primary">About</a>
            <a href="#fun" className="block transition-colors hover:text-primary">Fun</a>
          </div>
        </div>

        <div>
          <p className="mb-4 font-medium text-primary">
            Connect
          </p>
          <div className="space-y-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="block transition-colors hover:text-primary"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 font-medium text-primary">
            case studies
          </p>
          <div className="space-y-3">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="block transition-colors hover:text-primary"
              >
                {project.shortTitle}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
