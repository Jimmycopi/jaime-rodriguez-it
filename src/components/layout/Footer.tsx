import Link from "next/link";
import { Terminal, MapPin, Phone, Mail, QrCode } from "lucide-react";
import { OWNER_DATA } from "@/data/siteData";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-lg bg-sky-600 flex items-center justify-center text-white">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white">{OWNER_DATA.name}</p>
              <p className="text-xs text-sky-400">{OWNER_DATA.title}</p>
            </div>
          </div>
          <p className="text-sm text-slate-400">{OWNER_DATA.tagline}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navegación</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/#experiencia" className="hover:text-sky-400">Experiencia</Link></li>
            <li><Link href="/#servicios" className="hover:text-sky-400">Servicios</Link></li>
            <li><Link href="/#portafolio" className="hover:text-sky-400">Portafolio</Link></li>
            <li><Link href="/nfc" className="inline-flex items-center gap-1.5 text-sky-400 hover:underline"><QrCode className="w-4 h-4" /> Tarjeta NFC & QR</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contacto</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2.5"><MapPin className="w-4 h-4 text-sky-400" /><span>{OWNER_DATA.location}</span></li>
            <li className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-sky-400" /><a href={`tel:+${OWNER_DATA.phoneRaw}`}>{OWNER_DATA.phoneDisplay}</a></li>
            <li className="flex items-center gap-2.5"><Mail className="w-4 h-4 text-sky-400" /><a href={`mailto:${OWNER_DATA.email}`}>{OWNER_DATA.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {OWNER_DATA.name} — Ciudad de México.
      </div>
    </footer>
  );
}
