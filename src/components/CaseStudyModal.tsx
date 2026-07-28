"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "@phosphor-icons/react";
import { AccentText } from "@/components/AccentText";
import type { SiteContent } from "@/content";

type CaseItem = SiteContent["cases"]["items"][number];

type CaseStudyModalProps = {
  item: CaseItem;
  closeLabel: string;
  onClose: () => void;
};

export function CaseStudyModal({
  item,
  closeLabel,
  onClose,
}: CaseStudyModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

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
      className="case-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={close}
    >
      <div
        ref={panelRef}
        className="case-modal__panel"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="case-modal__close"
          onClick={close}
          aria-label={closeLabel}
        >
          <X size={22} weight="bold" />
        </button>

        <div className="case-modal__layout">
          <div className="case-modal__copy">
            <h2 id={titleId} className="case-modal__title">
              {item.name}
            </h2>
            {item.modal.sections.map((section) => (
              <div key={section.title} className="case-modal__section">
                <h3>{section.title}</h3>
                <AccentText as="p" text={section.body} />
              </div>
            ))}
          </div>

          <div className="case-modal__gallery" aria-hidden={false}>
            {item.modal.gallery.map((shot, i) => (
              <div
                key={`${shot.src}-${i}`}
                className="case-modal__shot"
                data-i={i}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 900px) 50vw, 28vw"
                  className="case-modal__img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
