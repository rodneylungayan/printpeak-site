// Icon — small line icons drawn with currentColor, so they take the color of their parent.
const paths = {
  jersey: (
    <path d="M8 3 5 4.5 2 8l3 3 2-1.5V21h10V9.5L19 11l3-3-3-3.5L16 3c-.5 1.5-2 2.5-4 2.5S8.5 4.5 8 3Z" />
  ),
  cycling: (
    <>
      <path d="M8 3 4 5 2 11l3 1 1.5-3.5V21h11V8.5L19 12l3-1-2-6-4-2c-.6 1.6-2 2.5-4 2.5S8.6 4.6 8 3Z" />
      <path d="M7 13h10M7 16.5h10" />
    </>
  ),
  hoodie: (
    <>
      <path d="M9 3.5C9 2.5 10.3 2 12 2s3 .5 3 1.5L19 6l3 9-3 1-1-3v8H6v-8l-1 3-3-1 3-9 4-2.5Z" />
      <path d="M9 3.5c0 2.5 1.3 4.5 3 4.5s3-2 3-4.5M10.5 8v3M13.5 8v3M8.5 16h7" />
    </>
  ),
  mug: (
    <>
      <path d="M4 6h12v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6Z" />
      <path d="M16 9h2a2.5 2.5 0 0 1 0 5h-2M8 2v2M12 2v2" />
    </>
  ),
  lanyard: (
    <>
      <path d="M7 2v7l5 5 5-5V2" />
      <rect x="7.5" y="14" width="9" height="8" rx="1.5" />
      <path d="M10.5 18h3" />
    </>
  ),
  flag: (
    <>
      <path d="M5 22V3" />
      <path d="M5 4c2-1.2 4-1.2 6 0s4 1.2 6 0l2-1v10l-2 1c-2 1.2-4 1.2-6 0s-4-1.2-6 0" />
    </>
  ),
  arrow: <path d="M7 17 17 7M8 7h9v9" />,
  arrowUp: <path d="M12 19V5M5 12l7-7 7 7" />,
  phone: (
    <path d="M5 3h3.5l1.5 5-2.2 1.4a12 12 0 0 0 6.8 6.8L16 14l5 1.5V19a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  messenger: (
    <>
      <path d="M12 2.5c-5.3 0-9.5 3.9-9.5 9 0 2.8 1.3 5.3 3.4 7V22l3.1-1.7c.9.3 1.9.4 3 .4 5.3 0 9.5-3.9 9.5-9s-4.2-9.2-9.5-9.2Z" />
      <path d="m6.5 14 4-4.2 2.3 2.2 4.7-2.5-4 4.3-2.4-2.3L6.5 14Z" />
    </>
  ),
  facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v2.5H7.5v4H10V22h4v-7.5h3l.5-4H14V8.5c0-.3.2-.5.5-.5Z" />,
  menu: <path d="M3 7h18M3 12h18M3 17h18" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  check: <path d="m4 12.5 5 5L20 6.5" />,
} as const;

export type IconName = keyof typeof paths;

type IconProps = {
  name: IconName;
  size?: number;
  title?: string;
  className?: string;
};

export default function Icon({ name, size = 20, title, className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {paths[name]}
    </svg>
  );
}
