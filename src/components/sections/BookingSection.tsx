"use client";

import { Calendar, Clock, Video, MapPin, ExternalLink } from "lucide-react";

export function BookingSection() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "#";
  const googleCalUrl = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_URL || "#";

  return (
    <section id="citas" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-sky-500/30 tech-glow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-sky-500"><Calendar className="w-4 h-4" /> Agenda Digital</span>
              <h2 className="text-3xl font-bold">Agenda una Cita o Consultoría</h2>
              <p className="text-sm text-slate-600 dark:text-slate-300">Reserva en Calendly o Google Calendar para diagnóstico remoto o visita en Ciudad de México.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-sky-500" /> <span>30 / 60 min</span></div>
                <div className="flex items-center gap-2"><Video className="w-4 h-4 text-sky-500" /> <span>Remoto</span></div>
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-sky-500" /> <span>CDMX</span></div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="w-full py-4 px-6 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm flex items-center justify-between">
                <span>Agendar en Calendly</span> <ExternalLink className="w-4 h-4" />
              </a>
              <a href={googleCalUrl} target="_blank" rel="noopener noreferrer" className="w-full py-4 px-6 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-semibold text-sm flex items-center justify-between border border-slate-700">
                <span>Agendar en Google Calendar</span> <ExternalLink className="w-4 h-4 text-sky-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
