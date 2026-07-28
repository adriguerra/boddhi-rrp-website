import type { SiteContent } from "./types";

export const en: SiteContent = {
  locale: "en",
  meta: {
    title: "BODDHI RRP® — Rapid Repair Protocol",
    description:
      "Beat the prognosis. Accelerate return to play. Documented tissue repair for elite athletes. Boddhi Clinic, Geneva.",
  },
  nav: {
    aria: "Main navigation",
    links: [
      { href: "#protocol", label: "The Protocol" },
      { href: "#cases", label: "Impact" },
      { href: "#delivery", label: "Delivery" },
      { href: "#about", label: "Our Team" },
    ],
    cta: "Book Now",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    langAria: "Language",
    otherLangLabel: "FR",
    otherLangHref: "/fr",
    footerLangLabel: "Version française",
  },
  hero: {
    eyebrow: "Immersive, intensive, holistic tissue repair protocol",
    title: "Beat the prognosis, **accelerate return to play**",
    sub: "RRP® is a game-changing methodology to rapidly repair injured tissue. We treat acute sports injuries: ligament, muscle and tendon tears repaired without surgery in days, not months.",
    ctaPrimary: "Talk to us",
    photoAlt: "Ice hockey players competing",
    proofLead: "From season-unrecoverable injury to Olympic qualification.",
    proof: "Together, we beat the prognosis by **90%**.",
    proofCta: "Discover the cases",
  },
  protocol: {
    title: "Optimise tissue repair to restore performance.",
    cta: "Get Started Now",
    phases: [
      {
        num: "01",
        title: "Prepare the body",
        bullets: [
          "Prime the Optimal Repair State",
          "Reduce inflammation without ice",
          "Ready tissue for signal",
        ],
      },
      {
        num: "02",
        title: "Targeted Tissue Repair",
        bullets: [
          "Precision Repair Acupuncture",
          "Intensive consecutive sessions",
          "Activate repair in the critical window",
        ],
      },
      {
        num: "03",
        title: "Build on a solid foundation",
        bullets: [
          "Lock the new tissue until it holds",
          "Protect the repair window",
          "Return with confidence",
        ],
      },
    ],
  },
  cases: {
    badge: "Impact",
    title: "Together we beat the prognosis by **90%**",
    subtitle: "",
    readMore: "See their story",
    backLabel: "Back to home",
    closeLabel: "Close",
    items: [
      {
        slug: "kaleigh-quennec",
        name: "Kaleigh Quennec",
        team: "Swiss Olympic Ice Hockey Team",
        role: "Forward",
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
        meta: [
          { label: "Team", value: "Swiss Olympic Ice Hockey" },
          { label: "Role", value: "Forward" },
          { label: "Injury Type", value: "Grade 3 MCL tear" },
          { label: "Return to Play", value: "8 days" },
        ],
        percent: "90%",
        percentLabel: "Faster than prognosis",
        resultLabel: "Result",
        result: "Complete repair",
        rtpLabel: "Return to play",
        rtp: "8 days",
        medal: "Bronze Medal — Milan 2026 Winter Olympics",
        medalBody:
          "From complete MCL tear and surgical recommendation to Olympic Bronze Medal in under two weeks.",
        modal: {
          sections: [
            {
              title: "The injury",
              body: "Grade 3 MCL — complete distal tear of the left knee. Surgical recommendation. No return to play this season. Injury occurred two weeks before the Milan 2026 Winter Olympics.",
            },
            {
              title: "The intervention",
              body: "Kaleigh completed five intensive RRP® treatments over seven days, combining Optimal Repair State preparation with Precision Repair Acupuncture.",
            },
            {
              title: "The outcome",
              body: "Complete repair and return to play in 8 days — then Olympic Bronze at Milan 2026.",
            },
          ],
          gallery: [
            {
              src: "/case-studies/kaleigh/treatment.jpg",
              alt: "RRP treatment session",
            },
            {
              src: "/assets/acupuncture.png",
              alt: "Precision Repair Acupuncture",
            },
            {
              src: "/case-studies/kaleigh/action.jpg",
              alt: "Athlete in action",
            },
            {
              src: "/case-studies/kaleigh/slide-team.jpg",
              alt: "Swiss Olympic ice hockey team",
            },
          ],
        },
      },
      {
        slug: "kevin-mbabu",
        name: "Kevin Mbabu",
        team: "FC Midtjylland, Danish Superliga",
        role: "Defender",
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
        meta: [
          { label: "Team", value: "FC Midtjylland" },
          { label: "Role", value: "Defender" },
          { label: "Injury Type", value: "Grade 2b muscle tear" },
          { label: "Return to Play", value: "7 days" },
        ],
        percent: "90%",
        percentLabel: "Faster than prognosis",
        resultLabel: "Result",
        result: "Complete remission",
        rtpLabel: "Return to play",
        rtp: "7 days",
        medal: "Danish Cup Winner",
        medalBody:
          "From a 12-week prognosis to full return-to-play in 7 days. From diagnosis to Danish Cup winner.",
        modal: {
          sections: [
            {
              title: "The injury",
              body: "Grade IIb rectus femoris tear, with significant fibre rupture and retraction. Initial prognosis: a minimum of 12 weeks before return to play.",
            },
            {
              title: "The intervention",
              body: "Kevin completed three intensive RRP® treatments over four days, combining Optimal Repair State preparation with Precision Repair Acupuncture.",
            },
            {
              title: "The outcome",
              body: "Full return to play in 7 days, followed by completion of the professional season and a Danish Cup win.",
            },
          ],
          gallery: [
            {
              src: "/case-studies/kevin/treatment.jpg",
              alt: "RRP treatment — cupping therapy",
            },
            {
              src: "/assets/acupuncture.png",
              alt: "Precision Repair Acupuncture needles",
            },
            {
              src: "/case-studies/kevin/action.jpg",
              alt: "Treatment detail",
            },
            {
              src: "/case-studies/kevin/slide-2.png",
              alt: "Kevin Mbabu celebration",
            },
          ],
        },
      },
    ],
    footnote: "MRI and medical letters on request — clinic@boddhiclinic.com",
  },
  delivery: {
    eyebrow: "RRP Delivery",
    title: "RRP delivered in a dedicated, private environment",
    subtitle:
      "First-class care — wherever the injury happens, or at our Geneva clinic.",
    items: [
      {
        num: "01",
        title: "We Come To You",
        points: [
          "Your home",
          "Your training facility",
          "Your club — full RRP® on site",
          "Team deployment inside 72 hours",
        ],
        cta: "Request deployment",
        photo: {
          src: "/assets/clinic/stadium.jpg",
          alt: "Elite training ground",
        },
      },
      {
        num: "02",
        title: "You Come To Us",
        points: [
          "Our clinic in Geneva",
          "Private treatment environment",
          "Preferred hotel partners",
          "Full RRP® for acute, post-surgical & chronic",
        ],
        cta: "Book Geneva",
        photo: {
          src: "/assets/clinic/treatment-room.jpg",
          alt: "Treatment room at Boddhi Clinic",
        },
      },
    ],
  },
  about: {
    badge: "Meet the Team",
    name: "Lucy Dean",
    role: "Creator of the RRP® · Clinical Lead",
    bio: "Lucy developed the Rapid Repair Protocol after more than a decade of elite clinical practice across China and Europe — combining neuro-acupuncture, repair-state medicine, and high-performance sport.",
    location: "Based at Boddhi Clinic, Geneva",
    creds: [
      { to: 50000, format: "comma", label: "Clinical hours" },
      { to: 15, suffix: " yrs", label: "Advanced education" },
      { to: 12, suffix: " yrs", label: "In China" },
      {
        to: 1,
        suffix: " of 3",
        label: "Neuro-acupuncture clinics in Europe",
      },
    ],
    teamTitle: "The RRP team",
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
    title: "Work with us",
    tagline: "The best way to learn is to work with us.",
    cta: "Apply Now",
    email: "clinic@boddhiclinic.com",
    location: "Boddhi Clinic, Geneva",
  },
  footer: {
    tagline: "Faster recovery for elite athletes.",
    columns: [
      {
        title: "Explore",
        links: [
          { label: "The Protocol", href: "#protocol" },
          { label: "Impact", href: "#cases" },
          { label: "Delivery", href: "#delivery" },
          { label: "Our Team", href: "#about" },
        ],
      },
      {
        title: "Get Started",
        links: [
          { label: "Book Now", href: "#contact" },
          { label: "Email us", href: "mailto:clinic@boddhiclinic.com" },
        ],
      },
      {
        title: "Information",
        links: [
          { label: "Boddhi Clinic", href: "#about" },
          { label: "Geneva", href: "#contact" },
        ],
      },
      {
        title: "Social",
        links: [
          {
            label: "Instagram",
            href: "https://www.instagram.com/boddhiclinic/",
          },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/company/boddhi-clinic/",
          },
        ],
      },
    ],
    legal: [
      { label: "Privacy Policy", href: "#contact" },
      { label: "Terms", href: "#contact" },
      { label: "Contact", href: "#contact" },
    ],
    copy: "© 2026 Boddhi Clinic, Geneva · Repair-State Medicine · All rights reserved",
  },
};
