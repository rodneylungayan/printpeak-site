import Button from "@/components/ui/Button";
import { site } from "@/content/site";
import styles from "./FormEmbed.module.css";

/*
  FormEmbed — TODO: paste the third-party form embed (Tally, Typeform, Google Forms, etc.) inside #form-embed.
  This is the ONE place the quote form goes. No form fields, validation or submit code are built here on purpose.
  Until the embed is added: dev shows a dashed TODO box; production shows simple email and call buttons instead.
*/
export default function FormEmbed() {
  const isDev = process.env.NODE_ENV !== "production";

  return (
    <div className={styles.wrap}>
      <div id="form-embed" data-todo="third-party form goes here" className={styles.embed}>
        {isDev ? (
          <p className={`label ${styles.todo}`}>TODO: third-party quote form goes here (src/components/FormEmbed.tsx)</p>
        ) : (
          <div className={styles.fallback}>
            <h3>Send us your idea</h3>
            <p className={styles.text}>Email or call us with the item, quantity, sizes and your design.</p>
            <div className={styles.buttons}>
              <Button href={`mailto:${site.email}?subject=Quote request`} icon="mail">
                Email us
              </Button>
              <Button href={`tel:${site.phoneHref}`} variant="outline" icon="phone">
                Call us
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
