import Icon, { type IconName } from "@/components/ui/Icon";
import { site } from "@/content/site";
import styles from "./MobileCtaBar.module.css";

type BarItem = { label: string; href: string; icon: IconName; tone?: "accent" | "call" | "messenger" };

// Sticky contact bar for phones (under 768px). Links without a real value are left out.
export default function MobileCtaBar() {
  const items: BarItem[] = [
    { label: "Quote", href: site.quotePath, icon: "arrow", tone: "accent" },
    { label: "Email", href: `mailto:${site.email}`, icon: "mail" },
    { label: "Call", href: `tel:${site.phoneHref}`, icon: "phone", tone: "call" },
  ];
  if (site.social.facebook) items.push({ label: "Facebook", href: site.social.facebook, icon: "facebook" });
  if (site.social.messenger)
    items.push({ label: "Messenger", href: site.social.messenger, icon: "messenger", tone: "messenger" });

  return (
    <nav aria-label="Quick contact" className={styles.bar}>
      <ul role="list" className={styles.list}>
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={`${styles.item} ${item.tone ? styles[item.tone] : ""}`}
              {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Icon name={item.icon} size={20} />
              <span className={styles.text}>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
