import { OWNER_DATA } from "@/data/siteData";

export function downloadVCard() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Rodríguez V;Jaime;;Lic.;",
    `FN:${OWNER_DATA.name}`,
    "ORG:OPTEC / Servicios Informáticos Independientes",
    `TITLE:${OWNER_DATA.title} - ${OWNER_DATA.role}`,
    `TEL;TYPE=CELL,VOICE,WHATSAPP:+${OWNER_DATA.phoneRaw}`,
    `EMAIL;TYPE=PREF,INTERNET:${OWNER_DATA.email}`,
    `URL:${OWNER_DATA.siteUrl}`,
    `ADR;TYPE=WORK:;;Ciudad de México;CDMX;;01000;México`,
    "NOTE:Soporte Técnico Empresarial, Redes, SQL Server, Access, Visual FoxPro, Automatización Excel y Recuperación de Datos.",
    "END:VCARD",
  ].join("\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Jaime_Rodriguez_V_IT.vcf");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
