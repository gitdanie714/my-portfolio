import React from "react";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Built with a quality-first perspective.">
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        <p className="max-w-2xl text-lg leading-8 text-secondary">
          I’m Daniella, a Software Engineer with a full-stack background. I bring close attention to detail, structured debugging, and root-cause thinking to every product experience. Building applications has taught me how interfaces, APIs, data, and deployments connect—so I can ask sharper questions about what to test and why it matters.
        </p>
        <aside className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
          <p className="text-sm font-semibold text-primary">How I approach quality</p>
          <p className="mt-3 text-sm leading-7 text-secondary">
            I start with risk: the most important user flows, integrations, and edge cases deserve attention first. I prefer shifting quality left by collaborating early, making expectations testable, and turning findings into clear, reproducible feedback.
          </p>
        </aside>
      </div>
    </Section>
  );
}
