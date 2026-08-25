"use client";
import { motion } from "framer-motion";
import { SKILL_GROUPS } from "@/lib/data/skills";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader tag="02 · Skills" title="Technical" highlight="Skills" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.dir}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="glass-card rounded-2xl p-5"
            >
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-rose-500 to-orange-400" />
                <h3 className="text-sm font-semibold text-white">{group.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill.name} className="skill-tag text-xs text-slate-300 px-2.5 py-1 rounded-lg cursor-default">
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
