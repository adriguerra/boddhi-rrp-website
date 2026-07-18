"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "@phosphor-icons/react";

type VerticalVideoProps = {
  src: string;
  poster: string;
  label?: string;
  name: string;
  className?: string;
};

export function VerticalVideo({
  src,
  poster,
  label,
  name,
  className,
}: VerticalVideoProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => {
    const el = videoRef.current;
    if (el) {
      el.pause();
      el.currentTime = 0;
    }
    setOpen(false);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const el = videoRef.current;
    if (el) {
      void el.play().catch(() => {
        /* click already counts as gesture */
      });
    }

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  const overlay =
    open && mounted
      ? createPortal(
          <div
            className="vertical-video__overlay"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={close}
          >
            <button
              type="button"
              className="vertical-video__close"
              onClick={close}
              aria-label="Close video"
            >
              <X size={22} weight="bold" />
            </button>
            <div
              className="vertical-video__stage"
              onClick={(e) => e.stopPropagation()}
            >
              <p id={titleId} className="sr-only">
                {label ? `${label} — ${name}` : name}
              </p>
              <video
                ref={videoRef}
                className="vertical-video__player"
                src={src}
                poster={poster}
                controls
                playsInline
                autoPlay
              />
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <button
        type="button"
        className={`vertical-video ${className ?? ""}`}
        onClick={() => setOpen(true)}
        aria-label={label ? `${label}: ${name}` : `Play video: ${name}`}
      >
        {label ? <span className="vertical-video__label">{label}</span> : null}
        <span className="vertical-video__frame">
          <Image
            src={poster}
            alt=""
            fill
            sizes="(max-width: 640px) 70vw, 280px"
            className="vertical-video__poster"
          />
          <span className="vertical-video__play" aria-hidden>
            <Play size={28} weight="fill" />
          </span>
        </span>
      </button>
      {overlay}
    </>
  );
}
