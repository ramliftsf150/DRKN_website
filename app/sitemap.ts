import type { MetadataRoute } from "next";
import { brand } from "@/lib/config";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/pricing", "/portfolio", "/about", "/contact"].map(
    (path) => ({
      url: `${brand.url}${path}`,
      changeFrequency: "monthly" as const,
      priority: path ? 0.7 : 1,
    }),
  );
}
