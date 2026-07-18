import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Medal } from "@phosphor-icons/react/dist/ssr";
import { DocumentLang } from "@/components/DocumentLang";
import { LangLink } from "@/components/LangLink";
import { Reveal } from "@/components/motion/Reveal";
import { VerticalVideo } from "@/components/VerticalVideo";
import {
  casePath,
  homePath,
  type SiteContent,
} from "@/content";

type CaseItem = SiteContent["cases"]["items"][number];

export function CaseStudyPage({
  content,
  item,
}: {
  content: SiteContent;
  item: CaseItem;
}) {
  const { locale, nav, cases, footer, contact } = content;
  const otherLocale = locale === "en" ? "fr" : "en";
  const otherHref = casePath(otherLocale, item.slug);
  const home = homePath(locale);

  return (
    <>
      <DocumentLang locale={locale} />

      <header className="nav">
        <div className="nav__inner">
          <Link href={home}>
            <Image
              className="nav__logo"
              src="/assets/logo-white.png"
              alt="BODDHI RRP"
              width={160}
              height={40}
              priority
            />
          </Link>
          <nav className="nav__links" aria-label={nav.aria}>
            <Link href={`${home}#cases`}>{nav.links[0]?.label}</Link>
            <Link href={`${home}#what`}>{nav.links[1]?.label}</Link>
            <Link href={`${home}#science`}>{nav.links[2]?.label}</Link>
            <Link href={`${home}#services`}>{nav.links[3]?.label}</Link>
            <Link href={`${home}#about`}>{nav.links[4]?.label}</Link>
          </nav>
          <div className="nav__right">
            <div className="lang-switch" aria-label={nav.langAria}>
              {locale === "en" ? (
                <>
                  <span className="lang-switch__current">EN</span>
                  <span className="lang-switch__sep">|</span>
                  <LangLink locale={locale} href={otherHref}>
                    FR
                  </LangLink>
                </>
              ) : (
                <>
                  <LangLink locale={locale} href={otherHref}>
                    EN
                  </LangLink>
                  <span className="lang-switch__sep">|</span>
                  <span className="lang-switch__current">FR</span>
                </>
              )}
            </div>
            <Link className="btn btn--accent btn--sm" href={`${home}#contact`}>
              {nav.cta}
            </Link>
          </div>
        </div>
      </header>

      <main className="case-detail">
        <div className="case-detail__inner">
          <Reveal>
            <Link href={`${home}#cases`} className="case-detail__back">
              <ArrowLeft size={16} weight="bold" /> {cases.backLabel}
            </Link>
          </Reveal>

          <Reveal>
            <div className="case-detail__hero">
              <Image
                src={item.photo}
                alt={item.name}
                width={200}
                height={200}
                className="case-detail__photo"
              />
              <div>
                <span className="badge badge--orange-soft">{cases.badge}</span>
                <h1>{item.name}</h1>
                <p className="case-detail__team">{item.team}</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="case-detail__highlight">
              <div>
                <span className="case-detail__label">{item.beforeLabel}</span>
                <p className="case-detail__before">{item.before}</p>
              </div>
              <div className="case-detail__highlight-result">
                <span className="case-detail__label">{item.rtpLabel}</span>
                <p className="case-detail__rtp">{item.rtp}</p>
                <p className="case-detail__result">{item.result}</p>
              </div>
            </div>
          </Reveal>

          {item.video ? (
            <Reveal>
              <VerticalVideo
                src={item.video}
                poster={item.photo}
                label={item.videoLabel}
                name={item.name}
                className="case-detail__reel"
              />
            </Reveal>
          ) : null}

          <Reveal>
            <article className="case-card case-card--detail">
              <dl className="case-card__rows">
                {item.rows.map((row) => (
                  <div className="case-card__row" key={row.label}>
                    <dt>{row.label}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="case-card__medal">
                <div className="case-card__medal-head">
                  <Medal size={20} weight="fill" color="var(--orange-400)" />
                  <span>{item.medal}</span>
                </div>
                <p>{item.medalBody}</p>
              </div>
            </article>
          </Reveal>

          <Reveal>
            <p className="cases__footnote">{cases.footnote}</p>
            <div className="case-detail__cta">
              <Link className="btn btn--accent btn--lg" href={`${home}#contact`}>
                {contact.title}
              </Link>
            </div>
          </Reveal>
        </div>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <Image
            className="footer__logo"
            src="/assets/logo-white.png"
            alt="BODDHI RRP"
            width={120}
            height={30}
          />
          <LangLink locale={locale} href={otherHref} className="footer__lang">
            {nav.footerLangLabel}
          </LangLink>
          <span className="footer__copy">{footer.copy}</span>
        </div>
      </footer>
    </>
  );
}
