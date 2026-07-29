"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "@phosphor-icons/react";
import { AccentText } from "@/components/AccentText";
import type { SiteContent } from "@/content";

type Science = SiteContent["protocol"]["science"];
type Principle = Science["principles"][number];

type ScienceModalProps = {
  science: Science;
  onClose: () => void;
};

export function ScienceModal({ science, onClose }: ScienceModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [activeVideo, setActiveVideo] = useState<Principle | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const close = useCallback(() => {
    onClose();
  }, [onClose]);

  const closeVideo = useCallback(() => {
    const el = videoRef.current;
    if (el) {
      el.pause();
      el.currentTime = 0;
    }
    setActiveVideo(null);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (activeVideo) {
        closeVideo();
        return;
      }
      close();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [close, closeVideo, activeVideo]);

  useEffect(() => {
    if (!activeVideo) return;
    const el = videoRef.current;
    if (!el) return;
    void el.play().catch(() => {
      /* user gesture already opened the lightbox */
    });
  }, [activeVideo]);

  return createPortal(
    <div
      className="science-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={close}
    >
      <div
        className="science-modal__panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="science-modal__close"
          onClick={close}
          aria-label={science.closeLabel}
        >
          <X size={22} weight="bold" />
        </button>

        <h2 id={titleId} className="science-modal__title">
          {science.title}
        </h2>

        <div className="science-modal__principles">
          {science.principles.map((principle) => (
            <article key={principle.label} className="science-principle">
              <header className="science-principle__head">
                <p className="science-principle__label">{principle.label}</p>
                <h3 className="science-principle__title">{principle.title}</h3>
              </header>

              <div className="science-principle__body">
                {principle.body.map((paragraph) => (
                  <AccentText
                    key={paragraph}
                    as="p"
                    text={paragraph}
                  />
                ))}
              </div>

              {principle.video ? (
                <button
                  type="button"
                  className="science-principle__media"
                  onClick={() => setActiveVideo(principle)}
                  aria-label={
                    principle.videoLabel ??
                    `Play video: ${principle.title}`
                  }
                >
                  <Image
                    src={principle.poster}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 280px"
                    className="science-principle__poster"
                  />
                  <span className="science-principle__play" aria-hidden>
                    <Play size={22} weight="fill" />
                  </span>
                </button>
              ) : (
                <div className="science-principle__media" aria-hidden={false}>
                  <Image
                    src={principle.poster}
                    alt={principle.posterAlt}
                    fill
                    sizes="(max-width: 900px) 100vw, 280px"
                    className="science-principle__poster"
                  />
                  <span className="science-principle__play" aria-hidden>
                    <Play size={22} weight="fill" />
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {activeVideo?.video ? (
        <div
          className="science-modal__video"
          role="dialog"
          aria-modal="true"
          aria-label={activeVideo.videoLabel ?? activeVideo.title}
          onClick={(e) => {
            e.stopPropagation();
            closeVideo();
          }}
        >
          <button
            type="button"
            className="science-modal__video-close"
            onClick={closeVideo}
            aria-label={science.closeLabel}
          >
            <X size={22} weight="bold" />
          </button>
          <div
            className="science-modal__video-stage"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              className="science-modal__player"
              src={activeVideo.video}
              poster={activeVideo.poster}
              controls
              playsInline
              autoPlay
            />
          </div>
        </div>
      ) : null}
    </div>,
    document.body,
  );
}
