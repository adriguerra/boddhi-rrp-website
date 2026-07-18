"use client";

import { useCallback, useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  EnvelopeSimple,
  MapPin,
} from "@phosphor-icons/react";
import { Reveal } from "@/components/motion/Reveal";
import type { SiteContent } from "@/content";

export function ContactSection({ content }: { content: SiteContent }) {
  const { contact } = content;
  const [toast, setToast] = useState<string | null>(null);

  const enquire = useCallback(() => {
    setToast(contact.toast);
    window.setTimeout(() => setToast(null), 2600);
  }, [contact.toast]);

  return (
    <>
      <section className="section--dark contact" id="contact">
        <div className="contact__inner">
          <Reveal>
            <h2>{contact.title}</h2>
            <p className="contact__tagline">{contact.tagline}</p>
            <div className="contact__ctas">
              <button
                type="button"
                className="btn btn--accent btn--lg"
                onClick={enquire}
              >
                {contact.primary} <ArrowRight size={18} weight="bold" />
              </button>
            </div>
            <div className="contact__ctas">
              <button
                type="button"
                className="btn btn--ghost btn--md"
                onClick={enquire}
              >
                {contact.residency}
              </button>
              <button
                type="button"
                className="btn btn--ghost btn--md"
                onClick={enquire}
              >
                {contact.training}
              </button>
            </div>
            <div className="contact__info">
              <div>
                <EnvelopeSimple size={20} weight="fill" color="var(--teal-300)" />{" "}
                {contact.email}
              </div>
              <div>
                <MapPin size={20} weight="fill" color="var(--teal-300)" />{" "}
                {contact.location}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {toast ? (
        <div className="toast" role="status">
          <CheckCircle size={18} weight="fill" color="var(--teal-500)" />
          {toast}
        </div>
      ) : null}
    </>
  );
}
