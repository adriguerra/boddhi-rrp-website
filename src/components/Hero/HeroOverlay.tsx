import type { ReactNode } from "react";
import type { HeroChrome } from "@/types/CaseStudy";

type HeroOverlayProps = {
  chrome: HeroChrome;
  /** Rotating athlete block — bottom right */
  children: ReactNode;
  className?: string;
};

/**
 * Centered chrome (headline + brand).
 * Case study content (`children`) sits bottom-right.
 */
export function HeroOverlay({ chrome, children, className }: HeroOverlayProps) {
  return (
    <div className={className}>
      <div className="case-hero__chrome">
        <h1 className="case-hero__headline">{chrome.headline}</h1>
        <p className="case-hero__brand">{chrome.brand}</p>
      </div>

      <div className="case-hero__right">{children}</div>
    </div>
  );
}
