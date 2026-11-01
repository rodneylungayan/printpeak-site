// seo.ts — buildMetadata() gives every page its title, description, canonical, Open Graph and X card tags.
import type { Metadata } from "next";
import { site } from "@/content/site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  keyphrase: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noindex?: boolean;
  absoluteTitle?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  keyphrase,
  ogTitle,
  ogDescription,
  ogImage,
  noindex,
  absoluteTitle,
}: SeoInput): Metadata {
  if (process.env.NODE_ENV !== "production") {
    const fullTitle = absoluteTitle ? title : `${title} | ${site.shortName}`;
    if (fullTitle.length > 60) console.warn(`[seo] Title over 60 chars (${fullTitle.length}): ${fullTitle}`);
    if (description.length > 155) console.warn(`[seo] Description over 155 chars (${description.length}) on ${path}`);
    if (!title.toLowerCase().includes(keyphrase.split(" ")[0].toLowerCase()))
      console.warn(`[seo] Title on ${path} may be missing the keyphrase "${keyphrase}"`);
  }

  const images = ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: ogTitle ?? title }] : undefined;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: site.locale,
      url: path,
      siteName: site.name,
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      ...(site.twitterHandle ? { site: site.twitterHandle, creator: site.twitterHandle } : {}),
      ...(images ? { images } : {}),
    },
  };
}
