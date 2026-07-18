import type { CaseStudy } from "@/types/CaseStudy";
import { HeroStats } from "./HeroStats";

type HeroCaseStudyProps = {
  caseStudy: CaseStudy;
  className?: string;
};

/** Hero keeps copy minimal: name + arc + outcome. */
export function HeroCaseStudy({ caseStudy, className }: HeroCaseStudyProps) {
  return (
    <div className={className}>
      <p className="case-hero__athlete">{caseStudy.athlete}</p>
      <HeroStats caseStudy={caseStudy} className="case-hero__stats" />
    </div>
  );
}
