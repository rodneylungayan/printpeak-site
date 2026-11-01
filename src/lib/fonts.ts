// fonts.ts — the ONLY place fonts are declared. Swap a family here and the whole site follows.
// Exposed as CSS variables, which tokens.css maps to --font-heading, --font-body and --font-mono.
import { Archivo_Black, Inter, JetBrains_Mono } from "next/font/google";

export const headingFont = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo-black",
});

export const bodyFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  preload: false,
});

export const fontVariables = [headingFont.variable, bodyFont.variable, monoFont.variable].join(" ");
