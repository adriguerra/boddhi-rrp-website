import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { AccentText } from "@/components/AccentText";
import { ContactSection } from "@/components/ContactSection";
import { CountUp } from "@/components/CountUp";
import { DocumentLang } from "@/components/DocumentLang";
import { FrenchPreferenceRedirect } from "@/components/FrenchPreferenceRedirect";
import { ImpactSection } from "@/components/ImpactSection";
import { LandingHero } from "@/components/LandingHero";
import { LangLink } from "@/components/LangLink";
import { NavShell } from "@/components/NavShell";
import { ProtocolStory } from "@/components/ProtocolStory";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { SiteContent } from "@/content";

export function HomePage({ content }: { content: SiteContent }) {
  const { locale, nav, protocol, delivery, about, footer } = content;
  const isEn = locale === "en";

  const langSwitch = (
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
  );

  return (
    <>
      <DocumentLang locale={locale} />
      {isEn ? <FrenchPreferenceRedirect /> : null}

      <NavShell
        menuLabelOpen={nav.menuOpen}
        menuLabelClose={nav.menuClose}
        mobilePanel={
          <>
            <nav className="nav__drawer-links" aria-label={nav.aria}>
              {nav.links.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            {langSwitch}
            <a className="btn btn--accent btn--md" href="#contact">
              {nav.cta}
            </a>
          </>
        }
      >
        <div className="nav__inner">
          <a href="#top" className="nav__brand">
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
            {langSwitch}
            <a className="btn btn--accent btn--sm" href="#contact">
              {nav.cta}
            </a>
          </div>
        </div>
      </NavShell>

      <LandingHero content={content} />

      <section className="section--dark protocol" id="protocol">
        <div className="container">
          <Reveal className="protocol__intro">
            <span className="badge badge--teal-soft-dark">{protocol.badge}</span>
            <h2 className="section-title section-title--light">
              {protocol.title}
            </h2>
            <p className="protocol__subtitle">{protocol.subtitle}</p>
          </Reveal>

          <ProtocolStory protocol={protocol} />
        </div>
      </section>

      <ImpactSection content={content} />

      <section className="section--dark delivery" id="access">
        <div className="container">
          <Reveal className="delivery__intro">
            <span className="badge badge--teal-soft-dark">{delivery.badge}</span>
            <h2 className="section-title section-title--light">
              {delivery.title}
            </h2>
            <p className="delivery__subtitle">{delivery.subtitle}</p>
          </Reveal>

          <Stagger className="delivery__grid">
            {delivery.items.map((item) => (
              <StaggerItem key={item.num}>
                <a href="#contact" className="delivery-card">
                  <div className="delivery-card__media">
                    <Image
                      src={item.photo.src}
                      alt={item.photo.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      className="delivery-card__img"
                    />
                  </div>
                  <div className="delivery-card__body">
                    <h3>{item.title}</h3>
                    <p className="delivery-card__subtitle">{item.subtitle}</p>
                    <ul>
                      {item.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    <span className="delivery-card__cta">
                      {item.cta}
                      <ArrowRight size={16} weight="bold" aria-hidden />
                    </span>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section--light about" id="about">
        <div className="container">
          <Reveal className="about__intro">
            <span className="badge badge--teal-soft">{about.badge}</span>
            <h2 className="about__title">{about.title}</h2>
          </Reveal>

          <Reveal className="about-lead">
            <div className="about-lead__photo">
              <Image
                src="/assets/lucy-dean.jpg"
                alt={about.name}
                width={320}
                height={400}
              />
            </div>
            <div className="about-lead__content">
              <h3 className="about-lead__name">{about.name}</h3>
              <AccentText
                as="p"
                className="about-lead__role"
                text={about.role}
              />
              <p className="about-lead__location">{about.location}</p>
              <p className="about-lead__bio">{about.bio}</p>
              <Stagger className="about-lead__creds">
                {about.creds.map((cred) => (
                  <StaggerItem key={cred.label}>
                    <div className="cred-chip">
                      <CountUp
                        className="cred-chip__value"
                        to={cred.to}
                        suffix={cred.suffix}
                        format={cred.format}
                      />
                      <div className="cred-chip__label">{cred.label}</div>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </Reveal>

          <div className="about-team">
            <Reveal className="about-team__copy">
              <h3 className="about-team__title">{about.teamTitle}</h3>
              {about.teamIntro.map((paragraph) => (
                <AccentText
                  key={paragraph}
                  as="p"
                  className="about-team__intro"
                  text={paragraph}
                />
              ))}
            </Reveal>
            <Stagger className="about-team__grid">
              {about.team.map((member) => (
                <StaggerItem key={member.name}>
                  <article className="team-pill">
                    <span className="team-pill__photo-wrap">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="team-pill__photo"
                      />
                    </span>
                    <div>
                      <p className="team-pill__name">{member.name}</p>
                      <p className="team-pill__role">{member.role}</p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <ContactSection content={content} />

      <footer className="footer">
        <div className="footer__top">
          <div className="footer__brand">
            <Image
              className="footer__logo"
              src="/assets/logo-white.png"
              alt="BODDHI RRP"
              width={140}
              height={36}
            />
            <p className="footer__tagline">{footer.tagline}</p>
            <LangLink
              locale={locale}
              href={nav.otherLangHref}
              className="footer__lang"
            >
              {nav.footerLangLabel}
            </LangLink>
          </div>
          <div className="footer__cols">
            {footer.columns.map((col) => (
              <div key={col.title} className="footer__col">
                <h4>{col.title}</h4>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <span className="footer__copy">{footer.copy}</span>
          <div className="footer__legal">
            {footer.legal.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
