import JsonLd from "@/components/JsonLd";
import { homeSections } from "@/config/sections";
import { buildMetadata } from "@/lib/seo";
import { businessSchema, graph } from "@/lib/schema";

// Focus keyphrase: "custom sublimation printing Philippines" (see CLAUDE.md keyword register)
export const metadata = buildMetadata({
  title: "Custom Sublimation Printing Philippines | PrintPeak",
  description:
    "Custom sublimation printing in the Philippines: jerseys, hoodies, mugs, lanyards and banners in full color that won't crack or peel. Get a free quote.",
  path: "/",
  keyphrase: "custom sublimation printing Philippines",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      {homeSections
        .filter((s) => s.enabled)
        .map(({ key, Component }) => (
          <Component key={key} />
        ))}
      <JsonLd data={graph(businessSchema())} />
    </>
  );
}
