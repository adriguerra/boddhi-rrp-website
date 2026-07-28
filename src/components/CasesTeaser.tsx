"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { AccentText } from "@/components/AccentText";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { SiteContent } from "@/content";

export function CasesTeaser({ content }: { content: SiteContent }) {
  const { cases } = content;
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openItem = cases.items.find((item) => item.slug === openSlug) ?? null;

  return (
    <section className="section--light impact" id="cases">
      <div className="container">
        <Reveal className="impact__intro">
          <AccentText as="h2" className="section-title" text={cases.title} />
        </Reveal>

        <Stagger className="impact__grid">
          {cases.items.map((item) => (
            <StaggerItem key={item.slug}>
              <article className="impact-card">
                <div className="impact-card__head">
                  <Image
                    src={item.photo}
                    alt={item.name}
                    width={56}
                    height={56}
                    className="impact-card__avatar"
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.team}</p>
                  </div>
                </div>

                <dl className="impact-card__meta">
                  {item.meta.map((row) => (
                    <div key={row.label} className="impact-card__row">
                      <dt>{row.label}</dt>
                      <dd>{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="impact-card__stat">
                  <span className="impact-card__percent">{item.percent}</span>
                  <span className="impact-card__percent-label">
                    {item.percentLabel}
                  </span>
                </div>

                <button
                  type="button"
                  className="btn btn--teal btn--md impact-card__cta"
                  onClick={() => setOpenSlug(item.slug)}
                >
                  {cases.readMore}
                  <ArrowRight size={16} weight="bold" aria-hidden />
                </button>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {openItem ? (
        <CaseStudyModal
          item={openItem}
          closeLabel={cases.closeLabel}
          onClose={() => setOpenSlug(null)}
        />
      ) : null}
    </section>
  );
}
