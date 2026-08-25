"use client";
import { motion } from "framer-motion";
import { CONTACT_ITEMS } from "@/lib/data/contact";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader tag="06 · Contact" title="Get In" highlight="Touch" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-white mb-3">Let&apos;s work together</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Open to new opportunities, collaborations, and conversations about AI
              engineering, agentic systems, or anything at the intersection of quality
              and intelligence.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Currently based in{" "}
              <span className="text-white font-medium">Bengaluru, India 🇮🇳</span>{" "}
              and open to remote roles worldwide.
            </p>

            <a
              href="mailto:snehasoni0204@gmail.com"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-rose-600 to-orange-500 text-white rounded-xl font-semibold text-sm hover:opacity-90 transition-opacity shadow-xl shadow-rose-600/20 hover:shadow-rose-500/35"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send a Message
            </a>
          </motion.div>

          {/* Right — contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            {CONTACT_ITEMS.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-4 flex items-center gap-4 group block"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500/15 to-orange-500/10 flex items-center justify-center text-rose-400 flex-shrink-0 group-hover:from-rose-500/25 group-hover:to-orange-500/20 transition-all">
                  {c.label === "email" && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {c.label === "phone" && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  )}
                  {c.label === "linkedin" && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                </div>
                <div className="min-w-0 flex-grow">
                  <div className="text-xs text-slate-500 capitalize mb-0.5">{c.label}</div>
                  <div className="text-sm text-white font-medium truncate group-hover:text-rose-300 transition-colors">{c.value}</div>
                </div>
                <svg className="w-4 h-4 text-slate-600 group-hover:text-orange-400 group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-white/[0.04] text-center">
          <p className="text-slate-600 text-xs">Designed &amp; Built by <span className="text-slate-500">Sneha Soni</span></p>
          <p className="text-slate-700 text-xs mt-1">© {new Date().getFullYear()} · All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
