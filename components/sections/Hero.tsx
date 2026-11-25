"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar, ShieldCheck, Server, Database } from "lucide-react";
import { OWNER_DATA } from "@/data/siteData";

export function Hero() {
  const whatsappUrl = `https://wa.me/${OWNER_DATA.phoneRaw}?text=${encodeURIComponent(OWNER_DATA.whatsappMessage)}`;

  return (
    <section className="relative overflow-hidden bg-grid-pattern pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-700 dark:text-sky-300 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" /> {OWNER_DATA.title} • {OWNER_DATA.location}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">{OWNER_DATA.name}</h1>
            <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-sky-600 to-blue-500 dark:from-sky-400 dark:to-blue-300 bg-clip-text text-transparent">{OWNER_DATA.role}</h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl">&ldquo;{OWNER_DATA.tagline}&rdquo;</p>
            <div className="flex flex-wrap gap-3.5 pt-2">
              <a href="#contacto" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-lg">Solicitar Servicio <ArrowRight className="w-4 h-4" /></a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
              <a href="#citas" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel hover:border-sky-500 font-semibold text-sm"><Calendar className="w-4 h-4 text-sky-500" /> Agendar Cita</a>
            </div>
            <div className="pt-4 flex flex-wrap gap-6 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5"><Server className="w-4 h-4 text-sky-500" /> Soporte Empresarial & Residencial</span>
              <span className="flex items-center gap-1.5"><Database className="w-4 h-4 text-sky-500" /> SQL Server • Access • Visual FoxPro</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/80 dark:border-sky-500/30 shadow-2xl tech-glow">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=85" alt="Infraestructura tecnológica" className="w-full h-[380px] object-cover" />
              <div className="absolute bottom-5 left-5 right-5 glass-panel rounded-xl p-4">
                <p className="text-xs text-sky-400 font-semibold uppercase">Trayectoria Institucional</p>
                <p className="text-sm font-bold text-white mt-0.5">OPTEC • INEGI • SEGOB • INEA • REPSS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
