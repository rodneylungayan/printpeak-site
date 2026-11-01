import Section from "@/components/layout/Section";
import SizeChartTool from "./SizeChartTool";
import { sizeCharts, sizeIntro } from "@/content/sizes";

export default function SizeGuide() {
  if (sizeCharts.length === 0) return null;
  return (
    <Section
      id="size-guide"
      number="02"
      label={sizeIntro.label}
      title={sizeIntro.title}
      accent={sizeIntro.accent}
      intro={sizeIntro.intro}
      tone="surface"
    >
      <SizeChartTool charts={sizeCharts} howTo={sizeIntro.howTo} note={sizeIntro.note} />
    </Section>
  );
}
