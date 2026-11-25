import { NextResponse } from "next/server";
import { OWNER_DATA } from "@/data/siteData";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const geminiKey = process.env.GEMINI_API_KEY;
    const copilotEndpoint = process.env.COPILOT_STUDIO_ENDPOINT;

    if (copilotEndpoint && copilotEndpoint.startsWith("https://") && !copilotEndpoint.includes("default.environment")) {
      const copilotRes = await fetch(copilotEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: message }),
      });
      if (copilotRes.ok) {
        const data = await copilotRes.json();
        return NextResponse.json({ reply: data.answer || data.text });
      }
    }

    if (geminiKey && !geminiKey.includes("XXXX")) {
      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `Eres el asistente virtual de ${OWNER_DATA.name} (${OWNER_DATA.title}, ${OWNER_DATA.location}). Teléfono: ${OWNER_DATA.phoneDisplay}. Consulta: ${message}` }] }],
          }),
        }
      );
      if (geminiRes.ok) {
        const data = await geminiRes.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text) return NextResponse.json({ reply: text });
      }
    }

    return NextResponse.json({
      reply: `Gracias por escribir. El Lic. ${OWNER_DATA.name} atiende Soporte Técnico, Redes, SQL Server, Visual FoxPro, Excel Avanzado y Recuperación de Datos en CDMX. Teléfono: ${OWNER_DATA.phoneDisplay}.`,
    });
  } catch {
    return NextResponse.json({ reply: "No se pudo procesar la consulta en este momento." }, { status: 500 });
  }
}
