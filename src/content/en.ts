import type { SiteContent } from "./types";

export const en: SiteContent = {
  locale: "en",
  meta: {
    title: "BODDHI RRP® — Rapid Repair Protocol",
    description:
      "Targeted tissue repair for accelerated return to play. Repair-State Medicine by Boddhi Clinic, Geneva.",
  },
  nav: {
    aria: "Main navigation",
    links: [
      { href: "#cases", label: "Case Studies" },
      { href: "#what", label: "Protocol" },
      { href: "#science", label: "Science" },
      { href: "#services", label: "Services" },
      { href: "#about", label: "About" },
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
    title: "Targeted Tissue Repair.",
    titleAccent: "Accelerated Return to Play.",
    sub: "Intensive. Immersive. Delivered within the critical biological window. Before rehabilitation. Before return to play.",
    subStrong: "Repair first.",
    ctaPrimary: "Talk to Us",
    ctaSecondary: "See the Results",
    photoAlt: "Athlete in motion",
    statLabelBefore: "Up to ",
    statLabelEm: "90% reduction",
    statLabelAfter: " in return-to-play time.",
    quote1: "When 8–12 weeks of rehabilitation becomes 7 days.",
    quote2: "That's what we do.",
    banner1: "Facing 8–12 weeks on the sideline? Talk to us first.",
    banner2:
      "We can't guarantee the same result every time. But the evidence speaks for itself.",
  },
  what: {
    badge: "What is RRP®?",
    title: "A new category: ",
    titleAccent: "Repair-State Medicine.",
    lead: "Targeted tissue repair for accelerated return to play. ",
    leadStrong: "Not physiotherapy. Not acupuncture.",
    leadDisplay:
      "Intensive, immersive, and time-critical — consecutive daily sessions over 3–7 days, with complete athlete compliance.",
    repairOverline: "What We Repair",
    repairBody:
      "Soft tissue injury — across the full severity spectrum. Ligament, muscle, and tendon injuries, from acute sprains to Grade 3 complete tears.",
    quote1: "When RRP® is complete, we hand the athlete back. ",
    quote1Accent: "Fixed.",
    quote2:
      "The physio and performance team take over — with a repaired athlete. Not one still waiting to heal.",
    photoCaption: "Precision Repair Acupuncture",
    phasesHead: "The Three Phases",
    phases: [
      {
        num: "01",
        title: "Create the Optimal Repair State",
        body: "The body is primed for repair before intervention begins.",
        bullets: [
          "Gut & nutritional optimization",
          "Sleep & circadian regulation",
          "Parasympathetic activation",
          "Vagus nerve intervention",
          "Blood-flow enhancement",
        ],
      },
      {
        num: "02",
        title: "Deliver the Repair Signal",
        body: "Precision Repair Acupuncture (PRA) — tissue-specific, thermally activated, neuro-integrated. Delivered intensively over consecutive days.",
      },
      {
        num: "03",
        title: "Strategic Repair Lock",
        body: "Repair initiated. Now locked in. Strategic immobilization and controlled loading protect the biology until it holds.",
      },
    ],
    keyOverline: "Key Message",
    keyBody:
      "RRP® does not replace surgery. In clear surgical cases, operate. But in borderline cases, RRP® has made the difference. ",
    keyAccent:
      "Kaleigh Quennec was advised surgery. Eight days later she competed at the Milan 2026 Winter Olympics — without it.",
    keyCta: "If you're facing a surgical decision — talk to us first.",
  },
  science: {
    eyebrow: "The Science",
    title: "Two principles.\nEverything else follows.",
    principles: [
      {
        label: "Principle One",
        title: "Vascular Activation & Immune Modulation",
        paragraphs: [
          "Repair depends on biological resources delivered through the vascular system — immune cells, growth factors, oxygen, nutrients. Without optimal delivery, it fails before it begins.",
          "RRP® maximizes tissue perfusion, vasodilation, and immune-cell recruitment at every stage. Heat, not ice. Activation, not suppression.",
        ],
      },
      {
        label: "Principle Two",
        title: "Strategic Repair Lock",
        paragraphs: [
          "Newly formed tissue is vulnerable. RRP® locks repair in — strategic immobilization, controlled loading, biological support until the structure holds.",
        ],
        punch: "Precise. Deliberate. Nothing left to chance.",
      },
    ],
    windowLabel: "Critical Window",
    windowTitle: "The First 72 Hours",
    windowBody:
      "Within minutes of injury, vascular changes occur, cytokine signalling begins, immune cells mobilize. The first 72 hours are not a waiting period. ",
    windowStrong: "They are a window. RRP® targets it directly.",
  },
  cases: {
    badge: "Results",
    title: "When weeks become days.",
    subtitle:
      "Documented outcomes. Independently confirmed by MRI and sports physicians.",
    readMore: "View full case study",
    backLabel: "Back to home",
    items: [
      {
        slug: "kaleigh-quennec",
        name: "Kaleigh Quennec",
        team: "Swiss Olympic Ice Hockey Team",
        photo: "/assets/kaleigh-quennec.jpg",
        injury: "Grade 3 MCL — complete distal tear",
        beforeLabel: "Told",
        before: "Surgery. Season over.",
        video: "/assets/videos/kaleigh-en.mp4",
        videoLabel: "Success story",
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
        injury: "Grade 2b rectus femoris tear — 11cm",
        beforeLabel: "Told",
        before: "Minimum 12 weeks out.",
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
        medal: "FC Midtjylland — Danish Cup Winners",
        medalBody:
          "From a 12-week prognosis to full return-to-play in 7 days. From diagnosis to Danish Cup winner.",
      },
    ],
    footnote:
      "MRI images and medical confirmation letters available on request — clinic@boddhiclinic.com",
  },
  services: {
    eyebrow: "Services",
    title: "Three Points of Access",
    intro:
      "One methodology. Three points of access. One objective: optimize tissue repair to restore performance.",
    callout:
      "Facing 8–12 weeks on the sideline? We've delivered the same result in 7 days. ",
    calloutStrong: "Call us before the window closes.",
    items: [
      {
        num: "01",
        title: "Elite Deployment",
        lead: "The RRP® team comes to the athlete. On-site. Within the critical 72-hour repair window.",
        blocks: [
          {
            title: "Single-Athlete Acute Deployment",
            body: "Acute injury. Critical window. Maximum urgency. Single athlete, acute non-surgical injury — triggered within the critical repair window.",
          },
          {
            title: "Club Residency — Five-Day On-Site",
            body: "Five days on-site, multiple athletes, three treatment tracks: acute injury, chronic injury, and performance priming. Includes pre-deployment assessment, daily treatment, handover documentation, return-to-play timeline, and ongoing remote support.",
          },
        ],
      },
      {
        num: "02",
        title: "Boddhi Clinic — Geneva",
        lead: "For the elite athlete who comes to us.",
        blocks: [
          {
            title: "Full immersion in Geneva",
            body: "The complete protocol delivered on-site in a dedicated clinical environment — full focus, zero distraction.",
          },
          {
            title: "Also available for",
            body: "Post-surgical referrals (optimize repair before rehabilitation), chronic injury where conventional rehabilitation has plateaued, and high-performance individuals outside professional sport seeking the same standard of care.",
          },
        ],
      },
      {
        num: "03",
        title: "RRP® Practitioner Training",
        lead: "Not a short course. A structured pathway for advanced clinicians with demonstrated experience.",
        blocks: [
          {
            title: "Open to",
            body: "Advanced acupuncturists, physiotherapists, sports medicine physicians, and sports surgeons.",
          },
          {
            title: "Three certification levels",
            body: "RRP® Practitioner (foundational) · RRP® Advanced Practitioner (full PRA, thermal stimulation, neuro-acupuncture, complex case management) · RRP® Instructor (licensed to train others). Advanced Practitioners are eligible to join Club Residency deployments.",
          },
        ],
      },
    ],
  },
  about: {
    badge: "About",
    name: "Lucy Dean",
    role: "Creator of the RRP®",
    story: "The story is not ",
    storyEm: "Lucy treats athletes.",
    storyMid: " The story is: Lucy spent ",
    storyStrong: "thirty years",
    storyEnd:
      " studying how the body repairs tissue — and built a methodology from what she found.",
    quote:
      "These credentials are not a marketing asset. They are the reason the protocol exists. RRP® could not have been built by a practitioner with five or ten years of experience. ",
    quoteStrong: "It required decades.",
    location: "Based at Boddhi Clinic, Geneva",
    creds: [
      {
        value: "50,000",
        unit: "Clinical hours",
        body: "30 years of uninterrupted practice.",
      },
      {
        value: "15 yrs",
        unit: "Advanced education",
        body: "Not CPD — advanced professional training across multiple disciplines.",
      },
      {
        value: "12 yrs",
        unit: "In China",
        body: "7 years intensive clinical & academic training. 5 years formal hospital internship alongside leading Chinese physicians. Mandarin-fluent.",
      },
      {
        value: "1 of 3",
        unit: "Neuro-acupuncture clinics in Europe",
        body: "Among a very small number of practitioners in Europe offering this specialisation.",
      },
    ],
    teamTitle: "The RRP team",
    teamText:
      "Repair is a whole-body event. Around Lucy, four practitioners each bring their own discipline: acupuncture, therapeutic massage, gut and hormone support, holistic coaching. ",
    teamStrong:
      "Complementary expertise, one standard: clinical rigour, in complete service of the athlete.",
    team: [
      {
        name: "Nicolas Charlet",
        role: "Acupuncture & Chinese Manual Therapies",
        photo: "/assets/team/nicolas-charlet.jpg",
      },
      {
        name: "Doshan Gurung",
        role: "Classical Nepali Massage",
        photo: "/assets/team/doshan-gurung.jpg",
      },
      {
        name: "Alex Ginsburg",
        role: "Gut, Liver & Hormone Support",
        photo: "/assets/team/alex-ginsburg.jpg",
      },
      {
        name: "Claire Bostock-Tang",
        role: "Holistic Health Coach & Singing Bowl Therapy",
        photo: "/assets/team/claire-bostock-tang.jpg",
      },
    ],
  },
  contact: {
    title: "Talk to Us",
    tagline: "The biology doesn't wait. Neither should you.",
    primary: "Contact for Elite Deployment",
    residency: "Enquire about Club Residency",
    training: "Enquire about Practitioner Training",
    email: "clinic@boddhiclinic.com",
    location: "Boddhi Clinic, Geneva",
    toast: "Enquiry sent — we'll be in touch",
  },
  footer: {
    copy: "© 2026 Boddhi Clinic, Geneva · Repair-State Medicine · All rights reserved",
  },
};
