import Link from "next/link";
import Logo from "@/components/Logo";
import Container from "./Container";
import { navItems } from "@/content/navigation";
import { products } from "@/content/home";
import { site } from "@/content/site";
import { buildYear } from "@/lib/build-time";
import styles from "./Footer.module.css";

const socialLabels: Record<string, string> = {
  facebook: "Facebook",
  messenger: "Messenger",
  instagram: "Instagram",
  tiktok: "TikTok",
};

export default async function Footer() {
  const socials = Object.entries(site.social).filter(([, url]) => Boolean(url)) as [string, string][];
  const year = await buildYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo tone="light" />
            <p className={styles.tagline}>{site.tagline}</p>
          </div>

          <div>
            <h2 className={`label ${styles.heading}`}>Quick links</h2>
            <ul role="list" className={styles.list}>
              {navItems
                .filter((i) => i.inFooter)
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="link">
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h2 className={`label ${styles.heading}`}>Products</h2>
            <ul role="list" className={styles.list}>
              {products.map((p) => (
                <li key={p.code}>
                  <Link href="/#products" className="link">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={`label ${styles.heading}`}>Contact</h2>
            <ul role="list" className={styles.list}>
              <li>
                <a href={`mailto:${site.email}`} className="link">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneHref}`} className="link">
                  {site.phone}
                </a>
              </li>
              <li>{site.address}</li>
              {socials.map(([key, url]) => (
                <li key={key}>
                  <a href={url} className="link" target="_blank" rel="noopener noreferrer">
                    {socialLabels[key] ?? key}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`small ${styles.bottom}`}>
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <a href="#main" className="link">
            Back to top ↑
          </a>
        </div>
      </Container>
    </footer>
  );
}
