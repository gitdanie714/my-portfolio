import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import QualityProcess from "./components/QualityProcess";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-primary">
      <Navbar />
      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <QualityProcess />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
