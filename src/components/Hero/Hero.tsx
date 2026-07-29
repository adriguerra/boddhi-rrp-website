"use client";

import { CaretDown } from "@phosphor-icons/react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AccentText } from "@/components/AccentText";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import type { SiteContent } from "@/content";
import type { CaseStudy } from "@/types/CaseStudy";
import { HeroBackground } from "./HeroBackground";
import { HeroStats } from "./HeroStats";

const DEFAULT_INTERVAL_MS = 8000;
const CONTENT_FADE_MS = 380;
const BRAND_IMAGE = "/assets/acupuncture.png";

type CaseItem = SiteContent["cases"]["items"][number];

/** Slideshow case ids → content case slug + CTA kind */
const STORY_BY_ID: Record<
  string,
  { slug: string; cta: "watch" | "read" }
> = {
  kaleigh: { slug: "kaleigh-quennec", cta: "watch" },
  kevin: { slug: "kevin-mbabu", cta: "read" },
};

export type HeroChromeCopy = {
  eyebrow: string;
  title: string;
  sub: string;
  cta: { label: string; href: string };
  watchVideoCta: string;
  readStoryCta: string;
};

export type HeroProps = {
  caseStudies: CaseStudy[];
  caseItems: CaseItem[];
  closeLabel: string;
  chrome: HeroChromeCopy;
  intervalMs?: number;
  className?: string;
  id?: string;
  scrollHref?: string;
  scrollLabel?: string;
};

type BrandSlide = {
  kind: "brand";
  id: "brand";
  label: string;
  study: CaseStudy;
};

type AthleteSlide = {
  kind: "athlete";
  id: string;
  label: string;
  study: CaseStudy;
};

type HeroSlide = BrandSlide | AthleteSlide;

function brandStudy(): CaseStudy {
  return {
    id: "brand",
    athlete: "BODDHI RRP",
    team: "",
    injury: "",
    prognosis: "",
    returnToPlay: "",
    outcome: "",
    heroImages: [BRAND_IMAGE],
    focalPoint: "center 35%",
  };
}

/**
 * Brand slide: left claim stack.
 * Athlete slides: main-style split — result left, name right.
 * Story CTAs open the case-study modal (not a separate page).
 */
export function Hero({
  caseStudies,
  caseItems,
  closeLabel,
  chrome,
  intervalMs = DEFAULT_INTERVAL_MS,
  className,
  id = "top",
  scrollHref = "#protocol",
  scrollLabel = "Scroll down",
}: HeroProps) {
  const slides = useMemo<HeroSlide[]>(
    () => [
      {
        kind: "brand",
        id: "brand",
        label: chrome.eyebrow,
        study: brandStudy(),
      },
      ...caseStudies.map(
        (study): AthleteSlide => ({
          kind: "athlete",
          id: study.id,
          label: study.athlete,
          study,
        }),
      ),
    ],
    [caseStudies, chrome.eyebrow],
  );

  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const fading = useRef(false);
  const active = slides[index] ?? slides[0];

  const openItem = caseItems.find((item) => item.slug === openSlug) ?? null;
  const modalOpen = Boolean(openItem);

  const goTo = useCallback(
    (next: number) => {
      if (count < 2 || fading.current) return;
      const target = ((next % count) + count) % count;
      if (target === index) return;

      fading.current = true;
      setContentVisible(false);
      window.setTimeout(() => {
        setIndex(target);
        setContentVisible(true);
        fading.current = false;
      }, CONTENT_FADE_MS);
    },
    [count, index],
  );

  useEffect(() => {
    if (count < 2) return;
    const next = slides[(index + 1) % count];
    if (!next) return;
    const poster =
      next.study.heroImages?.[0] ??
      next.study.celebrationImage ??
      next.study.actionImage ??
      next.study.treatmentImage;
    if (poster) {
      const img = new window.Image();
      img.src = poster;
    }
  }, [index, count, slides]);

  useEffect(() => {
    if (count < 2 || modalOpen) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tick = window.setInterval(() => {
      if (fading.current) return;
      fading.current = true;
      setContentVisible(false);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % count);
        setContentVisible(true);
        fading.current = false;
      }, CONTENT_FADE_MS);
    }, intervalMs);

    return () => window.clearInterval(tick);
  }, [intervalMs, count, modalOpen]);

  if (!active) return null;

  const story =
    active.kind === "athlete" ? STORY_BY_ID[active.study.id] : undefined;
  const storyCta = story
    ? story.cta === "watch"
      ? chrome.watchVideoCta
      : chrome.readStoryCta
    : undefined;

  return (
    <>
      <section
        className={["case-hero", "case-hero--names", className]
          .filter(Boolean)
          .join(" ")}
        id={id}
        data-slide={active.kind}
      >
        <HeroBackground caseStudy={active.study} className="case-hero__bg" />
        <div className="case-hero__veil" aria-hidden />

        <div className="case-hero__inner case-hero__inner--names">
          {active.kind === "brand" ? (
            <div
              className="case-hero__copy case-hero__copy--brand"
              data-visible={contentVisible ? "true" : "false"}
            >
              <p className="case-hero__eyebrow">{chrome.eyebrow}</p>
              <AccentText
                as="h1"
                className="case-hero__name case-hero__name--claim"
                text={chrome.title}
              />
              <p className="case-hero__sub">{chrome.sub}</p>
              <a className="btn btn--ghost btn--hero" href={chrome.cta.href}>
                {chrome.cta.label}
              </a>
            </div>
          ) : (
            <div
              className="case-hero__proof-split"
              data-visible={contentVisible ? "true" : "false"}
            >
              <div className="case-hero__copy case-hero__copy--claim">
                <HeroStats
                  caseStudy={active.study}
                  className="case-hero__stats case-hero__stats--proof"
                />
                {story && storyCta ? (
                  <button
                    type="button"
                    className="btn btn--ghost btn--hero"
                    onClick={() => setOpenSlug(story.slug)}
                  >
                    {storyCta}
                  </button>
                ) : null}
              </div>

              <div className="case-hero__athlete-meta">
                <h2 className="case-hero__athlete">{active.study.athlete}</h2>
                <p className="case-hero__team">{active.study.team}</p>
              </div>
            </div>
          )}

          {count > 1 ? (
            <div
              className="case-hero__dots"
              role="tablist"
              aria-label="Hero slides"
            >
              {slides.map((slide, i) => (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={slide.label}
                  className="case-hero__dot"
                  data-active={i === index ? "true" : "false"}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          ) : null}
        </div>

        <a
          className="case-hero__scroll"
          href={scrollHref}
          aria-label={scrollLabel}
        >
          <CaretDown
            className="case-hero__scroll-icon"
            size={22}
            weight="bold"
            aria-hidden
          />
          <CaretDown
            className="case-hero__scroll-icon"
            size={22}
            weight="bold"
            aria-hidden
          />
        </a>
      </section>

      {openItem ? (
        <CaseStudyModal
          item={openItem}
          closeLabel={closeLabel}
          onClose={() => setOpenSlug(null)}
        />
      ) : null}
    </>
  );
}
