// sections.ts — the ordered list of home page sections.
// To reorder, add or remove a section, edit this list only.
import type { ComponentType } from "react";
import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import Products from "@/components/sections/Products";
import SizeGuide from "@/components/sections/SizeGuide";
import WhyUs from "@/components/sections/WhyUs";
import ProcessSteps from "@/components/sections/ProcessSteps";
import Contact from "@/components/sections/Contact";

export type SectionEntry = { key: string; Component: ComponentType; enabled: boolean };

export const homeSections: SectionEntry[] = [
  { key: "hero", Component: Hero, enabled: true },
  { key: "marquee", Component: MarqueeStrip, enabled: true },
  { key: "products", Component: Products, enabled: true },
  { key: "size-guide", Component: SizeGuide, enabled: true },
  { key: "why-us", Component: WhyUs, enabled: true },
  { key: "process", Component: ProcessSteps, enabled: true },
  { key: "contact", Component: Contact, enabled: true },
];
