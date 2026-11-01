/*
  home.ts — all copy for the home page sections.
  Voice: bold and energetic, plain English. Short sentences, one idea each.
  No jargon in visible copy. No made-up numbers, years, reviews or prices.
  Items marked TODO need real business info before launch.
*/

import type { IconName } from "@/components/ui/Icon";

export type Cta = { label: string; href: string };

export type HeroContent = {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  primary: Cta;
  secondary: Cta;
  image?: { src: string; alt: string }; // TODO: add a real hero photo (see public/images/README.md)
};

export type Product = {
  code: string;
  title: string;
  text: string;
  icon: IconName;
  image?: { src: string; alt: string }; // Sample stock photos for now. TODO: replace with your own product photos
};

export type Reason = { title: string; text: string };
export type Step = { title: string; text: string };

export const hero: HeroContent = {
  eyebrow: "Full sublimation printing · Philippines",
  title: "Print it bold. Wear it loud.",
  accent: "Custom sublimation printing, edge to edge.",
  intro:
    "We print your design right into the fabric. Jerseys, hoodies, mugs, lanyards and more. Full color on every inch, and it won't crack or peel.",
  primary: { label: "Get a Quote", href: "/#contact" },
  secondary: { label: "See Products", href: "/#products" },
  // Sample stock photo (Unsplash). TODO: replace with a photo of your own shop.
  image: { src: "/images/hero/hero.webp", alt: "A print shop worker getting a shirt ready on a heat press" },
};

export const marquee: string[] = [
  "Full-color, edge-to-edge prints",
  "No cracking. No peeling.",
  "Any design, any colors",
  "Apparel and merch in one order",
  "Ships nationwide",
];

export const productsIntro = {
  label: "Products",
  title: "Print on almost",
  accent: "anything.",
  intro:
    "Sportswear for your team and merch for your brand, all from one shop. Sublimation works best on polyester fabric and specially coated items, so we'll help you pick the right one.",
  note: "Need something else? Mousepads, face towels, phone cases and more. Just ask us.",
};

export const products: Product[] = [
  {
    code: "PP-01",
    title: "Team Jerseys",
    text: "Basketball, volleyball and football sets. Names and numbers are printed in, not stuck on.",
    icon: "jersey",
    image: { src: "/images/projects/pp-01.webp", alt: "Rack of bright blue and red team jerseys" },
  },
  {
    code: "PP-02",
    title: "Cycling & Esports Wear",
    text: "Race-fit tops and gaming jerseys with sharp, full-body designs.",
    icon: "cycling",
    image: { src: "/images/projects/pp-02.webp", alt: "Cyclist in a fitted blue cycling jersey on the road" },
  },
  {
    code: "PP-03",
    title: "Hoodies & Long Sleeves",
    text: "All-over printed hoodies, rash guards and long sleeves for teams and crews.",
    icon: "hoodie",
    image: { src: "/images/projects/pp-03.webp", alt: "Person in a grey pullover hoodie, seen from the back" },
  },
  {
    code: "PP-04",
    title: "Mugs & Tumblers",
    text: "Photo-quality prints on mugs, tumblers and bottles. Great for gifts and giveaways.",
    icon: "mug",
    image: { src: "/images/projects/pp-04.webp", alt: "Two white mugs with printed text" },
  },
  {
    code: "PP-05",
    title: "Lanyards & Caps",
    text: "Custom lanyards for events and offices, plus printed caps to match.",
    icon: "lanyard",
    image: { src: "/images/projects/pp-05.webp", alt: "Person wearing a printed lanyard with an ID badge" },
  },
  {
    code: "PP-06",
    title: "Banners & Flags",
    text: "Bright, light flags and banners for games, booths and shop fronts.",
    icon: "flag",
    image: { src: "/images/projects/pp-06.webp", alt: "Rows of colorful flag banners against a blue sky" },
  },
];

export const whyIntro = {
  label: "Why PrintPeak",
  title: "Color that stays",
  accent: "in the game.",
  intro:
    "Sublimation uses heat to turn ink into a gas that soaks into the fabric. The color becomes part of the shirt, not a layer on top. Here is why that matters.",
};

export const reasons: Reason[] = [
  {
    title: "Color that lasts",
    text: "The ink is inside the fabric, so there is nothing to crack, peel or flake off after washing.",
  },
  {
    title: "Any design, no limits",
    text: "Photos, gradients and patterns, edge to edge. If you can design it, we can print it.",
  },
  {
    title: "Soft and breathable",
    text: "No heavy print layer on top, so your shirt stays light and cool, even in a hot game.",
  },
  {
    title: "One shop, one look",
    text: "Get jerseys, mugs, lanyards and banners in one order, all in the same brand colors.",
  },
];

export const processIntro = {
  label: "How it works",
  title: "From idea",
  accent: "to your door.",
  intro: "Ordering is simple. Here is what happens after you send us a message.",
};

// TODO: confirm minimum order, layout time and production time, then add them to these steps.
export const steps: Step[] = [
  {
    title: "Send your idea",
    text: "Tell us the item, how many you need, the sizes and your design or logo. A rough sketch is fine.",
  },
  {
    title: "Get your quote",
    text: "We reply with the price, the minimum order and the shipping cost. No surprises later.",
  },
  {
    title: "Approve the layout",
    text: "We make a digital preview of your design. You check it and ask for changes.",
  },
  {
    title: "We print and press",
    text: "Your design is printed on special paper, then heat-pressed into the fabric or item.",
  },
  {
    title: "Delivered to you",
    text: "We pack your order with care and ship it anywhere in the Philippines.",
  },
];

export const contactIntro = {
  label: "Contact",
  title: "Let's print",
  accent: "something.",
  intro: "Tell us what you need and how many. We'll get back to you with a quote.",
};
