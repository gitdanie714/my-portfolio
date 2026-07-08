import React from "react";
import { SiReaddotcv } from "react-icons/si";
import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import { IoMailOpenOutline } from "react-icons/io5";
import { projects } from "../data/projects";

export default function Hero() {
  return (
    <section className="pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div className="max-w-5xl"> 
        <div className="mb-2 flex items-center gap-6">
              <img src={projects[0].image} className="h-12 w-12 rounded-full border border-line object-cover" alt="" />
            </div>
        <h1 className="text-[1.25rem] font-semibold leading-[0.95] text-primary sm:text-[2rem] lg:text-[3rem]">
          Hi there!
          <br />
          I'm Orji Daniella.
        </h1>
        <p className="mt-10 max-w-3xl text-1xl leading-9 text-secondary sm:text-2xl sm:leading-[1.35]">
          I'm a Software Engineer.I build  frontend and backend applications with a focus on creating seamless user experiences.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
          href="https://drive.google.com/file/d/1TXV_iKrfBdR3SBKZ8FAXhhQAlwSM6bQ-/view?usp=sharing"
            className="rounded-lg border border-line px-6 py-3 text-lg font-semibold text-primary transition-colors hover:bg-primary/10"
          >
             <SiReaddotcv className="inline h-7 w-7" />
          </a>
          <a href="https://github.com/gitdanie714" className="rounded-lg border border-line px-6 py-3 text-lg font-semibold text-primary transition-colors hover:bg-primary/10">
            <FaGithub className="inline h-7 w-7" />
          </a>
          <a href="https://www.linkedin.com/in/daniella-garcia-714/" className="rounded-lg border border-line px-6 py-3 text-lg font-semibold text-primary transition-colors hover:bg-primary/10">
            <FaLinkedin className="inline h-7 w-7" />
          </a>
          <a href="https://twitter.com/daniellagarcia" className="rounded-lg border border-line px-6 py-3 text-lg font-semibold text-primary transition-colors hover:bg-primary/10">
            <FaTwitter className="inline h-7 w-7" />
          </a>
          <a href="mailto:daniellamarachi16@gmail.com" className="rounded-lg border border-line px-6 py-3 text-lg font-semibold text-primary transition-colors hover:bg-primary/10">
            <IoMailOpenOutline className="inline h-7 w-7" />
          </a>
        </div>
      </div>
    </section>
  );
}
       
            

    
