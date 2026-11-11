"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { APP_LOGIN_URL, APP_SIGNUP_URL, navLinks } from "@/lib/site";

/** Single page header: jump links to each section, plus login and the two calls to action. */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 p-2">
      <div
        className={`mx-auto max-w-[1320px] rounded-2xl border transition-colors duration-300 ${
          mobileOpen ? "border-ink-line bg-ink shadow-2xl" : scrolled ? "border-ink-line bg-ink/90 shadow-lg backdrop-blur-md" : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-14 items-center gap-2 px-3 lg:px-4">
          <Link href="/" aria-label="YourLio for business home" className="shrink-0 lg:ps-1" onClick={() => setMobileOpen(false)}>
            <Logo />
          </Link>

          <nav aria-label="Main" className="ms-4 hidden items-center gap-0.5 lg:flex xl:ms-6 xl:gap-1">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="flex h-9 items-center whitespace-nowrap rounded-lg px-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="ms-auto flex items-center gap-1 sm:gap-2">
            <a href={APP_LOGIN_URL} className="hidden h-9 items-center whitespace-nowrap rounded-lg px-3 text-sm font-medium text-white hover:bg-white/10 xl:inline-flex">
              Login
            </a>
            <Link
              href="/#demo"
              className="hidden h-9 items-center whitespace-nowrap rounded-lg bg-white/10 px-3.5 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/20 md:inline-flex"
            >
              Talk to Sales
            </Link>
            <a
              href={APP_SIGNUP_URL}
              className="hidden h-9 items-center whitespace-nowrap rounded-lg bg-brand-500 px-3.5 text-sm font-medium text-white hover:bg-brand-600 sm:inline-flex"
            >
              Start Free Trial
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div id="mobile-menu" className="flex max-h-[calc(100dvh-5rem)] flex-col border-t border-ink-line lg:hidden">
            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block border-b border-ink-line py-4 text-base font-medium text-white">
                  {l.label}
                </Link>
              ))}
              <a href={APP_LOGIN_URL} className="block py-4 text-base font-medium text-white">
                Login
              </a>
            </nav>
            <div className="grid grid-cols-2 gap-2 border-t border-ink-line p-4">
              <Link href="/#demo" onClick={() => setMobileOpen(false)} className="inline-flex h-11 items-center justify-center rounded-lg bg-white/10 text-sm font-medium text-white ring-1 ring-white/20">
                Talk to Sales
              </Link>
              <a href={APP_SIGNUP_URL} className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-500 text-sm font-medium text-white">
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
