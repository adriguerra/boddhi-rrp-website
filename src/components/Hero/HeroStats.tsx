import { Medal, Trophy } from "@phosphor-icons/react/dist/ssr";
import type { CaseStudy } from "@/types/CaseStudy";

type HeroStatsProps = {
  caseStudy: CaseStudy;
  className?: string;
};

/**
 * Claim-slot layout: smaller struck prognosis stacked above
 * teal arrow + punchline return; outcome under with medal/trophy.
 */
export function HeroStats({ caseStudy, className }: HeroStatsProps) {
  const Icon =
    caseStudy.outcomeIcon === "trophy"
      ? Trophy
      : caseStudy.outcomeIcon === "medal"
        ? Medal
        : null;

  return (
    <div className={className}>
      <p className="case-hero__arc case-hero__arc--claim">
        <span className="case-hero__prognosis">{caseStudy.prognosis}</span>
        <span className="case-hero__rtp-row">
          <span className="case-hero__arc-arrow" aria-hidden>
            →
          </span>
          <span className="case-hero__rtp">{caseStudy.returnToPlay}</span>
        </span>
      </p>
      <p
        className={[
          "case-hero__outcome",
          caseStudy.outcomeIcon
            ? `case-hero__outcome--${caseStudy.outcomeIcon}`
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {Icon ? (
          <Icon
            className="case-hero__outcome-icon"
            size={24}
            weight="fill"
            aria-hidden
          />
        ) : null}
        <span>{caseStudy.outcome}</span>
      </p>
    </div>
  );
}
