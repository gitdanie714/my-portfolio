import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="work" className="pb-28 sm:pb-36">
      <div className="grid justify-items-center gap-10">
        <ProjectCard />
      </div>
    </section>
  );
}
