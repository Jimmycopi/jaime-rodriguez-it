import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jaime Rodríguez V | Soluciones Informáticas y Soporte Técnico CDMX",
    short_name: "Jaime Rodríguez IT",
    description: "Especialista en Soporte Técnico Empresarial, Redes, SQL Server, Visual FoxPro, Automatización en Excel y Recuperación de Datos en Ciudad de México.",
    start_url: "/",
    display: "standalone",
    background_color: "#050b14",
    theme_color: "#0284c7",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
