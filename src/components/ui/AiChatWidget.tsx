"use client";

import { useState } from "react";
import { Bot, X, Send, Sparkles } from "lucide-react";

export function AiChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hola, soy el asistente técnico virtual de Jaime Rodríguez V. ¿En qué puedo ayudarte hoy?" },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/ai-agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", text: "Contáctalo vía WhatsApp al 55 2951 2849." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {open ? (
        <div className="w-80 sm:w-96 glass-panel rounded-2xl shadow-2xl overflow-hidden border border-sky-500/30">
          <div className="bg-gradient-to-r from-sky-600 to-blue-800 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <div>
                <p className="text-sm font-semibold">Asistente IT Virtual</p>
                <p className="text-[11px] text-sky-100">Listo para Gemini API / Copilot</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Cerrar"><X className="w-5 h-5" /></button>
          </div>
          <div className="h-64 overflow-y-auto p-4 space-y-3 text-sm bg-slate-50/90 dark:bg-slate-950/90">
            {messages.map((m, idx) => (
              <div key={idx} className={`p-3 rounded-xl max-w-[85%] ${m.role === "user" ? "ml-auto bg-sky-600 text-white" : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"}`}>
                {m.text}
              </div>
            ))}
            {loading && <p className="text-xs text-slate-400">Analizando consulta...</p>}
          </div>
          <form onSubmit={sendMessage} className="p-2 border-t border-slate-200 dark:border-slate-800 flex gap-2">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Escribe tu consulta..." className="flex-1 text-sm px-3 py-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700" />
            <button type="submit" aria-label="Enviar" className="p-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg"><Send className="w-4 h-4" /></button>
          </form>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 dark:bg-slate-800 text-white border border-sky-500/40 shadow-lg text-xs font-medium">
          <Bot className="w-4 h-4 text-sky-400" /> <span>Asistente IT</span>
        </button>
      )}
    </div>
  );
}
