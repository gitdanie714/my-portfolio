import React from "react";

const socials = [
  { label: "GitHub", href: "https://github.com/gitdanie714" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/daniella-garcia-714/" },
  { label: "Resume", href: "https://drive.google.com/file/d/1TXV_iKrfBdR3SBKZ8FAXhhQAlwSM6bQ-/view?usp=sharing" },
  { label: "Email", href: "mailto:daniellamarachi16@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 text-sm text-secondary sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="mb-4 font-medium text-primary">Daniella</p>
          <p className="mt-3 max-w-xs leading-6">
            Quality-focused software engineer with a full-stack background.
          </p>
        </div>

        <div>
          <p className="mb-4 font-medium text-primary">
            navigation
          </p>
          <div className="space-y-3">
            <a href="#projects" className="block transition-colors hover:text-primary">Projects</a>
            <a href="#about" className="block transition-colors hover:text-primary">About</a>
            <a href="#skills" className="block transition-colors hover:text-primary">Skills</a>
            <a href="#contact" className="block transition-colors hover:text-primary">Contact</a>
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
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}>
                {social.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
