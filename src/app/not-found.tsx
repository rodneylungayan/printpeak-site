import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className={styles.wrap} aria-labelledby="nf-title">
      <Container className={styles.inner}>
        <p className={`label ${styles.code}`}>Error 404</p>
        <h1 id="nf-title">
          This page <span className="accent-text">faded away.</span>
        </h1>
        <p className="lead">Unlike our prints. The page you want is not here, but these links will get you back on track.</p>
        <div className={styles.links}>
          <Button href="/">Go home</Button>
          <Button href="/#products" variant="outline" icon={null}>
            See products
          </Button>
          <Button href={site.quotePath} variant="outline" icon={null}>
            Get a quote
          </Button>
        </div>
      </Container>
    </section>
  );
}
