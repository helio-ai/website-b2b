import { BRAND } from "@/lib/site";

/** Placeholder wordmark. Replace with your own logo SVG. */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 text-white ${className}`}>
      <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden="true">
        <rect width="28" height="28" rx="8" className="fill-brand-500" />
        <path d="M8 10.5a2.5 2.5 0 0 1 2.5-2.5h7a2.5 2.5 0 0 1 2.5 2.5v4a2.5 2.5 0 0 1-2.5 2.5H13l-3.5 3v-3a2.5 2.5 0 0 1-1.5-2.3z" fill="white" />
      </svg>
      <span className="text-lg font-semibold tracking-tight">{BRAND}</span>
    </span>
  );
}
