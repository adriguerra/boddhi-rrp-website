import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AccentText } from "@/components/AccentText";
import type { SiteContent } from "@/content";

export function LandingHero({ content }: { content: SiteContent }) {
  const { hero } = content;

  return (
    <section className="lp-hero" id="top">
      <div className="lp-hero__inner">
        <div className="lp-hero__main">
          <div className="lp-hero__copy">
            <p className="lp-hero__eyebrow">
              <span>{hero.eyebrow}</span>
              <span className="lp-hero__eyebrow-rule" aria-hidden />
            </p>
            <AccentText as="h1" className="lp-hero__title" text={hero.title} />
            <p className="lp-hero__sub">{hero.sub}</p>
            <a className="btn btn--accent btn--hero" href="#contact">
              {hero.ctaPrimary}
            </a>
          </div>

          <div className="lp-hero__proof-block">
            <p className="lp-hero__proof-lead">{hero.proofLead}</p>
            <AccentText as="p" className="lp-hero__proof" text={hero.proof} />
            <a className="lp-hero__proof-cta" href="#cases">
              {hero.proofCta}
              <ArrowRight size={14} weight="bold" aria-hidden />
            </a>
          </div>
        </div>

        <div className="lp-hero__visual">
          <div className="lp-hero__frame">
            <Image
              src="/assets/hockey.png"
              alt={hero.photoAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
              className="lp-hero__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
