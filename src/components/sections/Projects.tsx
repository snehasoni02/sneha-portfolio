"use client";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data/projects";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            tag="04 · Projects"
            title="Featured"
            highlight="Projects"
            subtitle="Things I've built — from backend systems to AI integrations."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.015] transition-transform duration-300"
            >
              {/* Project number */}
              <div className="flex items-start justify-between">
                <span className="text-4xl font-black text-gradient opacity-30 leading-none">
                  0{i + 1}
                </span>
                <div className="flex gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-slate-500 bg-white/[0.04] border border-white/[0.06] px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-white/[0.04]">
                {project.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs text-rose-400/80 bg-rose-500/[0.07] border border-rose-500/[0.15] px-2.5 py-1 rounded-lg"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Coming soon */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="rounded-2xl border border-dashed border-white/[0.07] p-8 flex flex-col items-center justify-center gap-3 text-center"
          >
            <div className="w-10 h-10 rounded-xl border border-dashed border-rose-500/20 flex items-center justify-center">
              <span className="text-rose-500/40 text-xl">+</span>
            </div>
            <p className="text-slate-600 text-sm">More projects coming soon</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
