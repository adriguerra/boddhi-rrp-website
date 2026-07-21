/**
 * Documentary case study — media paths are relative to /public.
 * Drop files into public/case-studies/{id}/ and point fields here.
 */
export interface CaseStudy {
  id: string;
  athlete: string;
  team: string;
  injury: string;
  /** What they were told (e.g. "12 weeks", "Season over") */
  prognosis: string;
  /** Actual return (e.g. "7 days", "8 days") */
  returnToPlay: string;
  /** Headline outcome (e.g. "Danish Cup Winner", "Bronze Medal") */
  outcome: string;
  /** Optional icon beside outcome */
  outcomeIcon?: "medal" | "trophy";
  /** Full-bleed hero background video */
  heroVideo?: string;
  /**
   * Still slideshow for the hero panel (crossfades while this case is active).
   * Prefer this over a single action/celebration still when provided.
   */
  heroImages?: string[];
  testimonialVideo?: string;
  actionImage?: string;
  celebrationImage?: string;
  treatmentVideo?: string;
  treatmentImage?: string;
  /**
   * CSS object-position for the hero still (e.g. "50% 18%").
   * Anchors the face inside the right-side photo frame.
   */
  focalPoint?: string;
}

/** Static chrome that never changes while case studies rotate */
export interface HeroChrome {
  headline: string;
  subheadline?: string;
  brand?: string;
  audience?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}
