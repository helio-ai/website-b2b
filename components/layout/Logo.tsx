/* eslint-disable @next/next/no-img-element */

/** YourLio wordmark (the 3D mark stands in for the "o") with a "for business" tag. */
export function Logo() {
  return (
    <span className="inline-flex items-center gap-2">
      <img src="/brand/wordmark-white.png" alt="YourLio" width={108} height={36} className="h-8 w-auto" />
      <span className="hidden rounded-md bg-white/10 px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white/80 sm:inline">for business</span>
    </span>
  );
}
