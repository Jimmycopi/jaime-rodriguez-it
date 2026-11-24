"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { PORTFOLIO_PROJECTS } from "@/data/siteData";

export function Portfolio() {
  return (
    <section id="portafolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Portafolio de Proyectos</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_PROJECTS.map((project, idx) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="glass-panel rounded-2xl overflow-hidden">
              <div className="relative h-52 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-sky-600 text-white">{project.category}</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-slate-500 mb-1">{project.client}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{project.description}</p>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500 bg-emerald-500/10 rounded-lg px-3 py-2 mb-4">
                  <TrendingUp className="w-4 h-4" /> <span>{project.metrics}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
