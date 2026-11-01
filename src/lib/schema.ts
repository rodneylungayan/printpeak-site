// schema.ts — all JSON-LD builders. Stable @ids so the pieces link up in one @graph.
// Never add Review or AggregateRating without real, checkable reviews.
import { products } from "@/content/home";
import { site } from "@/content/site";

const orgId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;
const businessId = `${site.url}/#business`;

function sameAs() {
  return Object.values(site.social).filter(Boolean) as string[];
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    url: site.url,
    logo: `${site.url}/icon.svg`,
    email: site.email,
    telephone: site.phoneHref,
    sameAs: sameAs(),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      telephone: site.phoneHref,
      areaServed: site.country,
      availableLanguage: ["en", "fil"],
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.name,
    inLanguage: site.lang,
    publisher: { "@id": orgId },
  };
}

export function businessSchema() {
  return {
    "@type": "LocalBusiness",
    "@id": businessId,
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/opengraph-image`,
    email: site.email,
    telephone: site.phoneHref,
    parentOrganization: { "@id": orgId },
    address: { "@type": "PostalAddress", addressCountry: site.country }, // TODO: add street, city, region once known
    areaServed: { "@type": "Country", name: site.areaServed },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Sublimation printing products",
      itemListElement: products.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: `Custom sublimated ${p.title.toLowerCase()}`, description: p.text },
      })),
    },
  };
}

export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
