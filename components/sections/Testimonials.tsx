"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/data/siteData";

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-white dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Testimonios</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div key={item.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.07 }} className="glass-panel rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400" />)}</div>
                  <Quote className="w-5 h-5 text-sky-500/40" />
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 italic mb-6">&ldquo;{item.content}&rdquo;</p>
              </div>
              <div className="border-t border-slate-200/70 dark:border-slate-800 pt-4">
                <p className="font-bold text-sm">{item.name}</p>
                <p className="text-xs text-sky-500">{item.role} • {item.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
