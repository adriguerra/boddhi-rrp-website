import Image from "next/image";
import { ArrowRight, CaretDown } from "@phosphor-icons/react/dist/ssr";
import { AccentText } from "@/components/AccentText";
import type { SiteContent } from "@/content";

export function LandingHero({ content }: { content: SiteContent }) {
  const { hero } = content;

  return (
    <section className="lp-hero" id="top">
      <div className="lp-hero__bg" aria-hidden>
        <Image
          src="/assets/acupuncture.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="lp-hero__bg-img"
        />
        <div className="lp-hero__veil" />
      </div>

      <div className="lp-hero__inner">
        <div className="lp-hero__copy">
          <p className="lp-hero__eyebrow">{hero.eyebrow}</p>
          <AccentText as="h1" className="lp-hero__title" text={hero.title} />
          <p className="lp-hero__sub">{hero.sub}</p>
          <a className="btn btn--ghost btn--hero" href="#contact">
            {hero.ctaPrimary}
          </a>
        </div>

        <aside className="lp-hero__proof">
          <AccentText as="p" className="lp-hero__proof-text" text={hero.proof} />
          <a className="lp-hero__proof-link" href="#cases">
            <span>{hero.proofCta}</span>
            <ArrowRight size={16} weight="bold" aria-hidden />
          </a>
        </aside>
      </div>

      <a
        className="lp-hero__scroll"
        href="#protocol"
        aria-label={hero.scrollLabel}
      >
        <CaretDown size={22} weight="bold" aria-hidden />
        <CaretDown size={22} weight="bold" aria-hidden />
      </a>
    </section>
  );
}
