interface BrandMarkProps {
  className?: string;
}

/**
 * The "PK" logo: italic monogram with a sweeping swoosh, in the portfolio's
 * emerald-to-cyan colours. Decorative: the name next to it already labels the link.
 * Same drawing as the tab icon (src/app/icon.svg).
 */
export function BrandMark({ className = "" }: BrandMarkProps) {
  return (
    <svg viewBox="-6 -68 396 338" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="pk-letters" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="310" y2="200">
          <stop offset="0" stopColor="#10b981" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="pk-swoosh" gradientUnits="userSpaceOnUse" x1="120" y1="-40" x2="360" y2="260">
          <stop offset="0" stopColor="#2dd4bf" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path
        fill="url(#pk-swoosh)"
        d="M118 -38C292 -74 408 36 372 160C358 208 322 244 262 262C334 222 352 150 330 86C304 10 232 -22 118 -38Z"
      />
      <g transform="translate(0 200) skewX(-12) translate(0 -200)" fill="url(#pk-letters)">
        <path fillRule="evenodd" d="M0 0H70A60 60 0 0 1 70 120H46V200H0Z M46 40H70A20 20 0 0 1 70 80H46Z" />
        <rect x="160" y="0" width="46" height="200" />
        <path d="M206 65.2L252.6 0H304.6L206 138Z" />
        <path d="M206 138L235.9 96.1L310 200H256Z" />
      </g>
    </svg>
  );
}
