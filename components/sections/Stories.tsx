"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Pause, Play, X } from "lucide-react";
import { STORIES, type Story } from "@/lib/yourlio/stories";
import { caseStudyUrl } from "@/lib/yourlio";

const ADVANCE_MS = 4000;

/** The quote or headline with the chosen phrases set in bold. */
function Highlighted({ text, phrases }: { text: string; phrases: string[] }) {
  if (!phrases.length) return <>{text}</>;
  const escaped = phrases.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  return (
    <>
      {text.split(new RegExp(`(${escaped.join("|")})`)).map((part, i) =>
        phrases.includes(part) ? (
          <strong key={i} className="font-semibold text-white">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

const AVATAR = "h-12 w-12 shrink-0 overflow-hidden rounded-full md:h-14 md:w-14";

/** The person speaking, else the brand's badge or logo, else its initials. */
function Avatar({ s }: { s: Story }) {
  const photo = s.authorPhoto ?? s.badge;
  if (photo) {
    return (
      <span className={`block ring-2 ring-white/20 ${AVATAR}`}>
        <img src={photo} alt="" width={56} height={56} loading="lazy" className="h-full w-full object-cover" />
      </span>
    );
  }
  if (s.logo) {
    return (
      <span className={`grid place-items-center bg-white px-2.5 ${AVATAR}`}>
        <img src={s.logo.src} alt="" width={s.logo.w} height={s.logo.h} loading="lazy" className="h-auto w-full" />
      </span>
    );
  }
  const initials = (s.author ?? s.client).split(/\s+/).map((w) => w[0]).slice(0, 2).join("");
  return <span className={`grid place-items-center bg-white/15 font-semibold ${AVATAR}`}>{initials}</span>;
}

/** The founder video with sound, in a native modal dialog (Esc, close button or a click outside closes it). */
function VideoDialog({ video, onClose }: { video: NonNullable<Story["video"]>; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    ref.current?.showModal();
  }, []);
  return (
    <dialog
      ref={ref}
      aria-label={video.label}
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="m-auto overflow-visible bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <div className="relative">
        <video src={video.src} poster={video.poster} controls autoPlay playsInline className="block aspect-[9/16] w-[min(92vw,calc(86vh*0.5625))] rounded-2xl bg-black object-contain" />
        <button type="button" onClick={onClose} aria-label="Close video" className="absolute -top-3 -right-3 grid h-11 w-11 place-items-center rounded-full bg-white text-ink shadow-lg">
          <X className="h-[18px] w-[18px]" aria-hidden="true" />
        </button>
      </div>
    </dialog>
  );
}

/**
 * Customer stories one at a time, edge to edge: the brand's photo (with a
 * button for the founder's video where there is one), then a quote or
 * headline and one headline result on a purple panel. Ported from the
 * yourlio.com case study slider.
 */
export function Stories() {
  const count = STORIES.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [playing, setPlaying] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const running = !paused && !hovered && playing === null && !reducedMotion;
  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => setActive((i) => (i + 1) % count), ADVANCE_MS);
    return () => clearTimeout(t);
  }, [running, active, cycle, count]);

  const select = (i: number) => {
    setActive(i);
    setCycle((c) => c + 1);
  };
  const near = (i: number) => i === active || i === (active + 1) % count || i === (active - 1 + count) % count;
  const current = STORIES[active];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer stories"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden bg-[linear-gradient(135deg,#5E168F_0%,#3a1259_42%,#151018_100%)] text-white"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -top-32 -right-24 h-[420px] w-[620px] bg-[radial-gradient(ellipse,rgba(155,77,217,0.35)_0%,transparent_70%)]" />
      <div className="relative grid">
        {STORIES.map((s, i) => {
          const on = i === active;
          return (
            <figure
              key={s.slug}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              aria-hidden={on ? undefined : true}
              inert={!on}
              className={`col-start-1 row-start-1 grid grid-rows-[auto_1fr] transition-opacity duration-500 motion-reduce:transition-none lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:grid-rows-1 ${on ? "opacity-100" : "invisible opacity-0"}`}
            >
              <div className="relative h-60 overflow-hidden bg-[#151018] sm:h-80 lg:h-auto lg:min-h-[440px]">
                {near(i) && (
                  <img src={s.photo} alt="" width={1600} height={900} loading="lazy" decoding="async" className={`absolute inset-0 h-full w-full object-cover ${s.photoTop ? "object-top" : ""}`} />
                )}
                {s.quote && (
                  <>
                    <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(160deg,rgba(21,16,24,0.55)_0%,transparent_45%)]" />
                    <span aria-hidden="true" className="absolute top-0 left-4 font-serif text-[130px] leading-[0.9] font-bold text-white/90 select-none md:left-8 md:text-[200px]">
                      &ldquo;
                    </span>
                  </>
                )}
                {s.video && (
                  <>
                    <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(to_top,rgba(21,16,24,0.6)_0%,transparent_35%)]" />
                    <button
                      type="button"
                      onClick={() => setPlaying(i)}
                      aria-label={`Play video: ${s.video.label}`}
                      className="group absolute bottom-4 left-4 z-10 inline-flex items-center gap-2.5 rounded-full bg-white/95 py-1 pr-4 pl-1 text-[13px] font-semibold text-ink shadow-[0_12px_30px_-12px_rgba(0,0,0,0.6)] hover:bg-white md:bottom-6 md:left-6 md:text-sm"
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-500 text-white transition-transform duration-200 group-hover:scale-105 md:h-9 md:w-9">
                        <Play className="ml-0.5 h-3.5 w-3.5 fill-current" aria-hidden="true" />
                      </span>
                      Watch {s.author?.split(" ")[0]}&rsquo;s story <span className="font-normal text-text-2">{s.video.duration}</span>
                    </button>
                  </>
                )}
              </div>

              <div className="flex flex-col px-6 pt-6 pb-2 sm:px-10 sm:pt-8 lg:justify-center lg:px-14 lg:pt-10 lg:pb-[84px]">
                <div className="w-full max-w-[700px]">
                  {s.logo ? (
                    <img src={s.logo.src} alt={s.client} width={s.logo.w} height={s.logo.h} loading="lazy" className={`block h-8 w-auto md:h-10 ${s.logoInColour ? "rounded-[3px]" : "brightness-0 invert"}`} />
                  ) : (
                    <p className="text-xl font-semibold">{s.client}</p>
                  )}
                  {s.quote ? (
                    <blockquote className="mt-5 text-base leading-[1.55] text-white/85 sm:text-[19px] lg:text-xl xl:text-[22px]">
                      <p>
                        &ldquo;
                        <Highlighted text={s.quote} phrases={s.bold} />
                        &rdquo;
                      </p>
                    </blockquote>
                  ) : (
                    <div className="mt-5">
                      <p className="text-[26px] leading-[1.1] font-semibold tracking-tight text-white/75 sm:text-[38px] lg:text-[42px]">
                        <Highlighted text={s.headline} phrases={s.bold} />
                      </p>
                      <p className="mt-2.5 text-sm leading-relaxed text-white/70 sm:mt-3 sm:text-lg">{s.tagline}.</p>
                    </div>
                  )}
                  <figcaption className="mt-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 lg:mt-9">
                    <span className="flex items-center gap-3.5">
                      <Avatar s={s} />
                      <span>
                        <span className="block font-semibold">{s.author ?? s.client}</span>
                        <span className="block text-sm text-white/65">{s.author ? s.role : `Case study, ${s.window}`}</span>
                      </span>
                    </span>
                    <span className="flex items-center gap-3">
                      <span className="text-4xl leading-none font-bold tracking-tight md:text-5xl">{s.result.display}</span>
                      <span className="max-w-[200px] text-[13px] leading-snug text-white/75">{s.result.label}</span>
                    </span>
                  </figcaption>
                  <a href={caseStudyUrl(s.slug)} target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-200 hover:text-white sm:hidden">
                    Read the {s.client} story <ArrowRight className="h-[15px] w-[15px]" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </figure>
          );
        })}
      </div>

      <div className="relative px-6 pb-5 sm:px-10 lg:absolute lg:right-0 lg:bottom-0 lg:left-[46%] lg:px-14 lg:pb-7">
        <div className="flex max-w-[700px] items-center justify-between gap-4">
          <div role="group" aria-label="Choose a story" className="-ml-2 flex items-center">
            {STORIES.map((s, i) => (
              <button key={s.slug} type="button" aria-label={`Show ${s.client} story`} aria-pressed={i === active} onClick={() => select(i)} className="grid h-11 min-w-6 place-items-center px-1 sm:min-w-7">
                {i === active ? (
                  <span className="relative block h-2 w-8 overflow-hidden rounded-full bg-white/30">
                    <span
                      key={`${active}-${cycle}-${running}`}
                      className="absolute inset-0 origin-left rounded-full bg-white"
                      style={running ? { animation: `story-progress ${ADVANCE_MS}ms linear forwards` } : undefined}
                    />
                  </span>
                ) : (
                  <span className="block h-2 w-2 rounded-full bg-white/40 transition-colors hover:bg-white/70" />
                )}
              </button>
            ))}
            {!reducedMotion && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play the stories" : "Pause the stories"}
                className="ml-1 grid h-11 w-9 place-items-center text-white/60 transition-colors hover:text-white"
              >
                {paused ? <Play className="h-[13px] w-[13px] fill-current" aria-hidden="true" /> : <Pause className="h-[13px] w-[13px] fill-current" aria-hidden="true" />}
              </button>
            )}
          </div>
          <a href={caseStudyUrl(current.slug)} target="_blank" rel="noopener" className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-200 hover:text-white sm:inline-flex">
            Read the {current.client} story <ArrowRight className="h-[15px] w-[15px]" aria-hidden="true" />
          </a>
        </div>
      </div>

      {playing !== null && STORIES[playing].video && <VideoDialog video={STORIES[playing].video!} onClose={() => setPlaying(null)} />}
    </div>
  );
}
