import type { ReactNode } from "react";
import { MarkedText } from "@/components/MarkedText";
import type { HeroChrome } from "@/types/CaseStudy";

type HeroOverlayProps = {
  chrome: HeroChrome;
  /** `chrome` = brand claim; `athlete` = case result */
  mode: "chrome" | "athlete";
  /** Athlete result block — same left focus zone as chrome */
  children: ReactNode;
  /** Case dots / secondary controls */
  controls?: ReactNode;
  className?: string;
};

/**
 * One text focus at a time: brand chrome or athlete proof.
 */
export function HeroOverlay({
  chrome,
  mode,
  children,
  controls,
  className,
}: HeroOverlayProps) {
  const showChrome = mode === "chrome";

  return (
    <div className={className}>
      <div
        className="case-hero__chrome case-hero__focus"
        data-visible={showChrome ? "true" : "false"}
        aria-hidden={!showChrome}
      >
        {chrome.brand || chrome.audience ? (
          <div className="case-hero__brand-block">
            {chrome.brand ? (
              <MarkedText
                as="p"
                className="case-hero__brand"
                text={chrome.brand}
              />
            ) : null}
            {chrome.audience ? (
              <p className="case-hero__audience">{chrome.audience}</p>
            ) : null}
          </div>
        ) : null}
        <h1 className="case-hero__headline">{chrome.headline}</h1>
        {chrome.subheadline ? (
          <p className="case-hero__subheadline">{chrome.subheadline}</p>
        ) : null}
        {chrome.primaryCta ? (
          <a
            className="btn btn--ghost btn--lg case-hero__cta"
            href={chrome.primaryCta.href}
            tabIndex={showChrome ? 0 : -1}
          >
            {chrome.primaryCta.label}
          </a>
        ) : null}
      </div>

      <div
        className="case-hero__athlete-focus case-hero__focus"
        data-visible={showChrome ? "false" : "true"}
        aria-hidden={showChrome}
      >
        {children}
      </div>

      {controls ? (
        <div className="case-hero__right">{controls}</div>
      ) : null}
    </div>
  );
}
