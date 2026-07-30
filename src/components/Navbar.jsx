import React, { useEffect, useState } from "react";

const links = [["about", "About"], ["skills", "Skills"], ["projects", "Projects"], ["contact", "Contact"]];

export default function Navbar() {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: "-35% 0px -55% 0px" });
    ["home", ...links.map(([id]) => id)].forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="font-semibold tracking-tight text-primary">Daniella<span className="text-accent">.</span></a>
        <nav aria-label="Primary navigation" className="flex items-center gap-1 text-sm">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} className={`rounded-md px-2 py-1.5 transition-colors sm:px-3 ${active === id ? "text-primary" : "text-secondary hover:text-primary"}`}>{label}</a>)}
        </nav>
      </div>
    </header>
  );
}
