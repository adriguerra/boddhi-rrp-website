"use client";

import { useCallback, useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "@phosphor-icons/react";
import { AccentText } from "@/components/AccentText";
import type { SiteContent } from "@/content";

type Science = SiteContent["protocol"]["science"];

type ScienceModalProps = {
  science: Science;
  onClose: () => void;
};

export function ScienceModal({ science, onClose }: ScienceModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [close]);

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
            </article>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
