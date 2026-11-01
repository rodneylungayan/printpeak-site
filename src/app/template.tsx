import styles from "./template.module.css";

// Page fade-in on navigation (opacity only, so layout never jumps).
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className={styles.fade}>{children}</div>;
}
