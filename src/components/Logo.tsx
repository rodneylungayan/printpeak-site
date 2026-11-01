import Link from "next/link";
import LogoMark from "./LogoMark";
import { site } from "@/content/site";
import styles from "./Logo.module.css";

// Logo — dummy badge + wordmark for the sample site. Replace LogoMark (and public/images/logo/) with the real logo.
export default function Logo({ tone = "ink" }: { tone?: "ink" | "light" }) {
  return (
    <Link href="/" className={`${styles.logo} ${tone === "light" ? styles.light : ""}`} aria-label={`${site.name}, home`}>
      <span className={styles.mark}>
        <LogoMark size={40} />
      </span>
      <span className={styles.text} aria-hidden="true">
        <span className={styles.word}>
          Print<span className={styles.peak}>Peak</span>
        </span>
        <span className={`label ${styles.sub}`}>Sublimation Co.</span>
      </span>
    </Link>
  );
}
