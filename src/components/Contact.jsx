import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" className="pb-24" eyebrow="Contact" title="Let’s talk about quality.">
      <div className="mt-8 flex flex-col justify-between gap-7 rounded-3xl bg-primary p-7 sm:flex-row sm:items-end sm:p-10">
        <p className="max-w-lg text-lg leading-8 text-slate-300">Have a product that needs a careful eye? I’d love to connect about QA, testing, and building reliable user experiences.</p>
        <div className="flex flex-wrap gap-3">
          <a className="contact-link" href="mailto:daniellamarachi16@gmail.com"><HiOutlineMail /> Email</a>
          <a className="contact-link" href="https://www.linkedin.com/in/daniella-amarachi/" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
          <a className="contact-link" href="https://github.com/gitdanie714" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
        </div>
      </div>
    </Section>
  );
}
