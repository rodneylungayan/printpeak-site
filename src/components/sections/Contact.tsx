import FormEmbed from "@/components/FormEmbed";
import Section from "@/components/layout/Section";
import Icon, { type IconName } from "@/components/ui/Icon";
import { contactIntro } from "@/content/home";
import { site } from "@/content/site";
import styles from "./Contact.module.css";

type Detail = { label: string; value: string; href?: string; icon: IconName };

export default function Contact() {
  const details: Detail[] = [
    { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: "mail" },
    { label: "Call or text", value: site.phone, href: `tel:${site.phoneHref}`, icon: "phone" },
    { label: "Location", value: site.address, icon: "pin" },
  ];
  if (site.social.messenger)
    details.push({ label: "Messenger", value: "Chat with us", href: site.social.messenger, icon: "messenger" });

  return (
    <Section
      id="contact"
      number="04"
      label={contactIntro.label}
      title={contactIntro.title}
      accent={contactIntro.accent}
      intro={contactIntro.intro}
      tone="base"
    >
      <div className={styles.grid}>
        <ul role="list" className={styles.details}>
          {details.map((d) => {
            const inner = (
              <>
                <span className={styles.icon}>
                  <Icon name={d.icon} size={22} />
                </span>
                <span>
                  <span className={`label ${styles.dLabel}`}>{d.label}</span>
                  <span className={styles.value}>{d.value}</span>
                </span>
              </>
            );
            return (
              <li key={d.label} className="reveal">
                {d.href ? (
                  <a
                    href={d.href}
                    className={`${styles.detail} ${styles.linked}`}
                    {...(d.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={styles.detail}>{inner}</div>
                )}
              </li>
            );
          })}
        </ul>
        <div className="reveal">
          <FormEmbed />
        </div>
      </div>
    </Section>
  );
}
