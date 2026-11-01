import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import BackToTop from "@/components/layout/BackToTop";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import JsonLd from "@/components/JsonLd";
import RevealObserver from "@/components/motion/RevealObserver";
import { features } from "@/config/features";
import { site } from "@/content/site";
import { brand } from "@/lib/brand";
import { fontVariables } from "@/lib/fonts";
import { graph, organizationSchema, websiteSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.shortName}` },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: site.locale, siteName: site.name, url: "/" },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: brand.bg,
  colorScheme: features.theme === "lime" ? "dark" : "light",
  width: "device-width",
  initialScale: 1,
};

// Adds the "motion" class before paint (skipped for reduced motion). If the observer never starts, a
// safety timer reveals everything after 4 seconds so nothing stays hidden.
const motionScript = `(function(){try{var d=document.documentElement;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('motion');setTimeout(function(){if(!d.classList.contains('motion-ready'))d.classList.add('motion-done')},4000)}catch(e){}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const motionOn = features.motion !== "off";
  return (
    <html lang={site.lang} data-theme={features.theme} className={fontVariables} suppressHydrationWarning>
      <head>{motionOn && <script dangerouslySetInnerHTML={{ __html: motionScript }} />}</head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        {features.mobileCtaBar && <MobileCtaBar />}
        {features.backToTop && <BackToTop />}
        {motionOn && <RevealObserver />}
        <JsonLd data={graph(organizationSchema(), websiteSchema())} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
