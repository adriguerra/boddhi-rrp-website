"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/types/CaseStudy";

type HeroBackgroundProps = {
  caseStudy: CaseStudy;
  className?: string;
  /** Fires when the active still changes. `null` means video / no still. */
  onActiveSlideChange?: (slideSrc: string | null) => void;
};

type Layer = {
  key: number;
  study: CaseStudy;
};

const SLIDE_INTERVAL_MS = 4200;

function slidesFor(study: CaseStudy): string[] {
  if (study.heroImages && study.heroImages.length > 0) {
    return study.heroImages;
  }
  if (study.heroVideo) return [];
  const single =
    study.celebrationImage ??
    study.actionImage ??
    study.treatmentImage ??
    "/assets/hockey.png";
  return [single];
}

function videoPosterFor(study: CaseStudy): string {
  return (
    study.celebrationImage ??
    study.actionImage ??
    study.heroImages?.[0] ??
    study.treatmentImage ??
    "/assets/hockey.png"
  );
}

/**
 * Dual-layer crossfade between case studies.
 * Sequence per case: heroImages slideshow → heroVideo (once), then loop.
 */
export function HeroBackground({
  caseStudy,
  className,
  onActiveSlideChange,
}: HeroBackgroundProps) {
  const seq = useRef(0);
  const [layers, setLayers] = useState<Layer[]>(() => [
    { key: 0, study: caseStudy },
  ]);

  useEffect(() => {
    setLayers((prev) => {
      const top = prev[prev.length - 1];
      if (top?.study.id === caseStudy.id) return prev;
      return [...prev.slice(-1), { key: ++seq.current, study: caseStudy }];
    });
  }, [caseStudy]);

  useEffect(() => {
    if (layers.length < 2) return;
    const timer = window.setTimeout(() => {
      setLayers((prev) => prev.slice(-1));
    }, 1100);
    return () => window.clearTimeout(timer);
  }, [layers]);

  return (
    <div className={className} aria-hidden>
      {layers.map((layer, i) => (
        <MediaLayer
          key={layer.key}
          study={layer.study}
          active={i === layers.length - 1}
          initial={layer.key === 0 && layers.length === 1}
          onActiveSlideChange={onActiveSlideChange}
        />
      ))}
    </div>
  );
}

function initialPhase(
  hasSlides: boolean,
  hasVideo: boolean,
): "video" | "images" {
  if (hasSlides) return "images";
  if (hasVideo) return "video";
  return "images";
}

function MediaLayer({
  study,
  active,
  initial,
  onActiveSlideChange,
}: {
  study: CaseStudy;
  active: boolean;
  initial: boolean;
  onActiveSlideChange?: (slideSrc: string | null) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const slides = slidesFor(study);
  const hasVideo = Boolean(study.heroVideo);
  const hasFollowUpSlides = slides.length > 0;
  const [fadeIn, setFadeIn] = useState(initial);
  const [slideIndex, setSlideIndex] = useState(0);
  /** stills first; after they run (or if no stills), show video */
  const [phase, setPhase] = useState<"video" | "images">(() =>
    initialPhase(hasFollowUpSlides, hasVideo),
  );

  useEffect(() => {
    if (initial) return;
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setFadeIn(true));
    });
    return () => cancelAnimationFrame(id);
  }, [initial]);

  useEffect(() => {
    setSlideIndex(0);
    setPhase(initialPhase(hasFollowUpSlides, hasVideo));
  }, [study.id, hasFollowUpSlides, hasVideo]);

  // Reset sequence whenever this case becomes active again
  useEffect(() => {
    if (!active) return;
    setSlideIndex(0);
    setPhase(initialPhase(hasFollowUpSlides, hasVideo));
  }, [active, hasFollowUpSlides, hasVideo, study.id]);

  useEffect(() => {
    if (!active) return;
    if (phase === "images" && slides.length > 0) {
      onActiveSlideChange?.(slides[slideIndex % slides.length] ?? null);
      return;
    }
    onActiveSlideChange?.(null);
  }, [active, phase, slideIndex, slides.length, study.id, onActiveSlideChange]);

  useEffect(() => {
    if (!active || phase !== "images" || slides.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // With a follow-up video: advance stills once, then play it
    if (hasVideo) {
      let i = 0;
      const tick = window.setInterval(() => {
        if (i + 1 >= slides.length) {
          setSlideIndex(0);
          setPhase("video");
          return;
        }
        i += 1;
        setSlideIndex(i);
      }, SLIDE_INTERVAL_MS);
      return () => window.clearInterval(tick);
    }

    if (slides.length < 2) return;

    const tick = window.setInterval(() => {
      setSlideIndex((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(tick);
  }, [active, phase, slides.length, hasVideo]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !hasVideo) return;

    const onEnded = () => {
      if (hasFollowUpSlides) {
        setSlideIndex(0);
        setPhase("images");
      } else {
        el.currentTime = 0;
        void el.play().catch(() => undefined);
      }
    };

    el.addEventListener("ended", onEnded);
    if (active && phase === "video") {
      el.currentTime = 0;
      void el.play().catch(() => undefined);
    } else {
      el.pause();
    }

    return () => el.removeEventListener("ended", onEnded);
  }, [active, hasVideo, hasFollowUpSlides, phase]);

  const focal = study.focalPoint ?? "50% 16%";
  const showVideo = hasVideo && phase === "video";
  const showSlides = phase === "images" && slides.length > 0;

  return (
    <div
      className="case-hero__bg-layer"
      data-active={active ? "true" : "false"}
      data-fade={fadeIn ? "true" : "false"}
    >
      <div className="case-hero__bg-frame">
        {/* Base poster under video so it never flashes */}
        {hasVideo ? (
          <Image
            src={videoPosterFor(study)}
            alt=""
            fill
            sizes="100vw"
            priority={active}
            className="case-hero__bg-img case-hero__bg-slide"
            data-visible={showVideo ? "true" : "false"}
            style={{ objectPosition: focal }}
          />
        ) : null}

        {slides.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes="100vw"
            priority={active && i === 0}
            className="case-hero__bg-img case-hero__bg-slide"
            data-visible={
              showSlides && i === slideIndex % slides.length ? "true" : "false"
            }
            style={{ objectPosition: "55% 40%" }}
          />
        ))}

        {hasVideo ? (
          <video
            ref={videoRef}
            className="case-hero__bg-video"
            src={study.heroVideo}
            muted
            playsInline
            loop={!hasFollowUpSlides}
            preload="auto"
            poster={videoPosterFor(study)}
            data-visible={showVideo ? "true" : "false"}
            style={{ objectPosition: focal }}
          />
        ) : null}
      </div>
    </div>
  );
}
