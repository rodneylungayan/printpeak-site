import Link from "next/link";
import { site } from "@/content/site";
import styles from "./Logo.module.css";

// Logo — text wordmark for now. Swap for an <Image> of public/images/logo/logo.svg when a real logo exists.
export default function Logo({ tone = "ink" }: { tone?: "ink" | "light" }) {
  return (
    <Link href="/" className={`${styles.logo} ${tone === "light" ? styles.light : ""}`} aria-label={`${site.name}, home`}>
      <span className={styles.mark} aria-hidden="true">
        <svg viewBox="0 0 32 32" width="32" height="32">
          <rect width="32" height="32" rx="7" fill="currentColor" />
          <path d="M6 24 13 11l4 7 3-4 6 10H6Z" fill="var(--color-on-accent)" />
          <circle cx="23" cy="9" r="2.5" fill="var(--color-accent-2)" />
        </svg>
      </span>
      <span className={styles.text} aria-hidden="true">
        <span className={styles.word}>PrintPeak</span>
        <span className={`label ${styles.sub}`}>Sublimation Co.</span>
      </span>
    </Link>
  );
}
