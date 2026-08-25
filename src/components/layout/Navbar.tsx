"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  // IntersectionObserver to track active section
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-3 bg-[#0f0a0a]/90 backdrop-blur-xl border-b border-white/[0.04]" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-orange-400 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-rose-600/30 group-hover:shadow-rose-500/50 transition-shadow">
            S
          </div>
          <span className="text-white font-semibold text-sm group-hover:text-rose-300 transition-colors">
            Sneha Soni
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm capitalize tracking-wide transition-colors duration-200 ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-rose-500 to-orange-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          <a
            href="/Sneha_Resume.pdf"
            download
            className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-rose-600 to-orange-500 text-white font-medium hover:opacity-90 transition-opacity shadow-md shadow-rose-600/20"
          >
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-8 h-8 flex flex-col gap-1.5 items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-5 rotate-45 translate-y-2" : "w-5"}`} />
          <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-4"}`} />
          <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-5 -rotate-45 -translate-y-2" : "w-5"}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#120808]/98 backdrop-blur-xl border-t border-white/[0.04]"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm capitalize transition-colors ${
                      isActive ? "text-rose-400 font-medium" : "text-slate-300 hover:text-white"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {isActive && <span className="mr-2 text-rose-500">›</span>}
                    {link.label}
                  </a>
                );
              })}
              <a
                href="/Sneha_Resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-rose-600 to-orange-500 text-white font-medium text-center mt-1"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
