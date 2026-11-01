"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Logo from "@/components/Logo";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { navItems } from "@/content/navigation";
import { site } from "@/content/site";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const items = navItems.filter((i) => i.inHeader);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <Logo />

        <nav aria-label="Main" className={styles.nav}>
          <ul role="list" className={styles.pill}>
            {items.map((item, i) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink}>
                  <span className={`label ${styles.navNum}`}>{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button href={site.quotePath} size="sm" className={styles.cta}>
            Get a Quote
          </Button>
          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" ref={menuRef} className={styles.menu} hidden={!open}>
        <nav aria-label="Mobile">
          <ul role="list" className={styles.menuList}>
            {items.map((item, i) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.menuLink} onClick={() => setOpen(false)}>
                  <span className={`label ${styles.navNum}`}>{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div onClick={() => setOpen(false)}>
          <Button href={site.quotePath} size="lg">
            Get a Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
