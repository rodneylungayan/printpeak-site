// LogoMark — the dummy PrintPeak badge: two peaks and an ink drop on a rounded square.
// Colors come from tokens, so it follows the theme preset. Static copies: src/app/icon.svg, public/images/logo/.
export default function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true">
      <rect width="48" height="48" rx="11" fill="var(--color-accent)" />
      <path d="M4 38 17 18l6 9 4-5 11 16H4Z" fill="var(--color-accent-2)" />
      <path d="M10 38 24 15l14 23H10Z" fill="var(--color-on-accent)" />
      <path d="m19.5 22.4 4.5-7.4 4.5 7.4-2.3-1.4-2.2 2-2.2-2-2.3 1.4Z" fill="var(--color-accent)" />
      <path d="M36 6.5c2.2 3 3.4 5 3.4 6.6a3.4 3.4 0 0 1-6.8 0c0-1.6 1.2-3.6 3.4-6.6Z" fill="var(--color-accent-2)" />
      <rect x="4" y="38" width="40" height="3" rx="1.5" fill="var(--color-dark)" opacity="0.35" />
    </svg>
  );
}
