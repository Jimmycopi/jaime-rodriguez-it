"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { SERVICES_LIST } from "@/data/siteData";

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-white dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Servicios Especializados</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SERVICES_LIST.map((service, idx) => {
            const IconComponent = (Icons[service.icon as keyof typeof Icons] as React.ElementType) || Icons.Cpu;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.03 }} className="glass-panel rounded-2xl p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center"><IconComponent className="w-5 h-5" /></div>
                    <span className="text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800">{service.tag}</span>
                  </div>
                  <h3 className="font-bold text-base mb-2">{service.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{service.description}</p>
                </div>
                <a href="#contacto" className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-sky-500 hover:underline">Solicitar <Icons.ChevronRight className="w-3.5 h-3.5" /></a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
