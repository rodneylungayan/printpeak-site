import type { CSSProperties } from "react";
import Image from "next/image";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { products, productsIntro } from "@/content/home";
import { site } from "@/content/site";
import styles from "./Products.module.css";

export default function Products() {
  if (products.length === 0) return null;
  return (
    <Section
      id="products"
      number="01"
      label={productsIntro.label}
      title={productsIntro.title}
      accent={productsIntro.accent}
      intro={productsIntro.intro}
      tone="base"
    >
      <ul role="list" className={styles.grid}>
        {products.map((p, i) => (
          <li
            key={p.code}
            className={`${styles.card} reveal`}
            style={{ "--delay": `${(i % 3) * 90}ms`, "--pattern": `${(i * 37) % 180}deg` } as CSSProperties}
          >
            <div className={styles.media}>
              {p.image ? (
                <>
                  <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" />
                  <span className={styles.iconBadge} aria-hidden="true">
                    <Icon name={p.icon} size={22} />
                  </span>
                </>
              ) : (
                <span className={styles.iconWrap}>
                  <Icon name={p.icon} size={56} />
                </span>
              )}
              <span className={`label ${styles.code}`}>{p.code}</span>
            </div>
            <div className={styles.body}>
              <h3>{p.title}</h3>
              <p className={styles.text}>{p.text}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className={`${styles.note} reveal`}>
        <p>{productsIntro.note}</p>
        <Button href={site.quotePath} variant="dark">
          Ask about an item
        </Button>
      </div>
    </Section>
  );
}
