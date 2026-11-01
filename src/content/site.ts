/*
  site.ts — business facts used across the whole site (header, footer, contact, SEO, schema).
  Voice: bold and energetic, but plain English. Short sentences. Everyday words.
  Explain things the way you would to a friend who is not technical.
  Every value marked TODO is a placeholder for this sample site. Replace before going live.
*/

export type SocialLinks = {
  facebook?: string;
  messenger?: string;
  instagram?: string;
  tiktok?: string;
};

export type SiteInfo = {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  lang: string;
  country: string;
  areaServed: string;
  email: string;
  phone: string;
  phoneHref: string;
  address: string;
  quotePath: string;
  twitterHandle?: string;
  social: SocialLinks;
};

export const site: SiteInfo = {
  name: "PrintPeak Sublimation",
  shortName: "PrintPeak",
  tagline: "Full-color prints that never fade.",
  description:
    "Custom sublimation printing in the Philippines. Team jerseys, hoodies, mugs, lanyards and banners, printed in full color edge to edge.",
  url: "https://printpeak.example", // TODO: real domain
  locale: "en_PH",
  lang: "en-PH",
  country: "PH",
  areaServed: "Philippines",
  email: "hello@printpeak.example", // TODO: real email
  phone: "0900 000 0000", // TODO: real phone
  phoneHref: "+639000000000", // TODO: real phone in international format
  address: "Your City, Philippines", // TODO: real address or city
  quotePath: "/#contact",
  twitterHandle: undefined, // TODO: add "@handle" if the business has an X account
  social: {
    // TODO: add real links. Empty links are hidden, so nothing points to a dead page.
    facebook: undefined,
    messenger: undefined,
    instagram: undefined,
    tiktok: undefined,
  },
};
