"use client";
import { useState } from "react";
import type { AppPhase } from "@/lib/types";
import CurtainReveal from "@/components/effects/CurtainReveal";
import CursorGlow from "@/components/effects/CursorGlow";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const [phase, setPhase] = useState<AppPhase>("curtain");

  return (
    <>
      <CursorGlow />
      <CurtainReveal phase={phase} onDone={() => setPhase("ready")} />

      <main
        aria-hidden={phase !== "ready"}
        style={{ pointerEvents: phase !== "ready" ? "none" : undefined }}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </>
  );
}
