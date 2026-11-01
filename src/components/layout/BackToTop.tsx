"use client";

import { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import styles from "./BackToTop.module.css";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      className={`${styles.btn} ${show ? styles.show : ""}`}
      onClick={toTop}
      tabIndex={show ? 0 : -1}
    >
      <Icon name="arrowUp" size={20} />
    </button>
  );
}
