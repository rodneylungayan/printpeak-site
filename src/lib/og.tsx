// og.tsx — shared renderer for Open Graph and X (Twitter) share images (1200×630).
// Text stays inside the center safe area. Colors come from brand.ts (CSS variables don't work here).
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";
import { brand } from "./brand";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// Heading font loaded explicitly (the image renderer cannot use next/font). Keep in sync with src/lib/fonts.ts.
const headingFontFile = () => readFile(join(process.cwd(), "src/assets/fonts/ArchivoBlack-Regular.ttf"));

export async function renderOg({ eyebrow, title, accent }: { eyebrow: string; title: string; accent: string }) {
  const domain = new URL(site.url).host;
  const heading = await headingFontFile();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background: brand.bg,
          color: brand.ink,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -260,
            top: -60,
            width: 560,
            height: 760,
            background: brand.accent,
            transform: "rotate(18deg)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -20,
            top: -60,
            width: 40,
            height: 760,
            background: brand.accent2,
            transform: "rotate(18deg)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 56,
              borderRadius: 12,
              background: brand.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: brand.onAccent,
              fontSize: 28,
              fontFamily: "Heading",
            }}
          >
            PP
          </div>
          <div style={{ fontSize: 34, fontFamily: "Heading", letterSpacing: -1 }}>PRINTPEAK</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: brand.muted, textTransform: "uppercase" }}>{eyebrow}</div>
          <div style={{ fontSize: 68, fontFamily: "Heading", lineHeight: 1, marginTop: 18, textTransform: "uppercase" }}>
            {title}
          </div>
          <div style={{ fontSize: 36, fontFamily: "Heading", color: brand.accent, marginTop: 16, textTransform: "uppercase" }}>
            {accent}
          </div>
        </div>
        <div style={{ fontSize: 24, color: brand.muted, display: "flex" }}>{domain}</div>
      </div>
    ),
    { ...ogSize, fonts: [{ name: "Heading", data: heading, style: "normal", weight: 400 }] },
  );
}
