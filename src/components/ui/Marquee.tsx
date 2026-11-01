import styles from "./Marquee.module.css";

// Marquee — a scrolling strip of short phrases. The second copy is hidden from screen readers.
// Stops moving when the visitor prefers reduced motion (it wraps into a static row instead).
export default function Marquee({ items, label }: { items: string[]; label: string }) {
  const row = (hidden: boolean) => (
    <ul role="list" className={styles.row} aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className={styles.item}>
          <span className={styles.star} aria-hidden="true">
            ✦
          </span>
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={styles.marquee} role="region" aria-label={label}>
      <div className={styles.track}>
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
