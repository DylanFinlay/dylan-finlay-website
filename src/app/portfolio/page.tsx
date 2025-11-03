"use client";

import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Home from "@/components/portfolio/Home";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";

export default function PortfolioPage() {
  return (
    <div>
      <Home />
      <About />
      <Experience />
      <Projects nav={false} />
      <Skills />
    </div>
  );
}
