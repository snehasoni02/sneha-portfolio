"use client";
import { motion } from "framer-motion";
import { KV_ROWS, STATS } from "@/lib/data/about";
import SectionHeader from "@/components/ui/SectionHeader";

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader tag="01 · About" title="About" highlight="Me" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-slate-300 leading-relaxed text-[15px]">
              I&apos;m an AI Software Engineer with a passion for building intelligent systems
              that actually work. At{" "}
              <span className="text-rose-400 font-semibold">Nagent.AI</span>, I evaluate LLMs,
              build AI agents, design RAG pipelines, and obsess over prompt quality and
              hallucination reduction.
            </p>
            <p className="text-slate-400 leading-relaxed text-[15px]">
              I bridge the gap between engineering and AI quality — every system I test,
              I understand deeply enough to help build it better.
            </p>

            {/* Profile KV */}
            <div className="space-y-3 pt-2">
              {KV_ROWS.map((row, i) => (
                <motion.div
                  key={row.k}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className="text-slate-600 w-28 flex-shrink-0 text-xs uppercase tracking-wider">{row.k.trim()}</span>
                  <span className="w-px h-3 bg-white/10 flex-shrink-0" />
                  <span className={row.highlight ? "text-rose-400 font-medium" : "text-slate-300"}>
                    {row.v}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="glass-card rounded-2xl p-6 flex items-center gap-5"
              >
                <div className="w-1 h-12 rounded-full bg-gradient-to-b from-rose-500 to-orange-400 flex-shrink-0" />
                <div>
                  <div className="text-3xl font-extrabold text-gradient leading-none mb-1">{s.val}</div>
                  <div className="text-slate-400 text-sm">{s.label}</div>
                </div>
              </motion.div>
            ))}

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.36 }}
              className="glass-card rounded-2xl p-6 flex items-center gap-5"
            >
              <div className="w-1 h-12 rounded-full bg-gradient-to-b from-rose-500 to-orange-400 flex-shrink-0" />
              <div>
                <div className="text-3xl font-extrabold text-gradient leading-none mb-1">📍</div>
                <div className="text-slate-400 text-sm">Bengaluru (Remote)</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
