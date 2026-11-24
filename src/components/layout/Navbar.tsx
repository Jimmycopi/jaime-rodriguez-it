"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Terminal, CreditCard } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { OWNER_DATA } from "@/data/siteData";

const NAV_LINKS = [
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Portafolio", href: "/#portafolio" },
  { label: "Testimonios", href: "/#testimonios" },
  { label: "Agendar Cita", href: "/#citas" },
  { label: "Contacto", href: "/#contacto" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-blue-700 flex items-center justify-center text-white shadow-md">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-slate-900 dark:text-white block leading-none">{OWNER_DATA.name}</span>
            <span className="text-[11px] text-sky-600 dark:text-sky-400 font-medium">{OWNER_DATA.title}</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/nfc" className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-slate-900 dark:bg-sky-500/10 text-white dark:text-sky-400 border border-slate-700 dark:border-sky-500/30 hover:bg-sky-600 hover:text-white transition-all">
            <CreditCard className="w-4 h-4" /> Tarjeta NFC
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menú" className="p-2 rounded-lg border border-slate-200 dark:border-slate-800">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass-panel border-t border-slate-200 dark:border-slate-800 px-4 py-4 space-y-3">
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium">
              {item.label}
            </Link>
          ))}
          <Link href="/nfc" onClick={() => setMobileOpen(false)} className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-sky-600 text-white text-sm font-semibold">
            <CreditCard className="w-4 h-4" /> Tarjeta Digital NFC
          </Link>
        </div>
      )}
    </header>
  );
}
