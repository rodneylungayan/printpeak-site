import type { CSSProperties } from "react";
import Section from "@/components/layout/Section";
import Button from "@/components/ui/Button";
import { processIntro, steps } from "@/content/home";
import { site } from "@/content/site";
import styles from "./ProcessSteps.module.css";

export default function ProcessSteps() {
  if (steps.length === 0) return null;
  return (
    <Section
      id="process"
      number="04"
      label={processIntro.label}
      title={processIntro.title}
      accent={processIntro.accent}
      intro={processIntro.intro}
      tone="dark"
    >
      <ol role="list" className={styles.steps}>
        {steps.map((s, i) => (
          <li key={s.title} className={`${styles.step} reveal`} style={{ "--delay": `${i * 90}ms` } as CSSProperties}>
            <span className={styles.num} aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={styles.title}>
              <span className="visually-hidden">Step {i + 1}: </span>
              {s.title}
            </h3>
            <p className={styles.text}>{s.text}</p>
          </li>
        ))}
      </ol>
      <div className={`${styles.cta} reveal`}>
        <Button href={site.quotePath} variant="light" size="lg">
          Start my order
        </Button>
      </div>
    </Section>
  );
}
