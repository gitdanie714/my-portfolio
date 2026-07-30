import React from "react";
import Section from "./Section";

export default function Certifications() {
  return (
    <Section id="certifications" eyebrow="Learning" title="Certifications">
      <div className="mt-8 rounded-2xl border border-dashed border-line bg-white p-6 sm:flex sm:items-center sm:justify-between">
        <div><h3 className="font-semibold text-primary">QA certification roadmap</h3><p className="mt-2 text-sm leading-6 text-secondary">Focused QA certifications and completed credentials will be listed here as they are earned.</p></div>
        <span className="mt-4 inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-accent sm:mt-0">Ongoing</span>
      </div>
    </Section>
  );
}
