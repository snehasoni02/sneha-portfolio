"use client";
import { motion } from "framer-motion";
import { EXPERIENCES } from "@/lib/data/experience";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader tag="03 · Experience" title="Work" highlight="Experience" />
        </motion.div>

        <div className="space-y-6">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.hash}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              {/* Header bar */}
              <div className="px-6 py-4 border-b border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${exp.dotColor} shadow-lg ${exp.shadowColor}`} />
                  <div>
                    <h3 className="text-white font-bold text-base">{exp.role}</h3>
                    <p className="text-sm">
                      <span className="text-rose-400 font-medium">{exp.company}</span>
                      <span className="text-slate-600 mx-2">·</span>
                      <span className="text-slate-500">{exp.location}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs text-slate-400 bg-white/[0.05] border border-white/[0.08] px-3 py-1.5 rounded-lg">
                    {exp.period}
                  </span>
                  {exp.tag && (
                    <span className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20">
                      {exp.tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Bullets */}
              <div className="px-6 py-5">
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.04 }}
                      className="flex gap-3 text-slate-300 text-sm leading-relaxed"
                    >
                      <span className="w-1 h-1 rounded-full bg-gradient-to-br from-rose-500 to-orange-400 mt-2 flex-shrink-0" />
                      {bullet}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech pills */}
                {exp.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/[0.04]">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-slate-500 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-lg"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
