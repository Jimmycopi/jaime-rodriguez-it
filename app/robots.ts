import { MetadataRoute } from "next";
import { OWNER_DATA } from "@/data/siteData";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${OWNER_DATA.siteUrl}/sitemap.xml`,
  };
}
