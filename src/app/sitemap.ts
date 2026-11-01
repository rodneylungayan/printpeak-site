import type { MetadataRoute } from "next";
import { sitemapPages } from "@/content/navigation";
import { site } from "@/content/site";
import { buildDate } from "@/lib/build-time";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = await buildDate();
  return sitemapPages.map((p) => ({
    url: new URL(p.path, site.url).toString(),
    lastModified,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
