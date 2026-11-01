// LogoMark — the "PP" monogram, drawn as paths so it never depends on a font.
// "letters": the two P's alone (header, footer). "badge": P's on a rounded square (app icon style).
// Colors come from tokens, so it follows the theme preset. Static copies: src/app/icon.svg, public/images/logo/.

// Slanted, heavy P with a counter cut out (fill-rule evenodd). Second P sits 23 units to the right.
const P1 = "M8 6h17a14 14 0 0 1 0 28h-6v24H8Zm11 10v8h5a4 4 0 0 0 0-8Z";
const P2 = "M31 6h17a14 14 0 0 1 0 28h-6v24H31Zm11 10v8h5a4 4 0 0 0 0-8Z";

export default function LogoMark({
  variant = "letters",
  size = 40,
  tone = "ink",
}: {
  variant?: "letters" | "badge";
  size?: number;
  tone?: "ink" | "light";
}) {
  if (variant === "badge") {
    return (
      <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="var(--color-accent)" />
        <g transform="translate(7 7) scale(0.8) skewX(-8) translate(4 0)" fillRule="evenodd">
          <path d={P2} fill="var(--color-accent-2)" />
          <path d={P1} fill="var(--color-on-accent)" stroke="var(--color-accent)" strokeWidth="3" paintOrder="stroke" />
        </g>
      </svg>
    );
  }

  const first = tone === "light" ? "var(--color-on-dark)" : "var(--color-ink)";
  const second = tone === "light" ? "var(--color-accent-2)" : "var(--color-accent)";
  return (
    <svg viewBox="0 0 66 64" width={(size * 66) / 64} height={size} aria-hidden="true">
      <g transform="skewX(-8) translate(4 0)" fillRule="evenodd">
        <path d={P2} fill={second} />
        <path d={P1} fill={first} stroke={tone === "light" ? "var(--color-dark)" : "var(--color-bg)"} strokeWidth="2.5" paintOrder="stroke" />
      </g>
    </svg>
  );
}
