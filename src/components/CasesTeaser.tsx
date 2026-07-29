import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AccentText } from "@/components/AccentText";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { VerticalVideo } from "@/components/VerticalVideo";
import { casePath, type SiteContent } from "@/content";

export function CasesTeaser({ content }: { content: SiteContent }) {
  const { locale, cases } = content;

  return (
    <section className="section--light cases cases--teaser" id="cases">
      <div className="container">
        <Reveal className="cases__intro">
          <p className="cases__label">{cases.badge}</p>
          <AccentText
            as="h2"
            className="section-title cases__title"
            text={cases.title}
          />
        </Reveal>

        <Stagger className="cases__grid">
          {cases.items.map((item) => {
            const href = casePath(locale, item.slug);

            return (
              <StaggerItem key={item.slug}>
                <article className="case-teaser case-teaser--media">
                  {item.video ? (
                    <VerticalVideo
                      src={item.video}
                      poster={item.videoPoster ?? item.photo}
                      label={item.videoLabel}
                      name={item.name}
                      className="case-teaser__reel"
                    />
                  ) : (
                    <Link
                      href={href}
                      className="case-teaser__reel case-teaser__reel--still"
                    >
                      {(item.storyLabel || item.videoLabel) && (
                        <span className="case-teaser__story-label">
                          {item.storyLabel ?? item.videoLabel}
                        </span>
                      )}
                      <div className="case-teaser__still">
                        <Image
                          src={item.photo}
                          alt={item.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 420px"
                          className="case-teaser__still-img"
                        />
                      </div>
                    </Link>
                  )}

                  <div className="case-teaser__body">
                    <h3>{item.name}</h3>
                    <p className="case-teaser__injury">{item.injury}</p>
                    <Link href={href} className="case-teaser__read">
                      {cases.readMore}
                      <ArrowRight size={14} weight="bold" aria-hidden />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
