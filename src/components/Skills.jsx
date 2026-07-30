import React from "react";
import Section from "./Section";

const groups = [
  { title: "Testing & QA", items: ["Manual testing", "Test case design", "Regression testing", "API testing", "Bug reporting", "Agile / Scrum"] },
  { title: "Tools", items: ["Postman", "Jira", "Git"] },
  { title: "Technical", items: ["React", "Spring Boot", "Node.js", "PostgreSQL", "MongoDB", "Docker", "Kubernetes", "AWS / Azure"] },
];

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="Quality work, supported by engineering context.">
      <div className="mt-9 grid gap-4 md:grid-cols-3">
        {groups.map((group) => (
          <article key={group.title} className="rounded-2xl border border-line bg-white p-6 transition duration-200 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg">
            <h3 className="font-semibold text-primary">{group.title}</h3>
            <ul className="mt-5 space-y-3 text-sm text-secondary">
              {group.items.map((item) => <li key={item} className="flex gap-2"><span className="text-accent">✦</span>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
