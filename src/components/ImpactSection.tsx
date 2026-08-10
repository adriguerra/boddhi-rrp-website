"use client";

import Image from "next/image";
import { ArrowRight, Medal, Trophy } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { Reveal } from "@/components/motion/Reveal";
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

function OutcomeIcon({ study }: { study: CaseStudy }) {
  if (study.outcomeIcon === "trophy") {
    return (
      <Trophy
        className="impact-case__outcome-icon impact-case__outcome-icon--trophy"
        size={22}
        weight="fill"
        aria-hidden
      />
    );
  }
  if (study.outcomeIcon === "medal") {
    return (
      <Medal
        className="impact-case__outcome-icon impact-case__outcome-icon--medal"
        size={22}
        weight="fill"
        aria-hidden
      />
    );
  }
  return null;
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
        <div className="container impact__container">
          <Reveal className="impact__intro">
            <span className="badge badge--teal-soft-dark">{cases.badge}</span>
            <h2 className="sr-only">{cases.badge}</h2>
          </Reveal>

          <div className="impact__grid">
            {studies.map((study) => {
              const slug = STUDY_TO_SLUG[study.id];
              const item = cases.items.find((c) => c.slug === slug);
              const cover = coverFor(study);
              if (!slug || !item || !cover) return null;

              return (
                <article key={study.id} className="impact-case">
                  <Image
                    src={cover}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    className="impact-case__img"
                    style={{ objectPosition: study.focalPoint ?? "center" }}
                  />
                  <span className="impact-case__veil" aria-hidden />

                  <div className="impact-case__body">
                    <h3 className="impact-case__name">{study.athlete}</h3>
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
                    <p
                      className={[
                        "impact-case__outcome",
                        study.outcomeIcon
                          ? `impact-case__outcome--${study.outcomeIcon}`
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                    >
                      <OutcomeIcon study={study} />
                      <span>{study.outcome}</span>
                    </p>
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
              );
            })}
          </div>
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
