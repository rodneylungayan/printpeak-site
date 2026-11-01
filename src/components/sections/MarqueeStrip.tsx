import Marquee from "@/components/ui/Marquee";
import { marquee } from "@/content/home";

export default function MarqueeStrip() {
  if (marquee.length === 0) return null;
  return <Marquee items={marquee} label="What you get with PrintPeak" />;
}
