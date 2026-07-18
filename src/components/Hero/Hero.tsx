"use client";

import { CaretDown } from "@phosphor-icons/react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CaseStudy, HeroChrome } from "@/types/CaseStudy";
import { HeroBackground } from "./HeroBackground";
import { HeroCaseStudy } from "./HeroCaseStudy";
import { HeroOverlay } from "./HeroOverlay";

const DEFAULT_INTERVAL_MS = 9000;
const CONTENT_FADE_MS = 380;

export type HeroProps = {
  caseStudies: CaseStudy[];
  chrome: HeroChrome;
  intervalMs?: number;
  className?: string;
  id?: string;
  /** Anchor for the scroll cue — default #cases */
  scrollHref?: string;
  scrollLabel?: string;
};

export function Hero({
  caseStudies,
  chrome,
  intervalMs = DEFAULT_INTERVAL_MS,
  className,
  id = "top",
  scrollHref = "#cases",
  scrollLabel = "Scroll down",
}: HeroProps) {
  const count = caseStudies.length;
  const [index, setIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);
  const fading = useRef(false);
  const active = caseStudies[index] ?? caseStudies[0];

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
    const next = caseStudies[(index + 1) % count];
    if (!next) return;

    const poster =
      next.heroImages?.[0] ??
      next.celebrationImage ??
      next.actionImage ??
      next.treatmentImage;
    if (poster) {
      const img = new window.Image();
      img.src = poster;
    }
    next.heroImages?.slice(1).forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [index, count, caseStudies]);

  useEffect(() => {
    if (count < 2) return;
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
  }, [intervalMs, count]);

  if (!active) return null;

  return (
    <section
      className={["case-hero", className].filter(Boolean).join(" ")}
      id={id}
    >
      <HeroBackground caseStudy={active} className="case-hero__bg" />
      <div className="case-hero__veil" aria-hidden />

      <div className="case-hero__inner">
        <HeroOverlay chrome={chrome} className="case-hero__overlay">
          <div
            className="case-hero__case-fade"
            data-visible={contentVisible ? "true" : "false"}
          >
            <HeroCaseStudy caseStudy={active} className="case-hero__case" />
          </div>
          {count > 1 ? (
            <div
              className="case-hero__dots"
              role="tablist"
              aria-label="Case studies"
            >
              {caseStudies.map((study, i) => (
                <button
                  key={study.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={study.athlete}
                  className="case-hero__dot"
                  data-active={i === index ? "true" : "false"}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          ) : null}
        </HeroOverlay>
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
  );
}
