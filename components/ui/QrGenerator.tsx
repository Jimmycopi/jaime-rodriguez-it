"use client";

import { QRCodeSVG } from "qrcode.react";
import { Download } from "lucide-react";
import { useRef } from "react";

interface QrGeneratorProps {
  value: string;
  title: string;
  subtitle?: string;
  fileName?: string;
  size?: number;
}

export function QrGenerator({ value, title, subtitle, fileName = "qr-jaime-rodriguez.png", size = 180 }: QrGeneratorProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    const svg = containerRef.current?.querySelector("svg");
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = size + 40;
      canvas.height = size + 40;
      if (ctx) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 20, 20);
        const link = document.createElement("a");
        link.download = fileName;
        link.href = canvas.toDataURL("image/png");
        link.click();
      }
    };
    img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
  };

  return (
    <div className="glass-panel rounded-2xl p-6 flex flex-col items-center text-center shadow-lg">
      <h4 className="font-semibold text-base text-slate-900 dark:text-white mb-1">{title}</h4>
      {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">{subtitle}</p>}
      <div ref={containerRef} className="p-4 bg-white rounded-xl shadow-inner border border-slate-100">
        <QRCodeSVG value={value} size={size} bgColor="#ffffff" fgColor="#050b14" level="H" />
      </div>
      <button type="button" onClick={handleDownload} className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-sky-600 dark:text-sky-400 hover:underline">
        <Download className="w-3.5 h-3.5" /> Descargar QR PNG
      </button>
    </div>
  );
}
