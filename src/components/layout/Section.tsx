import type { ElementType, ReactNode } from "react";
import Container from "./Container";
import styles from "./Section.module.css";

type SectionProps = {
  id: string;
  number?: string;
  label?: string;
  title?: string;
  accent?: string;
  intro?: string;
  tone?: "base" | "surface" | "dark" | "accent";
  align?: "start" | "split";
  as?: ElementType;
  headingLevel?: "h1" | "h2";
  children?: ReactNode;
};

// Section — every home section is wrapped in this. Padding, width, background and the heading block live here.
export default function Section({
  id,
  number,
  label,
  title,
  accent,
  intro,
  tone = "base",
  align = "split",
  as: Tag = "section",
  headingLevel: H = "h2",
  children,
}: SectionProps) {
  const headingId = title ? `${id}-title` : undefined;
  return (
    <Tag id={id} className={`${styles.section} ${styles[tone]}`} aria-labelledby={headingId}>
      <Container>
        {(label || title) && (
          <header className={`${styles.head} ${align === "split" ? styles.split : ""}`}>
            <div>
              {label && (
                <p className={`label ${styles.label} reveal`}>
                  {number && <span className={styles.num}>{number}</span>}
                  {label}
                </p>
              )}
              {title && (
                <H id={headingId} className="fill-title">
                  {title} {accent && <span className="accent-text">{accent}</span>}
                </H>
              )}
            </div>
            {intro && <p className={`lead ${styles.intro} reveal`}>{intro}</p>}
          </header>
        )}
        {children}
      </Container>
    </Tag>
  );
}
