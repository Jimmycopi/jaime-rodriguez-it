"use client";

import { MessageCircle } from "lucide-react";
import { OWNER_DATA } from "@/data/siteData";

export function WhatsAppFloat() {
  const url = `https://wa.me/${OWNER_DATA.phoneRaw}?text=${encodeURIComponent(OWNER_DATA.whatsappMessage)}`;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl transition-all hover:scale-105">
      <MessageCircle className="w-6 h-6" />
      <span className="text-sm font-semibold hidden sm:inline">WhatsApp Directo</span>
    </a>
  );
}
