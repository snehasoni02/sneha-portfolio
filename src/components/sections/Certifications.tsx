"use client";
import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/lib/data/certifications";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            tag="05 · Certifications"
            highlight="Certifications"
            subtitle="Verified credentials from HackerRank."
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.09 }}
              className="glass-card rounded-2xl p-5 flex flex-col gap-3"
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${cert.dotColor} bg-opacity-10`}
                  style={{ background: "rgba(244,63,94,0.1)" }}>
                  <svg className={`w-4 h-4 ${cert.badgeColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <span className={`text-[10px] font-bold tracking-wider ${cert.badgeColor}`}>
                  ✓ VERIFIED
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-white font-semibold text-sm">{cert.title}</h3>
                <p className="text-slate-500 text-xs mt-0.5">{cert.issuer}</p>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-xs leading-relaxed border-t border-white/[0.04] pt-3">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
