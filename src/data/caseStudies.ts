import type { CaseStudy } from "@/types/CaseStudy";

/**
 * Add an athlete:
 * 1. public/case-studies/{id}/hero.mp4 and/or heroImages
 * 2. One object below
 *
 * No Hero component changes required.
 */
export const caseStudies: CaseStudy[] = [
  {
    id: "kaleigh",
    athlete: "Kaleigh Quennec",
    team: "Swiss Olympic Ice Hockey Team",
    injury: "Grade 3 MCL complete distal tear",
    prognosis: "Season over",
    returnToPlay: "8 days",
    outcome: "Bronze Medal · Milano 2026",
    outcomeIcon: "medal",
    heroVideo: "/case-studies/kaleigh/hero.mp4",
    heroImages: [
      "/assets/acupuncture.png",
      "/case-studies/kaleigh/slide-team.png",
    ],
    testimonialVideo: "/case-studies/kaleigh/testimonial.mp4",
    actionImage: "/case-studies/kaleigh/slide-team.png",
    celebrationImage: "/case-studies/kaleigh/slide-team.png",
    treatmentImage: "/case-studies/kaleigh/treatment.jpg",
    focalPoint: "50% 52%",
  },
  {
    id: "kevin",
    athlete: "Kevin Mbabu",
    team: "FC Midtjylland",
    injury: "Grade 2b rectus femoris tear",
    prognosis: "12 weeks",
    returnToPlay: "7 days",
    outcome: "Danish Cup Winner 2026",
    outcomeIcon: "trophy",
    heroImages: ["/case-studies/kevin/slide-2.png"],
    actionImage: "/case-studies/kevin/slide-2.png",
    celebrationImage: "/case-studies/kevin/slide-2.png",
    treatmentImage: "/case-studies/kevin/treatment.jpg",
    focalPoint: "68% 14%",
  },
];

export const caseStudiesFr: CaseStudy[] = [
  {
    id: "kaleigh",
    athlete: "Kaleigh Quennec",
    team: "Équipe olympique suisse de hockey sur glace",
    injury: "Rupture complète MCL grade 3",
    prognosis: "Saison terminée",
    returnToPlay: "8 jours",
    outcome: "Médaille de bronze · Milano 2026",
    outcomeIcon: "medal",
    heroVideo: "/case-studies/kaleigh/hero.mp4",
    heroImages: [
      "/assets/acupuncture.png",
      "/case-studies/kaleigh/slide-team.png",
    ],
    testimonialVideo: "/case-studies/kaleigh/testimonial.mp4",
    actionImage: "/case-studies/kaleigh/slide-team.png",
    celebrationImage: "/case-studies/kaleigh/slide-team.png",
    treatmentImage: "/case-studies/kaleigh/treatment.jpg",
    focalPoint: "50% 52%",
  },
  {
    id: "kevin",
    athlete: "Kevin Mbabu",
    team: "FC Midtjylland",
    injury: "Déchirure grade 2b du droit fémoral",
    prognosis: "12 semaines",
    returnToPlay: "7 jours",
    outcome: "Vainqueur Coupe du Danemark 2026",
    outcomeIcon: "trophy",
    heroImages: ["/case-studies/kevin/slide-2.png"],
    actionImage: "/case-studies/kevin/slide-2.png",
    celebrationImage: "/case-studies/kevin/slide-2.png",
    treatmentImage: "/case-studies/kevin/treatment.jpg",
    focalPoint: "68% 14%",
  },
];

export function getCaseStudies(locale: "en" | "fr"): CaseStudy[] {
  return locale === "fr" ? caseStudiesFr : caseStudies;
}
