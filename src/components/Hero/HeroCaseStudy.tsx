import type { CaseStudy } from "@/types/CaseStudy";
import { HeroStats } from "./HeroStats";

type HeroCaseStudyProps = {
  caseStudy: CaseStudy;
  className?: string;
};

/**
 * Athlete proof split:
 * - large result arc + outcome (primary focus)
 * - name anchored bottom-right
 */
export function HeroCaseStudy({ caseStudy, className }: HeroCaseStudyProps) {
  return (
    <div className={className}>
      <div className="case-hero__proof">
        <HeroStats caseStudy={caseStudy} className="case-hero__stats" />
      </div>
      <h2 className="case-hero__athlete">{caseStudy.athlete}</h2>
    </div>
  );
}
