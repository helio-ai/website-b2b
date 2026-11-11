"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Globe, Menu, X, ArrowRight } from "lucide-react";
import { Icon } from "./Icon";
import { Logo } from "./Logo";
import { APP_LOGIN_URL, APP_SIGNUP_URL, industryMenu, languages, productMenu, resourcesMenu, topLinks } from "@/lib/site";
import { caseStudyUrl, getCaseStudy, integrations } from "@/lib/yourlio";

type MenuKey = "product" | "industries" | "resources" | null;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Close everything when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(null);
    setMobileOpen(false);
    setLangOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
        setLangOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(null);
        setLangOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const enter = (k: MenuKey) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(k);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 150);
  };

  const solid = scrolled || open !== null || mobileOpen;

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 p-2">
      <div
        className={`mx-auto max-w-[1320px] rounded-2xl border transition-colors duration-300 ${
          open !== null || mobileOpen
            ? "border-ink-line bg-ink shadow-2xl"
            : solid
              ? "border-ink-line bg-ink/90 shadow-lg backdrop-blur-md"
              : "border-transparent bg-transparent"
        }`}
        onMouseLeave={leave}
      >
        <div className="flex h-14 items-center gap-2 px-3 lg:px-4">
          <Link href="/" aria-label="Home" className="shrink-0 lg:ps-1">
            <Logo />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main" className="ms-2 hidden items-center gap-0.5 lg:flex xl:ms-6 xl:gap-1">
            {(
              [
                ["product", "Product"],
                ["industries", "Industries"],
                ["resources", "Resources"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                aria-expanded={open === key}
                aria-controls={`menu-${key}`}
                onMouseEnter={() => enter(key)}
                onClick={() => setOpen(open === key ? null : key)}
                className={`flex h-9 items-center gap-1 whitespace-nowrap rounded-lg ps-3 pe-1.5 text-sm xl:ps-3.5 xl:pe-2 font-medium text-white transition-colors hover:bg-white/10 ${
                  open === key ? "bg-white/10" : ""
                }`}
              >
                {label}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${open === key ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            ))}
            {topLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onMouseEnter={() => enter(null)}
                className="flex h-9 items-center whitespace-nowrap rounded-lg px-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="ms-auto flex items-center gap-1 sm:gap-2">
            {/* Language selector */}
            <div className="relative">
              <button
                type="button"
                aria-label="Language"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-white hover:bg-white/10"
              >
                <Globe className="h-5 w-5" aria-hidden="true" />
              </button>
              {langOpen && (
                <ul className="absolute right-0 mt-2 max-h-80 w-56 overflow-auto rounded-xl bg-ink-2 p-2 text-sm shadow-xl ring-1 ring-ink-line">
                  {languages.map((l, i) => (
                    <li key={l}>
                      <button
                        type="button"
                        onClick={() => setLangOpen(false)}
                        className={`block w-full rounded-md px-3 py-2 text-left text-white hover:bg-white/10 ${i === 0 ? "bg-white/10" : ""}`}
                      >
                        {l}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <Link
              href={APP_LOGIN_URL}
              className="hidden h-9 items-center whitespace-nowrap rounded-lg px-3 text-sm font-medium text-white hover:bg-white/10 xl:inline-flex"
            >
              Login
            </Link>
            <Link
              href="/demo"
              className="hidden h-9 items-center whitespace-nowrap rounded-lg bg-white/10 px-3.5 text-sm font-medium text-white ring-1 ring-white/20 hover:bg-white/20 md:inline-flex"
            >
              Talk to Sales
            </Link>
            <Link
              href={APP_SIGNUP_URL}
              className="hidden h-9 items-center whitespace-nowrap rounded-lg bg-brand-500 px-3.5 text-sm font-medium text-white hover:bg-brand-600 sm:inline-flex"
            >
              Start Free Trial
            </Link>
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

        {/* Desktop mega menus */}
        <div className="hidden lg:block" onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)}>
          {open === "product" && <ProductPanel />}
          {open === "industries" && <IndustriesPanel />}
          {open === "resources" && <ResourcesPanel />}
        </div>

        {/* Mobile drawer */}
        {mobileOpen && <MobileMenu />}
      </div>
    </header>
  );
}

/* ------------------------------------------------------------------ */

function PanelLink({ href, label, icon, description }: { href: string; label: string; icon?: string; description?: string }) {
  return (
    <Link href={href} className="group flex items-start gap-3 rounded-xl p-2.5 text-white transition-colors hover:bg-white/5">
      {icon && (
        <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-brand-300 ring-1 ring-white/10 group-hover:bg-brand-500 group-hover:text-white">
          <Icon name={icon} className="h-4 w-4" />
        </span>
      )}
      <span>
        <span className="block text-sm font-medium">{label}</span>
        {description && <span className="mt-0.5 block text-xs text-white/55">{description}</span>}
      </span>
    </Link>
  );
}

function ProductPanel() {
  return (
    <div id="menu-product" className="grid grid-cols-[repeat(3,1fr)_1.25fr] gap-2 border-t border-ink-line p-4">
      {productMenu.slice(0, 3).map((col) => (
        <div key={col.title} className="p-2">
          <p className="mb-2 px-2.5 text-xs font-semibold uppercase tracking-wider text-white/45">{col.title}</p>
          {col.links.map((l) => (
            <PanelLink key={l.href} {...l} />
          ))}
        </div>
      ))}
      <div className="rounded-xl bg-white/[0.03] p-2 ring-1 ring-white/5">
        <p className="mb-2 px-2.5 text-xs font-semibold uppercase tracking-wider text-white/45">{productMenu[3].title}</p>
        {productMenu[3].links.map((l) => (
          <PanelLink key={l.href} {...l} />
        ))}
        <Link
          href="/integrations"
          className="mt-2 block rounded-xl bg-white/5 p-3 text-white ring-1 ring-white/10 hover:bg-white/10"
        >
          <span className="flex items-center justify-between text-sm font-medium">
            Channels and Integrations <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="mt-3 grid grid-cols-7 gap-1.5" aria-hidden="true">
            {integrations
              .filter((i) => i.logo)
              .slice(0, 14)
              .map((i) => (
                <span key={i.slug} className="flex aspect-square items-center justify-center rounded-md bg-white p-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={i.logo as string} alt="" className="h-full w-full object-contain" loading="lazy" />
                </span>
              ))}
          </span>
        </Link>
      </div>
    </div>
  );
}

function IndustriesPanel() {
  const [active, setActive] = useState(0);
  const ind = industryMenu[active];
  return (
    <div id="menu-industries" className="grid grid-cols-[240px_1fr_300px] gap-4 border-t border-ink-line p-4">
      <div role="tablist" aria-orientation="vertical" className="flex flex-col gap-1">
        {industryMenu.map((it, i) => (
          <button
            key={it.label}
            type="button"
            role="tab"
            aria-selected={i === active}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onClick={() => setActive(i)}
            className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-white transition-colors ${
              i === active ? "bg-white/10" : "hover:bg-white/5"
            }`}
          >
            <Icon name={it.icon} className="h-4 w-4 text-brand-300" />
            {it.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="grid content-start grid-cols-2 gap-1 border-x border-ink-line px-4">
        {ind.links.map((l) => (
          <PanelLink key={l.href} href={l.href} label={l.label} icon={ind.icon} />
        ))}
      </div>
      <IndustryStory slug={ind.storySlug} label={ind.label} />
    </div>
  );
}

function IndustryStory({ slug, label }: { slug?: string; label: string }) {
  const study = slug ? getCaseStudy(slug) : undefined;
  if (!study) {
    return (
      <Link href="/demo" className="group flex flex-col rounded-xl bg-gradient-to-br from-brand-600 to-ink-3 p-5 text-white ring-1 ring-white/10">
        <Icon name="Calendar" className="h-7 w-7" />
        <span className="mt-auto pt-10 text-xs text-white/70">{label}</span>
        <span className="mt-1 flex items-center gap-1 text-base font-semibold">
          See it with your questions <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </Link>
    );
  }
  return (
    <a href={caseStudyUrl(study.slug)} target="_blank" rel="noopener" className="group block rounded-xl bg-white/5 p-3 text-white ring-1 ring-white/10 hover:bg-white/10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={study.image} alt={study.imageAlt ?? `${study.client} case study`} className="aspect-[2/1] w-full rounded-lg object-cover" loading="lazy" />
      <span className="mt-3 block text-xs text-white/55">Customer story · {study.client}</span>
      <span className="mt-1 line-clamp-2 block text-sm font-medium">{study.title}</span>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-300 group-hover:text-white">
        Read the story <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </a>
  );
}

function ResourcesPanel() {
  return (
    <div id="menu-resources" className="grid grid-cols-[1fr_1fr_300px] gap-4 border-t border-ink-line p-4">
      {resourcesMenu.map((col) => (
        <div key={col.title}>
          <p className="mb-2 px-2.5 text-xs font-semibold uppercase tracking-wider text-white/45">{col.title}</p>
          {col.links.map((l) => (
            <PanelLink key={l.href} {...l} />
          ))}
        </div>
      ))}
      <Link href="/reseller" className="group flex flex-col rounded-xl bg-gradient-to-br from-brand-600 to-ink-3 p-5 text-white ring-1 ring-white/10">
        <Icon name="Handshake" className="h-7 w-7" />
        <span className="mt-auto pt-10 text-xs text-white/70">Partners</span>
        <span className="mt-1 flex items-center gap-1 text-base font-semibold">
          Explore Our Partner Program <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </Link>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function MobileSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="group border-b border-ink-line">
      <summary className="flex cursor-pointer items-center justify-between py-4 text-base font-medium text-white">
        {title}
        <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      <div className="pb-4">{children}</div>
    </details>
  );
}

function MobileMenu() {
  return (
    <div id="mobile-menu" className="flex max-h-[calc(100dvh-5rem)] flex-col border-t border-ink-line lg:hidden">
      <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-4">
        <MobileSection title="Product">
          {productMenu.map((col) => (
            <div key={col.title} className="mb-3">
              <p className="px-2.5 pb-1 text-xs font-semibold uppercase tracking-wider text-white/45">{col.title}</p>
              {col.links.map((l) => (
                <PanelLink key={l.href} {...l} />
              ))}
            </div>
          ))}
          <PanelLink href="/integrations" label="Channels and Integrations" icon="Plug" />
        </MobileSection>
        <MobileSection title="Industries">
          {industryMenu.map((ind) => (
            <div key={ind.label} className="mb-3">
              <p className="flex items-center gap-2 px-2.5 pb-1 text-xs font-semibold uppercase tracking-wider text-white/45">
                {ind.label}
              </p>
              {ind.links.map((l) => (
                <PanelLink key={l.href} href={l.href} label={l.label} />
              ))}
            </div>
          ))}
        </MobileSection>
        <MobileSection title="Resources">
          {resourcesMenu.map((col) => (
            <div key={col.title} className="mb-3">
              <p className="px-2.5 pb-1 text-xs font-semibold uppercase tracking-wider text-white/45">{col.title}</p>
              {col.links.map((l) => (
                <PanelLink key={l.href} {...l} />
              ))}
            </div>
          ))}
          <PanelLink href="/reseller" label="Explore Our Partner Program" icon="Handshake" />
        </MobileSection>
        {topLinks.map((l) => (
          <Link key={l.href} href={l.href} className="block border-b border-ink-line py-4 text-base font-medium text-white">
            {l.label}
          </Link>
        ))}
        <Link href={APP_LOGIN_URL} className="block py-4 text-base font-medium text-white">
          Login
        </Link>
      </nav>
      <div className="grid grid-cols-2 gap-2 border-t border-ink-line p-4">
        <Link href="/demo" className="inline-flex h-11 items-center justify-center rounded-lg bg-white/10 text-sm font-medium text-white ring-1 ring-white/20">
          Talk to Sales
        </Link>
        <Link href={APP_SIGNUP_URL} className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-500 text-sm font-medium text-white">
          Start Free Trial
        </Link>
      </div>
    </div>
  );
}
