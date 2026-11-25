"use client";

import Link from "next/link";
import { Phone, Mail, MessageCircle, Download, Share2, MapPin, Linkedin, Globe, ArrowLeft, Terminal } from "lucide-react";
import { OWNER_DATA } from "@/data/siteData";
import { downloadVCard } from "@/lib/vcard";
import { QrGenerator } from "@/components/ui/QrGenerator";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export default function NfcCardPage() {
  const whatsappUrl = `https://wa.me/${OWNER_DATA.phoneRaw}?text=${encodeURIComponent(OWNER_DATA.whatsappMessage)}`;

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({ title: `${OWNER_DATA.name} - ${OWNER_DATA.title}`, text: OWNER_DATA.role, url: window.location.href });
    } else {
      await navigator.clipboard.writeText(window.location.href);
      alert("Enlace copiado.");
    }
  };

  return (
    <div className="min-h-screen bg-grid-pattern py-8 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-md flex items-center justify-between mb-6">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold hover:text-sky-500"><ArrowLeft className="w-4 h-4" /> Sitio Web</Link>
        <ThemeToggle />
      </div>
      <div className="w-full max-w-md glass-panel rounded-3xl overflow-hidden shadow-2xl border border-sky-500/30 tech-glow">
        <div className="h-32 bg-gradient-to-r from-slate-950 via-sky-900 to-blue-700 relative">
          <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white/10 text-white text-[10px] font-semibold uppercase flex items-center gap-1"><Terminal className="w-3 h-3 text-sky-300" /> NFC ID</span>
        </div>
        <div className="px-6 pb-8 -mt-14 text-center">
          <div className="w-28 h-28 mx-auto rounded-full p-1 bg-gradient-to-tr from-sky-500 to-blue-600 shadow-xl">
         <img src="/jimbo-avatar.png" alt={OWNER_DATA.name} className="w-full h-full object-cover rounded-full bg-slate-900" />
          </div>
          <h1 className="text-2xl font-extrabold mt-4">{OWNER_DATA.name}</h1>
          <p className="text-xs font-bold uppercase text-sky-500 mt-1">{OWNER_DATA.title}</p>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">{OWNER_DATA.role}</p>
          <p className="text-xs text-slate-400 mt-2 flex items-center justify-center gap-1"><MapPin className="w-3.5 h-3.5 text-sky-500" /> {OWNER_DATA.location}</p>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <button onClick={downloadVCard} className="col-span-2 py-3.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm flex items-center justify-center gap-2"><Download className="w-4 h-4" /> Descargar vCard</button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="py-3 px-4 rounded-xl bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
            <a href={`tel:+${OWNER_DATA.phoneRaw}`} className="py-3 px-4 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-sky-400" /> Llamar</a>
            <a href={`mailto:${OWNER_DATA.email}`} className="py-3 px-4 rounded-xl glass-panel font-semibold text-xs flex items-center justify-center gap-2"><Mail className="w-4 h-4 text-sky-500" /> Correo</a>
            <button onClick={handleShare} className="py-3 px-4 rounded-xl glass-panel font-semibold text-xs flex items-center justify-center gap-2"><Share2 className="w-4 h-4 text-sky-500" /> Compartir</button>
          </div>

          <div className="flex justify-center gap-4 mt-6 pt-5 border-t border-slate-200/70 dark:border-slate-800">
            <Link href="/" className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800"><Globe className="w-5 h-5" /></Link>
            <a href={OWNER_DATA.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800"><Linkedin className="w-5 h-5" /></a>
          </div>

          <div className="mt-6">
            <QrGenerator value={`${OWNER_DATA.siteUrl}/nfc`} title="QR Tarjeta NFC" fileName="qr-nfc-card.png" size={150} />
          </div>
        </div>
      </div>
    </div>
  );
}
