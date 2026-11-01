import type { CSSProperties } from "react";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { hero } from "@/content/home";
import { site } from "@/content/site";
import styles from "./Hero.module.css";

// Hero — the only section with an H1. Uses a drawn jersey until a real photo is added to content/home.ts.
export default function Hero() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.grid}>
        <div className={styles.copy}>
          <p className={`label ${styles.eyebrow} reveal`}>
            <span className={styles.dot} aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 id="hero-title" className={styles.title}>
            <span className={`${styles.line} reveal`}>{hero.title}</span>
            <span className={`${styles.accent} reveal`} style={{ "--delay": "120ms" } as CSSProperties}>
              {hero.accent}
            </span>
          </h1>
          <p className={`lead reveal`} style={{ "--delay": "220ms" } as CSSProperties}>
            {hero.intro}
          </p>
          <div className={`${styles.ctas} reveal`} style={{ "--delay": "320ms" } as CSSProperties}>
            <Button href={hero.primary.href} size="lg">
              {hero.primary.label}
            </Button>
            <Button href={hero.secondary.href} size="lg" variant="outline" icon={null}>
              {hero.secondary.label}
            </Button>
          </div>
          <a href={`tel:${site.phoneHref}`} className={`small ${styles.phone} reveal`}>
            <Icon name="phone" size={16} />
            {site.phone}
          </a>
        </div>

        <div className={`${styles.visual} reveal`} style={{ "--delay": "200ms" } as CSSProperties}>
          {hero.image ? (
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={1200}
              height={1000}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={styles.photo}
            />
          ) : (
            <JerseyArt />
          )}
          <span className={`label ${styles.chip} ${styles.chipTop}`}>Heat press · In the fabric</span>
          <span className={`label ${styles.chip} ${styles.chipBottom}`}>
            <Icon name="check" size={14} /> Full color, every inch
          </span>
        </div>
      </Container>
    </section>
  );
}

function JerseyArt() {
  return (
    <svg className={styles.art} viewBox="0 0 400 400" role="img" aria-label="A sample sublimated jersey with a bold striped design">
      <defs>
        <clipPath id="jersey-shape">
          <path d="M130 60 80 82 30 140l50 44 30-22v186h180V162l30 22 50-44-50-58-50-22c-8 22-36 36-70 36s-62-14-70-36Z" />
        </clipPath>
      </defs>
      <g clipPath="url(#jersey-shape)">
        <rect width="400" height="400" fill="var(--color-accent)" />
        <path d="M-40 300 260 0h70L30 300Z" fill="var(--color-dark)" />
        <path d="M60 400 400 60v60L120 400Z" fill="var(--color-accent-2)" />
        <path d="M150 400 400 150v30L180 400Z" fill="var(--color-bg)" opacity="0.85" />
        <circle cx="300" cy="300" r="120" fill="var(--color-dark)" opacity="0.15" />
        <text
          x="200"
          y="275"
          textAnchor="middle"
          fontFamily="var(--font-heading)"
          fontSize="110"
          fill="var(--color-on-accent)"
        >
          07
        </text>
        <text x="200" y="160" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="16" letterSpacing="4" fill="var(--color-on-accent)">
          PEAK FC
        </text>
      </g>
      <path
        d="M130 60 80 82 30 140l50 44 30-22v186h180V162l30 22 50-44-50-58-50-22c-8 22-36 36-70 36s-62-14-70-36Z"
        fill="none"
        stroke="var(--color-dark)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
