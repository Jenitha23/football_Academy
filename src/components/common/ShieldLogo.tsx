export function ShieldLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative h-11 w-11 shrink-0">
        <svg
          viewBox="0 0 48 48"
          className="h-full w-full drop-shadow-[0_4px_12px_oklch(0.79_0.14_85/0.5)]"
        >
          <defs>
            <linearGradient id="gold-grad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.86 0.11 88)" />
              <stop offset="100%" stopColor="oklch(0.65 0.15 78)" />
            </linearGradient>
          </defs>
          <path
            d="M24 3 L42 9 V24 C42 34 34 42 24 45 C14 42 6 34 6 24 V9 Z"
            fill="url(#gold-grad)"
            stroke="oklch(0.14 0 0)"
            strokeWidth="1"
          />
          <text
            x="24"
            y="29"
            textAnchor="middle"
            fontFamily="Space Grotesk, sans-serif"
            fontWeight="700"
            fontSize="14"
            fill="oklch(0.14 0 0)"
            letterSpacing="-0.5"
          >
            SJD
          </text>
        </svg>
      </div>
      <div className="leading-tight">
        <div className="font-display text-sm font-bold tracking-widest text-white uppercase">
          SJD Elite
        </div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-primary">
          Football Academy
        </div>
      </div>
    </div>
  );
}
