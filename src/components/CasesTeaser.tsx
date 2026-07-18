import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Medal } from "@phosphor-icons/react/dist/ssr";
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
          <span className="badge badge--orange-soft">{cases.badge}</span>
          <h2 className="section-title">{cases.title}</h2>
          <p>{cases.subtitle}</p>
        </Reveal>

        <Stagger className="cases__grid">
          {cases.items.map((item) => {
            const href = casePath(locale, item.slug);

            return (
              <StaggerItem key={item.slug}>
                <article
                  className={`case-teaser${item.video ? " case-teaser--video" : ""}`}
                >
                  {item.video ? (
                    <VerticalVideo
                      src={item.video}
                      poster={item.photo}
                      label={item.videoLabel}
                      name={item.name}
                      className="case-teaser__reel"
                    />
                  ) : null}

                  <div className="case-teaser__body">
                    <div className="case-teaser__top">
                      {!item.video ? (
                        <div className="case-teaser__photo">
                          <Image
                            src={item.photo}
                            alt={item.name}
                            width={128}
                            height={128}
                          />
                        </div>
                      ) : null}
                      <div>
                        <h3>
                          <Link href={href}>{item.name}</Link>
                        </h3>
                        <p className="case-teaser__team">{item.team}</p>
                        <p className="case-teaser__injury">{item.injury}</p>
                      </div>
                    </div>

                    <div className="case-teaser__contrast">
                      <div className="case-teaser__before">
                        <span className="case-teaser__label">
                          {item.beforeLabel}
                        </span>
                        <span className="case-teaser__before-value">
                          {item.before}
                        </span>
                      </div>
                      <span className="case-teaser__arrow" aria-hidden>
                        →
                      </span>
                      <div className="case-teaser__after">
                        <span className="case-teaser__label">
                          {item.rtpLabel}
                        </span>
                        <span className="case-teaser__rtp">{item.rtp}</span>
                        <span className="case-teaser__result">{item.result}</span>
                      </div>
                    </div>

                    <div className="case-teaser__medal">
                      <Medal
                        size={18}
                        weight="fill"
                        color="var(--orange-400)"
                      />
                      <span>{item.medal}</span>
                    </div>

                    <Link href={href} className="case-teaser__cta">
                      {cases.readMore} <ArrowRight size={16} weight="bold" />
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </Stagger>

        <p className="cases__footnote">{cases.footnote}</p>
      </div>
    </section>
  );
}
