import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-primary">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 sm:px-8">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
