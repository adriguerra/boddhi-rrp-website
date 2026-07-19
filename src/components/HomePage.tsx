import Image from "next/image";
import {
  ArrowRight,
  Check,
  MapPin,
  Minus,
  PhoneCall,
} from "@phosphor-icons/react/dist/ssr";
import { CasesTeaser } from "@/components/CasesTeaser";
import { ContactSection } from "@/components/ContactSection";
import { DocumentLang } from "@/components/DocumentLang";
import { FrenchPreferenceRedirect } from "@/components/FrenchPreferenceRedirect";
import { Hero } from "@/components/Hero";
import { NavShell } from "@/components/NavShell";
import { LangLink } from "@/components/LangLink";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { SiteContent } from "@/content";
import { getCaseStudies } from "@/data/caseStudies";
import type { HeroChrome } from "@/types/CaseStudy";

export function HomePage({ content }: { content: SiteContent }) {
  const { locale, nav, hero, what, science, services, about, footer } =
    content;
  const isEn = locale === "en";
  const caseStudies = getCaseStudies(locale);
  const heroChrome: HeroChrome = {
    headline: hero.title,
    brand: `${hero.eyebrow}™`,
  };

  return (
    <>
      <DocumentLang locale={locale} />
      {isEn ? <FrenchPreferenceRedirect /> : null}

      <NavShell>
        <div className="nav__inner">
          <a href="#top">
            <Image
              className="nav__logo"
              src="/assets/logo-white.png"
              alt="BODDHI RRP"
              width={160}
              height={40}
              priority
            />
          </a>
          <nav className="nav__links" aria-label={nav.aria}>
            {nav.links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav__right">
            <div className="lang-switch" aria-label={nav.langAria}>
              {isEn ? (
                <>
                  <span className="lang-switch__current">EN</span>
                  <span className="lang-switch__sep">|</span>
                  <LangLink locale={locale} href={nav.otherLangHref}>
                    {nav.otherLangLabel}
                  </LangLink>
                </>
              ) : (
                <>
                  <LangLink locale={locale} href={nav.otherLangHref}>
                    {nav.otherLangLabel}
                  </LangLink>
                  <span className="lang-switch__sep">|</span>
                  <span className="lang-switch__current">FR</span>
                </>
              )}
            </div>
            <a className="btn btn--accent btn--sm" href="#contact">
              {nav.cta}
            </a>
          </div>
        </div>
      </NavShell>

      <Hero
        caseStudies={caseStudies}
        chrome={heroChrome}
        intervalMs={8000}
        scrollHref="#cases"
        scrollLabel={isEn ? "Scroll down" : "Défiler vers le bas"}
      />

      <CasesTeaser content={content} />

      <section className="section--light" id="what">
        <div className="container">
          <Reveal className="what__intro">
            <span className="badge badge--teal-soft">{what.badge}</span>
            <h2 className="section-title">{what.title}</h2>
          </Reveal>

          <div className="what__layout">
            <Reveal>
              <figure className="what__photo">
                <Image
                  src="/assets/acupuncture.png"
                  alt={what.photoCaption}
                  fill
                  sizes="(max-width: 900px) 100vw, 42vw"
                  style={{ objectFit: "cover" }}
                />
                <figcaption>{what.photoCaption}</figcaption>
              </figure>
            </Reveal>

            <Stagger className="what__phases">
              {what.phases.map((phase) => (
                <StaggerItem key={phase.num}>
                <div className="phase-card">
                  <h3>
                    <span className="phase-card__num">{phase.num}</span>
                    {phase.title}
                  </h3>
                  <p>{phase.body}</p>
                </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="section--dark science" id="science">
        <div className="container">
          <Reveal className="science__intro">
            <span className="eyebrow">{science.eyebrow}</span>
            <h2 className="section-title">{science.title}</h2>
          </Reveal>

          <div className="science__contrast">
            <Reveal className="science__box science__box--usual">
              <h3 className="science__box-title">{science.against.label}</h3>
              <ul>
                {science.against.lines.map((line) => (
                  <li key={line}>
                    <Minus
                      className="science__box-icon"
                      size={20}
                      weight="bold"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="science__box science__box--rrp" delay={0.08}>
              <h3 className="science__box-title">{science.for.label}</h3>
              <ul>
                {science.for.lines.map((line) => (
                  <li key={line}>
                    <Check
                      className="science__box-icon"
                      size={20}
                      weight="bold"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              {science.for.punch ? (
                <p className="science__box-punch">{science.for.punch}</p>
              ) : null}
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="science__window">
              <div className="science__window-stat">
                <div className="value">72h</div>
              </div>
              <p className="science__window-line">{science.windowLine}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section--light" id="about">
        <div className="container">
          <Reveal className="about__intro">
            <span className="badge badge--teal-soft">{about.badge}</span>
            <h2 className="section-title">{about.teamTitle}</h2>
            <p className="about__location">
              <MapPin size={17} weight="fill" color="var(--teal-600)" />{" "}
              {about.location}
            </p>
          </Reveal>

          <Stagger className="team-grid">
            <StaggerItem>
              <article className="team-card team-card--lead">
                <div className="team-card__photo">
                  <Image
                    src="/assets/lucy-dean.jpg"
                    alt={about.name}
                    width={200}
                    height={240}
                  />
                </div>
                <div>
                  <p className="team-card__name">{about.name}</p>
                  <p className="team-card__role">{about.role}</p>
                </div>
              </article>
            </StaggerItem>
            {about.team.map((member) => (
              <StaggerItem key={member.name}>
                <article className="team-card">
                  <div className="team-card__photo">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={160}
                      height={192}
                    />
                  </div>
                  <div>
                    <p className="team-card__name">{member.name}</p>
                    <p className="team-card__role">{member.role}</p>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section--dark" id="services">
        <div className="container">
          <Reveal className="services__intro">
            <span className="eyebrow">{services.eyebrow}</span>
            <h2 className="section-title">{services.title}</h2>
          </Reveal>

          <Reveal>
            <div className="services__callout">
              <PhoneCall size={22} weight="fill" color="var(--orange-400)" />
              <p>
                {services.callout}
                {services.calloutStrong ? (
                  <strong>{services.calloutStrong}</strong>
                ) : null}
              </p>
            </div>
          </Reveal>

          <Stagger className="services__list">
            {services.items.map((item) => {
              const multi = item.photos.length > 1;
              return (
                <StaggerItem key={item.title}>
                  <a
                    href="#contact"
                    className={[
                      "service",
                      multi ? "service--multi" : "service--single",
                    ].join(" ")}
                  >
                    <div
                      className="service__media"
                      data-count={item.photos.length}
                    >
                      {item.photos.map((photo) => (
                        <div key={photo.src} className="service__shot">
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            sizes={
                              multi
                                ? "(max-width: 1024px) 50vw, 280px"
                                : "(max-width: 1024px) 90vw, 560px"
                            }
                            className="service__img"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="service__body">
                      <span className="service__choice">{item.choice}</span>
                      <h3>{item.title}</h3>
                      <p className="service__lead">{item.lead}</p>
                      <span className="service__cta">
                        {item.cta}
                        <ArrowRight size={16} weight="bold" aria-hidden />
                      </span>
                    </div>
                  </a>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <ContactSection content={content} />

      <footer className="footer">
        <div className="footer__inner">
          <Image
            className="footer__logo"
            src="/assets/logo-white.png"
            alt="BODDHI RRP"
            width={120}
            height={30}
          />
          <LangLink
            locale={locale}
            href={nav.otherLangHref}
            className="footer__lang"
          >
            {nav.footerLangLabel}
          </LangLink>
          <span className="footer__copy">{footer.copy}</span>
        </div>
      </footer>
    </>
  );
}
