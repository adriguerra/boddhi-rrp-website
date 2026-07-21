import type { SiteContent } from "./types";

export const en: SiteContent = {
  locale: "en",
  meta: {
    title: "BODDHI RRP® — Rapid Repair Protocol",
    description:
      "When weeks become days. Documented tissue repair for elite athletes. Boddhi Clinic, Geneva.",
  },
  nav: {
    aria: "Main navigation",
    links: [
      { href: "#cases", label: "Results" },
      { href: "#about", label: "About" },
      { href: "#services", label: "Access" },
    ],
    cta: "Talk to Us",
    langAria: "Language",
    otherLangLabel: "FR",
    otherLangHref: "/fr",
    footerLangLabel: "Version française",
  },
  hero: {
    eyebrow: "Repair-State Medicine",
    location: "Boddhi Clinic · Geneva",
    title: "Beat the prognosis.",
    titleAccent: "Return ahead of the odds.",
    sub: "Intensive tissue repair in the critical window — before rehab, before return to play.",
    subStrong: "Repair first.",
    ctaPrimary: "Talk to Us",
    ctaSecondary: "See the Results",
    photoAlt: "Athlete in motion",
    statLabelBefore: "Up to ",
    statLabelEm: "90% faster",
    statLabelAfter: " return to play.",
    quote1: "8–12 weeks of rehab → 7 days.",
    quote2: "That's what we do.",
    banner1: "Facing weeks on the sideline? Talk to us first.",
    banner2: "Documented outcomes. Independently confirmed.",
  },
  what: {
    badge: "The Protocol",
    title: "How it works.",
    photoCaption: "Precision Repair Acupuncture",
    phases: [
      {
        num: "1",
        title: "Optimal Repair State",
        body: "Prime the body before intervention.",
      },
      {
        num: "2",
        title: "Repair Signal",
        body: "Precision Repair Acupuncture — intensive, consecutive days.",
      },
      {
        num: "3",
        title: "Repair Lock",
        body: "Protect the new tissue until it holds.",
      },
    ],
  },
  science: {
    eyebrow: "The Science",
    title: "Why we don't wait.",
    windowLine: "The critical window RRP® targets directly.",
    against: {
      label: "The usual path",
      lines: [
        "Rest. Ice. Wait.",
        "Suppress the response. Protect the injury.",
        "Come back in 8–12 weeks.",
      ],
    },
    for: {
      label: "RRP®",
      lines: [
        "Heat, not ice.",
        "Activate repair in the critical window.",
        "Lock the tissue until it holds.",
      ],
      punch: "Nothing left to chance.",
    },
  },
  cases: {
    badge: "Results",
    title: "When weeks become days.",
    subtitle: "",
    readMore: "Read the story",
    backLabel: "Back to home",
    items: [
      {
        slug: "kaleigh-quennec",
        name: "Kaleigh Quennec",
        team: "Swiss Olympic Ice Hockey Team",
        photo: "/assets/kaleigh-quennec.jpg",
        injury: "Grade 3 MCL complete distal tear",
        beforeLabel: "Told",
        before: "Surgery. Season over.",
        video: "/assets/videos/kaleigh-en.mp4",
        videoPoster: "/assets/videos/kaleigh-poster.jpg",
        videoLabel: "Watch",
        storyLabel: "Success story",
        rows: [
          {
            label: "Injury",
            value: "Grade 3 MCL — complete distal tear, left knee",
          },
          {
            label: "Recommendation",
            value: "Surgical intervention. No return to play this season.",
          },
          {
            label: "Context",
            value:
              "Injury occurred 2 weeks before the Milan 2026 Winter Olympics.",
          },
          {
            label: "Intervention",
            value:
              "5 treatments over 7 days. Full RRP® — Optimal Repair State + Precision Repair Acupuncture.",
          },
        ],
        resultLabel: "Result",
        result: "Complete repair",
        rtpLabel: "Return to play",
        rtp: "8 days",
        medal: "Bronze Medal — Milan 2026 Winter Olympics",
        medalBody:
          "From complete MCL tear and surgical recommendation to Olympic Bronze Medal in under two weeks.",
      },
      {
        slug: "kevin-mbabu",
        name: "Kevin Mbabu",
        team: "FC Midtjylland, Danish Superliga",
        photo: "/assets/kevin-mbabu.jpg",
        injury: "Grade 2b rectus femoris tear",
        beforeLabel: "Told",
        before: "Minimum 12 weeks out.",
        storyLabel: "Success story",
        rows: [
          {
            label: "Injury",
            value:
              "Grade 2b rectus femoris tear — 11cm, 60% cross-sectional rupture, 2.1cm retraction.",
          },
          {
            label: "Prognosis",
            value: "Minimum 12 weeks return-to-play.",
          },
          {
            label: "Intervention",
            value:
              "3 treatments over 4 days. Full RRP® — Optimal Repair State + Precision Repair Acupuncture.",
          },
          {
            label: "Season",
            value: "Finished the full professional season.",
          },
        ],
        resultLabel: "Result",
        result: "Complete remission",
        rtpLabel: "Return to play",
        rtp: "7 days",
        medal: "Danish Cup Winner",
        medalBody:
          "From a 12-week prognosis to full return-to-play in 7 days. From diagnosis to Danish Cup winner.",
      },
    ],
    footnote: "MRI and medical letters on request — clinic@boddhiclinic.com",
  },
  services: {
    eyebrow: "Access",
    title: "Choose how we start.",
    callout: "8–12 weeks out? We've done 7 days.",
    calloutStrong: "",
    items: [
      {
        title: "Elite Deployment",
        choice: "We come to you",
        lead: "Acute injury on the road. Our team on site inside 72 hours.",
        cta: "Request deployment",
        photos: [
          {
            src: "/assets/clinic/stadium.jpg",
            alt: "Elite stadium and training ground",
          },
        ],
      },
      {
        title: "On-Site Treatment",
        choice: "You come to Geneva",
        lead: "Full RRP® at Boddhi Clinic — for post-surgical, chronic, and high performers.",
        cta: "Book Geneva",
        photos: [
          {
            src: "/assets/clinic/treatment-room.jpg",
            alt: "Treatment room at Boddhi Clinic",
          },
        ],
      },
    ],
  },
  about: {
    badge: "About",
    name: "Lucy Dean",
    role: "Founder, Repair-State Medicine™",
    story: "Not ",
    storyEm: "Lucy treats athletes.",
    storyMid: " Lucy spent ",
    storyStrong: "thirty years",
    storyEnd: " studying how tissue repairs — and built RRP® from what she found.",
    quote: "This protocol required decades. ",
    quoteStrong: "Not five or ten years of practice.",
    location: "Based at Boddhi Clinic, Geneva",
    teamTitle: "The RRP team",
    teamText: "Lucy Dean created the protocol. Around her, four specialists. ",
    teamStrong: "One standard: clinical rigour for the athlete.",
    team: [
      {
        name: "Nicolas Charlet",
        role: "Acupuncture & Manual Therapy",
        photo: "/assets/team/nicolas-charlet.jpg",
      },
      {
        name: "Doshan Gurung",
        role: "Nepali Massage Therapy",
        photo: "/assets/team/doshan-gurung.jpg",
      },
      {
        name: "Alex Ginsburg",
        role: "Gut & Hormone Health",
        photo: "/assets/team/alex-ginsburg.jpg",
      },
      {
        name: "Claire Bostock-Tang",
        role: "Holistic Health Coach",
        photo: "/assets/team/claire-bostock-tang.jpg",
      },
    ],
  },
  contact: {
    title: "Talk to Us",
    tagline: "The biology doesn't wait.",
    cta: "Email us",
    email: "clinic@boddhiclinic.com",
    location: "Boddhi Clinic, Geneva",
  },
  footer: {
    copy: "© 2026 Boddhi Clinic, Geneva · Repair-State Medicine · All rights reserved",
  },
};
