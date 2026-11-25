import { MetadataRoute } from "next";
import { OWNER_DATA } from "@/data/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = OWNER_DATA.siteUrl;
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/nfc`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
