"use client";

import { motion } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";
import { EXPERIENCE_INSTITUTIONS } from "@/data/siteData";

export function Experience() {
  return (
    <section id="experiencia" className="py-20 bg-white dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Experiencia Profesional</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERIENCE_INSTITUTIONS.map((item, idx) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className={`rounded-2xl p-6 border ${item.highlight ? "bg-gradient-to-br from-sky-950 to-slate-900 text-white border-sky-500/50 tech-glow" : "glass-panel"}`}>
              <div className="flex items-center gap-2.5 mb-3">
                <Building2 className="w-5 h-5 text-sky-400" />
                <h3 className="font-bold text-lg">{item.name}</h3>
              </div>
              <p className="text-xs font-semibold text-sky-400 mb-2 flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> {item.role}</p>
              <p className="text-sm opacity-85">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
