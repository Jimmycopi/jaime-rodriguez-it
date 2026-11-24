"use client";

import { MapPin } from "lucide-react";
import { OWNER_DATA } from "@/data/siteData";

export function MapSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><MapPin className="w-5 h-5 text-sky-500" /> {OWNER_DATA.location}</h3>
        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg h-80">
          <iframe title="Mapa CDMX" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240864.08481701676!2d-99.28369883857054!3d19.390733610051616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0026db097507%3A0x54061076265ee841!2sCiudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1730000000000!5m2!1ses-419!2smx" width="100%" height="100%" style={{ border: 0 }} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
