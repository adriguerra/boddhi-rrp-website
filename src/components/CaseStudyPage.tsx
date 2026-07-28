import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { DocumentLang } from "@/components/DocumentLang";
import { LangLink } from "@/components/LangLink";
import { NavShell } from "@/components/NavShell";
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
  const otherHref = casePath(locale === "en" ? "fr" : "en", item.slug);
  const home = homePath(locale);

  return (
    <>
      <DocumentLang locale={locale} />

      <NavShell
        menuLabelOpen={nav.menuOpen}
        menuLabelClose={nav.menuClose}
        mobilePanel={
          <>
            <nav className="nav__drawer-links" aria-label={nav.aria}>
              {nav.links.map((link) => (
                <Link key={link.href} href={`${home}${link.href}`}>
                  {link.label}
                </Link>
              ))}
            </nav>
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
            <Link className="btn btn--accent btn--md" href={`${home}#contact`}>
              {nav.cta}
            </Link>
          </>
        }
      >
        <div className="nav__inner">
          <Link href={home} className="nav__brand">
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
            {nav.links.map((link) => (
              <Link key={link.href} href={`${home}${link.href}`}>
                {link.label}
              </Link>
            ))}
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
      </NavShell>

      <main className="case-detail">
        <div className="case-detail__inner">
          <Reveal>
            <Link href={`${home}#cases`} className="case-detail__back">
              <ArrowLeft size={16} weight="bold" /> {cases.backLabel}
            </Link>
          </Reveal>

          <Reveal>
            <header className="case-detail__hero">
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
            </header>
          </Reveal>

          {item.video ? (
            <Reveal>
              <VerticalVideo
                src={item.video}
                poster={item.videoPoster ?? item.photo}
                label={item.videoLabel}
                name={item.name}
                className="case-detail__reel"
              />
            </Reveal>
          ) : null}

          <Reveal>
            <p className="case-detail__told">
              <span className="case-detail__label">{item.beforeLabel}</span>
              <span className="case-detail__before">{item.before}</span>
            </p>
          </Reveal>

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
            </article>
          </Reveal>

          <Reveal>
            <p className="case-detail__narrative">{item.medalBody}</p>
          </Reveal>

          <Reveal>
            <p className="cases__footnote">{cases.footnote}</p>
            <div className="case-detail__cta">
              <Link className="btn btn--accent btn--lg" href={`${home}#contact`}>
                {contact.cta}
              </Link>
            </div>
          </Reveal>
        </div>
      </main>

      <footer className="footer footer--simple">
        <div className="footer__bottom">
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
