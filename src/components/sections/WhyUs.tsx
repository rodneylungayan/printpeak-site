import type { CSSProperties } from "react";
import Section from "@/components/layout/Section";
import { reasons, whyIntro } from "@/content/home";
import styles from "./WhyUs.module.css";

export default function WhyUs() {
  if (reasons.length === 0) return null;
  return (
    <div className={styles.wrap}>
      <span className={styles.bigMark} aria-hidden="true">
        PEAK
      </span>
      <Section
        id="why-us"
        number="03"
        label={whyIntro.label}
        title={whyIntro.title}
        accent={whyIntro.accent}
        intro={whyIntro.intro}
        tone="base"
      >
        <ol role="list" className={styles.list}>
          {reasons.map((r, i) => (
            <li key={r.title} className={`${styles.row} reveal`} style={{ "--delay": `${i * 80}ms` } as CSSProperties}>
              <span className={`label ${styles.num}`}>{String(i + 1).padStart(2, "0")}</span>
              <h3 className={styles.title}>{r.title}</h3>
              <p className={styles.text}>{r.text}</p>
            </li>
          ))}
        </ol>
      </Section>
    </div>
  );
}
