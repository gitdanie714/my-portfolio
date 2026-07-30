import React from "react";
import Section from "./Section";

const steps = [
  ["01", "Map the risk", "Identify primary user journeys, integration points, and failure states before testing begins."],
  ["02", "Validate deliberately", "Turn requirements into focused functional, API, and edge-case checks that are clear to reproduce."],
  ["03", "Share actionable findings", "Document observed behavior, expected behavior, context, and impact so the team can resolve issues efficiently."],
];

export default function QualityProcess() {
  return (
    <Section id="process" eyebrow="QA process" title="A practical loop for making releases more reliable.">
      <div className="mt-9 grid gap-4 md:grid-cols-3">
        {steps.map(([number, title, text]) => <article key={number} className="rounded-2xl border border-line bg-surface p-6"><p className="font-mono text-sm text-accent">{number}</p><h3 className="mt-8 text-xl font-semibold text-primary">{title}</h3><p className="mt-3 text-sm leading-7 text-secondary">{text}</p></article>)}
      </div>
      <p className="mt-5 text-sm leading-6 text-muted">Project-specific bug counts and before/after metrics will be added as they are documented.</p>
    </Section>
  );
}
