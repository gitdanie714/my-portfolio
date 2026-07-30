import React from "react";
import ProjectCard from "./ProjectCard";
import Section from "./Section";

export default function Projects() {
  return <Section id="projects" eyebrow="Selected work" title="Projects examined through a QA lens."><p className="mt-4 max-w-2xl text-base leading-7 text-secondary">Each project pairs product context with the areas where thoughtful validation matters most. The validation scope reflects the project’s architecture and public functionality.</p><div className="mt-9 grid gap-6"><ProjectCard /></div></Section>;
}
