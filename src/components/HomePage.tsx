import Image from "next/image";
import {
  Ambulance,
  Buildings,
  CheckCircle,
  Drop,
  GraduationCap,
  Heartbeat,
  LockKey,
  MapPin,
  PhoneCall,
  Target,
  WarningCircle,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { CasesTeaser } from "@/components/CasesTeaser";
import { ContactSection } from "@/components/ContactSection";
import { DocumentLang } from "@/components/DocumentLang";
import { FrenchPreferenceRedirect } from "@/components/FrenchPreferenceRedirect";
import { LangLink } from "@/components/LangLink";
import { HeroItem, HeroMotion } from "@/components/motion/HeroMotion";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import type { SiteContent } from "@/content";

const phaseIcons = [Heartbeat, Target, LockKey] as const;
const serviceIcons = [Ambulance, Buildings, GraduationCap] as const;
const principleIcons = [Drop, LockKey] as const;
const principleColors = ["var(--orange-400)", "var(--teal-400)"] as const;

export function HomePage({ content }: { content: SiteContent }) {
  const { locale, nav, hero, what, science, services, about, footer } =
    content;
  const isEn = locale === "en";

  return (
    <>
      <DocumentLang locale={locale} />
      {isEn ? <FrenchPreferenceRedirect /> : null}

      <header className="nav">
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
      </header>

      <section className="hero" id="top">
        <div className="hero__inner">
          <HeroMotion>
            <div className="hero__grid">
              <div>
                <HeroItem>
                  <div className="hero__kicker">
                    <span className="eyebrow">{hero.eyebrow}</span>
                    <span className="hero__kicker-dot" />
                    <span className="hero__kicker-sub">{hero.location}</span>
                  </div>
                </HeroItem>
                <HeroItem>
                  <h1>
                    {hero.title}
                    <br />
                    <span className="accent-line">{hero.titleAccent}</span>
                  </h1>
                </HeroItem>
                <HeroItem>
                  <p className="hero__sub">
                    {hero.sub} <strong>{hero.subStrong}</strong>
                  </p>
                </HeroItem>
                <HeroItem>
                  <div className="hero__ctas">
                    <a className="btn btn--accent btn--lg" href="#contact">
                      {hero.ctaPrimary}{" "}
                      <ArrowRight size={18} weight="bold" />
                    </a>
                    <a className="btn btn--ghost btn--lg" href="#cases">
                      {hero.ctaSecondary}
                    </a>
                  </div>
                </HeroItem>
              </div>
              <HeroItem>
                <div className="hero__photo">
                  <Image
                    src="/assets/hockey.png"
                    alt={hero.photoAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </HeroItem>
            </div>

            <HeroItem>
              <div className="hero__stat-band">
                <div className="hero__stat">
                  <span className="hero__stat-value">90%</span>
                  <span className="hero__stat-label">
                    {hero.statLabelBefore}
                    <em>{hero.statLabelEm}</em>
                    {hero.statLabelAfter}
                  </span>
                </div>
                <div className="hero__stat-quote">
                  <p>{hero.quote1}</p>
                  <p>{hero.quote2}</p>
                </div>
              </div>
            </HeroItem>

            <HeroItem>
              <div className="hero__banner">
                <WarningCircle size={28} weight="fill" color="var(--orange-400)" />
                <div className="hero__banner-body">
                  <p>{hero.banner1}</p>
                  <p>{hero.banner2}</p>
                </div>
              </div>
            </HeroItem>
          </HeroMotion>
        </div>
      </section>

      <CasesTeaser content={content} />

      <section className="section--light" id="what">
        <div className="container">
          <Reveal className="what__intro">
            <span className="badge badge--teal-soft">{what.badge}</span>
            <h2 className="section-title">
              {what.title}
              <span className="accent-line">{what.titleAccent}</span>
            </h2>
            <p className="lead">
              {what.lead}
              <strong>{what.leadStrong}</strong>
            </p>
            <p className="lead-display">{what.leadDisplay}</p>
          </Reveal>

          <div className="what__grid">
            <Stagger className="what__grid-cards">
              <StaggerItem>
                <div className="card">
                  <div className="card__overline">{what.repairOverline}</div>
                  <p>{what.repairBody}</p>
                  <div className="card__badges">
                    <span className="badge badge--graphite-soft">Grade 1</span>
                    <span className="badge badge--graphite-soft">Grade 2</span>
                    <span className="badge badge--graphite-soft">Grade 3</span>
                  </div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="card--dark-quote">
                  <p>
                    {what.quote1}
                    <span className="accent-line">{what.quote1Accent}</span>
                  </p>
                  <p>{what.quote2}</p>
                </div>
              </StaggerItem>
            </Stagger>
            <Reveal delay={0.15}>
              <figure className="what__photo" style={{ margin: 0 }}>
                <Image
                  src="/assets/acupuncture.png"
                  alt={what.photoCaption}
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  style={{ objectFit: "cover" }}
                />
                <figcaption>{what.photoCaption}</figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal>
            <div className="what__phases-head">
              <span>{what.phasesHead}</span>
              <span className="rule" />
            </div>
          </Reveal>
          <Stagger className="what__phases">
            {what.phases.map((phase, i) => {
              const Icon = phaseIcons[i] ?? Heartbeat;
              return (
                <StaggerItem key={phase.num}>
                  <div className="card phase-card">
                    <div className="phase-card__head">
                      <div className="phase-card__icon">
                        <Icon size={25} weight="fill" color="var(--teal-600)" />
                      </div>
                      <span className="phase-card__num">{phase.num}</span>
                    </div>
                    <h3>{phase.title}</h3>
                    <p>{phase.body}</p>
                    {phase.bullets ? (
                      <ul>
                        {phase.bullets.map((b) => (
                          <li key={b}>
                            <CheckCircle
                              size={16}
                              weight="fill"
                              color="var(--teal-500)"
                            />{" "}
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal>
            <div className="what__key">
              <div className="what__key-body">
                <div className="card__overline">{what.keyOverline}</div>
                <p>
                  {what.keyBody}
                  <span className="accent-line">{what.keyAccent}</span>
                </p>
                <p>{what.keyCta}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section--dark science" id="science">
        <div className="container">
          <Reveal className="science__intro">
            <span className="eyebrow">{science.eyebrow}</span>
            <h2 className="section-title">
              {science.title.split("\n").map((line, i, arr) => (
                <span key={line}>
                  {line}
                  {i < arr.length - 1 ? <br /> : null}
                </span>
              ))}
            </h2>
          </Reveal>

          <Stagger className="science__grid">
            {science.principles.map((p, i) => {
              const Icon = principleIcons[i] ?? Drop;
              return (
                <StaggerItem key={p.label}>
                  <div className="principle">
                    <div className="principle__head">
                      <Icon
                        size={30}
                        weight="fill"
                        color={principleColors[i] ?? "var(--orange-400)"}
                      />
                      <span>{p.label}</span>
                    </div>
                    <h3>{p.title}</h3>
                    {p.paragraphs.map((para, idx) => {
                      if (i === 0 && idx === 1) {
                        const [before, after] = para.split(
                          "Heat, not ice. Activation, not suppression.",
                        );
                        if (after !== undefined) {
                          return (
                            <p key={para}>
                              {before}
                              <strong>
                                Heat, not ice. Activation, not suppression.
                              </strong>
                              {after}
                            </p>
                          );
                        }
                        const [beforeFr, afterFr] = para.split(
                          "La chaleur, pas la glace. L'activation, pas la suppression.",
                        );
                        if (afterFr !== undefined) {
                          return (
                            <p key={para}>
                              {beforeFr}
                              <strong>
                                La chaleur, pas la glace. L&apos;activation, pas
                                la suppression.
                              </strong>
                              {afterFr}
                            </p>
                          );
                        }
                      }
                      return <p key={para}>{para}</p>;
                    })}
                    {p.punch ? <p className="punch">{p.punch}</p> : null}
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="science__window">
              <div className="science__window-stat">
                <div className="value">72h</div>
                <div className="label">{science.windowLabel}</div>
              </div>
              <div>
                <h3>{science.windowTitle}</h3>
                <p>
                  {science.windowBody}
                  <strong>{science.windowStrong}</strong>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section--dark" id="services">
        <div className="container">
          <Reveal className="services__intro">
            <span className="eyebrow">{services.eyebrow}</span>
            <h2 className="section-title">{services.title}</h2>
            <p>{services.intro}</p>
          </Reveal>

          <Reveal>
            <div className="services__callout">
              <PhoneCall size={22} weight="fill" color="var(--orange-400)" />
              <p>
                {services.callout}
                <strong>{services.calloutStrong}</strong>
              </p>
            </div>
          </Reveal>

          <Stagger className="services__list">
            {services.items.map((item, i) => {
              const Icon = serviceIcons[i] ?? Ambulance;
              return (
                <StaggerItem key={item.num}>
                  <article className="service">
                    <div>
                      <div className="service__head">
                        <div className="service__icon">
                          <Icon
                            size={26}
                            weight="fill"
                            color="var(--teal-300)"
                          />
                        </div>
                        <span className="service__num">{item.num}</span>
                      </div>
                      <h3>{item.title}</h3>
                      <p className="service__lead">{item.lead}</p>
                    </div>
                    <div className="service__blocks">
                      {item.blocks.map((block) => (
                        <div className="service__block" key={block.title}>
                          <div className="service__block-title">
                            {block.title}
                          </div>
                          <p>{block.body}</p>
                        </div>
                      ))}
                    </div>
                  </article>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section className="section--light" id="about">
        <div className="container">
          <div className="about__grid">
            <Reveal>
              <div className="about__head">
                <Image
                  src="/assets/lucy-dean.jpg"
                  alt={about.name}
                  width={150}
                  height={180}
                />
                <div>
                  <span className="badge badge--teal-soft">{about.badge}</span>
                  <h2>{about.name}</h2>
                  <p className="role">{about.role}</p>
                </div>
              </div>
              <p className="about__story">
                {about.story}
                <em>{about.storyEm}</em>
                {about.storyMid}
                <strong>{about.storyStrong}</strong>
                {about.storyEnd}
              </p>
              <div className="about__quote">
                <p>
                  {about.quote}
                  <strong>{about.quoteStrong}</strong>
                </p>
              </div>
              <div className="about__location">
                <MapPin size={17} weight="fill" color="var(--teal-600)" />{" "}
                {about.location}
              </div>
            </Reveal>

            <Stagger className="about__creds">
              {about.creds.map((cred) => (
                <StaggerItem key={cred.unit}>
                  <div className="cred-card">
                    <div className="value">{cred.value}</div>
                    <div className="unit">{cred.unit}</div>
                    <p>{cred.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal>
            <div className="team-capsule">
              <div>
                <h3 className="team-capsule__title">{about.teamTitle}</h3>
                <p className="team-capsule__text">
                  {about.teamText}
                  <strong>{about.teamStrong}</strong>
                </p>
              </div>
              <div className="team-mini-grid">
                {about.team.map((member) => (
                  <div className="team-mini" key={member.name}>
                    <Image
                      src={member.photo}
                      alt={member.name}
                      width={90}
                      height={108}
                    />
                    <div>
                      <p className="team-mini__name">{member.name}</p>
                      <p className="team-mini__role">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
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
