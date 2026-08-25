"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ROLES } from "@/lib/data/hero";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let t: NodeJS.Timeout;
    if (typing) {
      if (displayed.length < current.length) {
        t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 72);
      } else {
        t = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 36);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(t);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-24">
      {/* Background orbs */}
      <div className="orb-1 absolute top-1/4 -left-32 w-[500px] h-[500px] bg-rose-700/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="orb-2 absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-orange-700/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-[600px] bg-gradient-to-b from-transparent via-rose-500/10 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-14 md:gap-20">
        {/* Photo — left on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-shrink-0 flex justify-center order-first md:order-none"
        >
          <div className="relative">
            {/* Gradient ring */}
            <div className="absolute -inset-[3px] rounded-[28px] bg-gradient-to-br from-rose-500 via-orange-400 to-amber-400 opacity-70 blur-[2px]" />
            <div className="absolute -inset-[3px] rounded-[28px] bg-gradient-to-br from-rose-500 via-orange-400 to-amber-400 opacity-40" />
            <div className="relative w-56 h-72 md:w-72 md:h-[360px] rounded-3xl overflow-hidden">
              <Image
                src="/photo.jpg"
                alt="Sneha Soni"
                fill
                className="object-cover object-[center_25%]"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-[#1a0808] border border-rose-500/20 rounded-xl px-3 py-2 shadow-xl">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
                </span>
                <span className="text-xs text-slate-300 font-medium whitespace-nowrap">Open to work</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="hero-animate hero-animate-1 inline-block section-tag mb-4">
            AI Software Engineer
          </p>

          <h1 className="hero-animate hero-animate-2 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none mb-4 tracking-tight whitespace-nowrap">
            <span className="text-white">SNEHA </span>
            <span className="text-gradient">SONI</span>
          </h1>

          <div className="hero-animate hero-animate-3 flex items-center gap-2 justify-center md:justify-start mb-6 h-9">
            <span className="text-rose-500 font-semibold text-lg">›</span>
            <span className="text-slate-300 text-lg font-medium">{displayed}</span>
            <span className="text-rose-500 cursor-blink text-xl leading-none">|</span>
          </div>

          <p className="hero-animate hero-animate-4 text-slate-400 text-base leading-relaxed max-w-md mb-8 mx-auto md:mx-0">
            Building AI-powered experiences at{" "}
            <span className="text-rose-400 font-semibold">Nagent.AI</span>.
            From RAG pipelines to agentic systems — I test, build, and evaluate what makes AI actually work.
          </p>

          <div className="hero-animate hero-animate-5 flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="#experience"
              className="px-6 py-3 bg-gradient-to-r from-rose-600 to-orange-500 text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-rose-600/25 hover:shadow-rose-500/40"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 border border-white/10 hover:border-rose-500/30 hover:text-rose-300 transition-all"
            >
              Get in Touch →
            </a>

            {/* Social */}
            <a
              href="https://linkedin.com/in/sneha-soni-73720625b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 rounded-xl border border-white/10 hover:border-rose-500/30 flex items-center justify-center text-slate-500 hover:text-rose-400 transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:snehasoni0204@gmail.com"
              aria-label="Email"
              className="w-11 h-11 rounded-xl border border-white/10 hover:border-rose-500/30 flex items-center justify-center text-slate-500 hover:text-rose-400 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-slate-600 text-xs tracking-widest uppercase">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-rose-500/50 to-transparent" />
      </motion.div>
    </section>
  );
}
