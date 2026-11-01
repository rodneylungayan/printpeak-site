"use client";

import { useEffect } from "react";

// Adds .is-visible to .reveal and .fill-title elements as they scroll into view.
// Only matters when <html> has the "motion" class (set by the head script in layout.tsx).
export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    if (!root.classList.contains("motion")) return;

    const targets = document.querySelectorAll<HTMLElement>(".reveal, .fill-title");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    targets.forEach((el) => io.observe(el));
    root.classList.add("motion-ready");
    return () => io.disconnect();
  }, []);

  return null;
}
