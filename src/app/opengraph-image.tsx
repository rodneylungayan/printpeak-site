import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "PrintPeak Sublimation: custom sublimation printing in the Philippines";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOg({
    eyebrow: "Sublimation printing · Philippines",
    title: "Print it bold. Wear it loud.",
    accent: "Full color. Edge to edge.",
  });
}
