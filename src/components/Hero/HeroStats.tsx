import { Medal, Trophy } from "@phosphor-icons/react/dist/ssr";
import type { CaseStudy } from "@/types/CaseStudy";

type HeroStatsProps = {
  caseStudy: CaseStudy;
  className?: string;
};

export function HeroStats({ caseStudy, className }: HeroStatsProps) {
  const Icon =
    caseStudy.outcomeIcon === "trophy"
      ? Trophy
      : caseStudy.outcomeIcon === "medal"
        ? Medal
        : null;

  return (
    <div className={className}>
      <p className="case-hero__arc">
        <span className="case-hero__prognosis">{caseStudy.prognosis}</span>
        <span className="case-hero__arc-sep" aria-hidden>
          →
        </span>
        <span className="case-hero__rtp">{caseStudy.returnToPlay}</span>
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
            size={22}
            weight="fill"
            aria-hidden
          />
        ) : null}
        <span>{caseStudy.outcome}</span>
      </p>
    </div>
  );
}
