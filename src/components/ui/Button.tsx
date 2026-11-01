import Link from "next/link";
import type { ReactNode } from "react";
import Icon, { type IconName } from "./Icon";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  icon?: IconName | null;
  className?: string;
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  icon = "arrow",
  className,
  external,
}: ButtonProps) {
  const cls = [styles.btn, styles[variant], styles[size], className].filter(Boolean).join(" ");
  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <span className={styles.icon}>
          <Icon name={icon} size={16} />
        </span>
      )}
    </>
  );

  if (external || /^(mailto:|tel:|https?:)/.test(href)) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
