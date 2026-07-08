import React from "react";

export default function Navbar() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm sm:px-8">
      <a href="/" className="font-semibold text-primary">
        Daniella
      </a>
      <nav className="flex items-center gap-5 text-secondary sm:gap-7">
        <a href="#work" className="transition-colors hover:text-primary">
          work
        </a>
        <a href="#about" className="transition-colors hover:text-primary">
          about
        </a>
        <a href="#fun" className="transition-colors hover:text-primary">
          fun
        </a>
        <a href="mailto:hello@example.com" className="hidden transition-colors hover:text-primary sm:inline">
          contact
        </a>
      </nav>
    </header>
  );
}
