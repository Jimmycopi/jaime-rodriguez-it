"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { WHY_CHOOSE_ME } from "@/data/siteData";

export function WhyChooseMe() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">¿Por Qué Elegirme?</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ME.map((item, idx) => {
            const IconComponent = (Icons[item.icon as keyof typeof Icons] as React.ElementType) || Icons.ShieldCheck;
            return (
              <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.06 }} className="glass-panel rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center mb-4"><IconComponent className="w-5 h-5" /></div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
