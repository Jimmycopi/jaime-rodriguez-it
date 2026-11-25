"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle, Shield } from "lucide-react";
import { OWNER_DATA, SERVICES_LIST } from "@/data/siteData";
import { QrGenerator } from "@/components/ui/QrGenerator";

export function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    empresa: "",
    servicio: SERVICES_LIST[0].title,
    mensaje: "",
    honeypot: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;
    if (!formData.nombre.trim() || !formData.telefono.trim() || !formData.correo.trim()) {
      setStatus("error");
      setErrorMsg("Completa nombre, teléfono y correo.");
      return;
    }
    setStatus("sending");
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    try {
      if (!serviceId || serviceId.includes("xxxxxxx")) {
        await new Promise((r) => setTimeout(r, 800));
        setStatus("success");
        return;
      }
      await emailjs.send(serviceId, templateId, {
        from_name: formData.nombre,
        phone: formData.telefono,
        reply_to: formData.correo,
        company: formData.empresa || "Particular",
        service_requested: formData.servicio,
        message: formData.mensaje,
        to_email: OWNER_DATA.email,
      }, publicKey);
      setStatus("success");
      setFormData({ nombre: "", telefono: "", correo: "", empresa: "", servicio: SERVICES_LIST[0].title, mensaje: "", honeypot: "" });
    } catch {
      setStatus("error");
      setErrorMsg(`Error al enviar. Escribe a ${OWNER_DATA.email}.`);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white dark:bg-slate-900/40 border-t border-slate-200/70 dark:border-slate-800/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Contacto Directo</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 glass-panel rounded-2xl p-6 sm:p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input type="text" name="website" value={formData.honeypot} onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} tabIndex={-1} autoComplete="off" className="hidden" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input type="text" required placeholder="Nombre *" value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm" />
                <input type="tel" required placeholder="Teléfono *" value={formData.telefono} onChange={(e) => setFormData({ ...formData, telefono: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input type="email" required placeholder="Correo electrónico *" value={formData.correo} onChange={(e) => setFormData({ ...formData, correo: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm" />
                <input type="text" placeholder="Empresa (opcional)" value={formData.empresa} onChange={(e) => setFormData({ ...formData, empresa: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm" />
              </div>
              <select value={formData.servicio} onChange={(e) => setFormData({ ...formData, servicio: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm">
                {SERVICES_LIST.map((srv) => <option key={srv.title} value={srv.title}>{srv.title}</option>)}
              </select>
              <textarea rows={4} required placeholder="Describe tu requerimiento *" value={formData.mensaje} onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 text-sm" />
              {status === "success" && <div className="p-4 rounded-xl bg-emerald-500/15 text-emerald-400 text-sm flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> ¡Mensaje enviado correctamente!</div>}
              {status === "error" && <div className="p-4 rounded-xl bg-red-500/15 text-red-400 text-sm flex items-center gap-2"><AlertCircle className="w-5 h-5" /> {errorMsg}</div>}
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs text-slate-400 flex items-center gap-1.5"><Shield className="w-4 h-4 text-sky-500" /> Confidencialidad garantizada</span>
                <button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm"><Send className="w-4 h-4" /> {status === "sending" ? "Enviando..." : "Enviar Solicitud"}</button>
              </div>
            </form>
          </div>
          <div className="lg:col-span-4 space-y-6">
            <QrGenerator value={`https://wa.me/${OWNER_DATA.phoneRaw}?text=${encodeURIComponent(OWNER_DATA.whatsappMessage)}`} title="QR Contacto WhatsApp" fileName="qr-contacto.png" size={150} />
            <QrGenerator value={`${OWNER_DATA.siteUrl}/nfc`} title="QR Tarjeta NFC" fileName="qr-nfc.png" size={150} />
          </div>
        </div>
      </div>
    </section>
  );
}
