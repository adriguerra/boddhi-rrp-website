"use client";

import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import { AccentText } from "@/components/AccentText";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { SiteContent } from "@/content";
import { getCaseStudies } from "@/data/caseStudies";
import type { CaseStudy } from "@/types/CaseStudy";

const STUDY_TO_SLUG: Record<string, string> = {
  kaleigh: "kaleigh-quennec",
  kevin: "kevin-mbabu",
};

function coverFor(study: CaseStudy) {
  return (
    study.heroImages?.[0] ??
    study.actionImage ??
    study.celebrationImage ??
    study.treatmentImage ??
    ""
  );
}

export function ImpactSection({ content }: { content: SiteContent }) {
  const { locale, cases } = content;
  const studies = useMemo(() => getCaseStudies(locale), [locale]);
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const openItem =
    cases.items.find((item) => item.slug === openSlug) ?? null;

  return (
    <>
      <section className="section--dark impact" id="cases">
        <div className="container">
          <Reveal className="impact__intro">
            <span className="badge badge--teal-soft-dark">{cases.badge}</span>
            <AccentText
              as="h2"
              className="section-title section-title--light impact__title"
              text={cases.title}
            />
          </Reveal>

          <Stagger className="impact__grid">
            {studies.map((study) => {
              const slug = STUDY_TO_SLUG[study.id];
              const item = cases.items.find((c) => c.slug === slug);
              const cover = coverFor(study);
              if (!slug || !item || !cover) return null;

              return (
                <StaggerItem key={study.id}>
                  <article className="impact-case">
                    <button
                      type="button"
                      className="impact-case__media"
                      onClick={() => setOpenSlug(slug)}
                      aria-label={`${cases.readMore}: ${study.athlete}`}
                    >
                      <Image
                        src={cover}
                        alt=""
                        fill
                        sizes="(max-width: 900px) 100vw, 50vw"
                        className="impact-case__img"
                        style={{ objectPosition: study.focalPoint ?? "center" }}
                      />
                      <span className="impact-case__veil" aria-hidden />
                    </button>

                    <div className="impact-case__body">
                      <p className="impact-case__team">{study.team}</p>
                      <h3 className="impact-case__name">{study.athlete}</h3>
                      <p className="impact-case__injury">{study.injury}</p>
                      <p className="impact-case__result">
                        <span className="impact-case__prognosis">
                          {study.prognosis}
                        </span>
                        <span className="impact-case__arrow" aria-hidden>
                          →
                        </span>
                        <span className="impact-case__rtp">
                          {study.returnToPlay}
                        </span>
                      </p>
                      <p className="impact-case__outcome">{study.outcome}</p>
                      <button
                        type="button"
                        className="impact-case__cta"
                        onClick={() => setOpenSlug(slug)}
                      >
                        {cases.readMore}
                        <ArrowRight size={16} weight="bold" aria-hidden />
                      </button>
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {openItem ? (
        <CaseStudyModal
          item={openItem}
          closeLabel={cases.closeLabel}
          onClose={() => setOpenSlug(null)}
        />
      ) : null}
    </>
  );
}
