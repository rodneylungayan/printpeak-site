/*
  navigation.ts — single source for pages and anchors.
  Feeds the header, mobile menu, footer and sitemap. Add a link once and it shows up everywhere.
  Only list routes and #ids that really exist (checked by `npm run check:links` style review in verification).
*/

export type NavItem = {
  label: string;
  href: string;
  inHeader: boolean;
  inFooter: boolean;
};

export type SitemapPage = {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
};

export const navItems: NavItem[] = [
  { label: "Products", href: "/#products", inHeader: true, inFooter: true },
  { label: "Why Us", href: "/#why-us", inHeader: true, inFooter: true },
  { label: "Process", href: "/#process", inHeader: true, inFooter: true },
  { label: "Contact", href: "/#contact", inHeader: true, inFooter: true },
];

export const sitemapPages: SitemapPage[] = [{ path: "/", priority: 1, changeFrequency: "monthly" }];
