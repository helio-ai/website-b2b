/* eslint-disable @next/next/no-img-element */

/** YourLio wordmark (the 3D mark stands in for the "o"). */
export function Logo({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <img
        src={tone === "light" ? "/brand/wordmark-white.png" : "/brand/wordmark-graphite.png"}
        alt="YourLio"
        width={108}
        height={36}
        className="h-8 w-auto"
      />
      <span
        className={`hidden rounded-md px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider sm:inline ${
          tone === "light" ? "bg-white/10 text-white/80" : "bg-brand-50 text-brand-700"
        }`}
      >
        for business
      </span>
    </span>
  );
}
