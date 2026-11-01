// features.ts — on/off switchboard. Flip a flag and the module turns on or off; no component edits needed.
// Vercel Analytics and Speed Insights are always on (see app/layout.tsx), so they are not flags.

export type MotionLevel = "off" | "subtle" | "full";
export type ThemePreset = "peak" | "crimson" | "lime" | "mono";

export const features = {
  theme: "peak" as ThemePreset, // presets live in src/styles/tokens.css
  motion: "full" as MotionLevel,
  mobileCtaBar: true,
  backToTop: true,
  announcementBar: false,
  customCursor: false,
  blog: false,
  search: false,
  extraAnalytics: false,
};
