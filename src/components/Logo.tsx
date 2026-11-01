import Link from "next/link";
import LogoMark from "./LogoMark";
import { site } from "@/content/site";
import styles from "./Logo.module.css";

// Logo — "PP" monogram with the name stacked beside it. Replace LogoMark (and public/images/logo/) with a real logo.
export default function Logo({ tone = "ink" }: { tone?: "ink" | "light" }) {
  return (
    <Link href="/" className={`${styles.logo} ${tone === "light" ? styles.light : ""}`} aria-label={`${site.name}, home`}>
      <span className={styles.mark}>
        <LogoMark size={44} tone={tone} />
      </span>
      <span className={`label ${styles.stack}`} aria-hidden="true">
        <span>PrintPeak</span>
        <span>Sublimation</span>
        <span>Co.</span>
      </span>
    </Link>
  );
}
