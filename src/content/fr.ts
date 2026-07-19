import type { SiteContent } from "./types";

export const fr: SiteContent = {
  locale: "fr",
  meta: {
    title: "BODDHI RRP® — Rapid Repair Protocol",
    description:
      "Quand les semaines deviennent des jours. Réparation tissulaire documentée pour athlètes d'élite. Boddhi Clinic, Genève.",
  },
  nav: {
    aria: "Navigation principale",
    links: [
      { href: "#cases", label: "Résultats" },
      { href: "#about", label: "À propos" },
      { href: "#services", label: "Accès" },
    ],
    cta: "Parlez-nous",
    langAria: "Langue",
    otherLangLabel: "EN",
    otherLangHref: "/",
    footerLangLabel: "English version",
  },
  hero: {
    eyebrow: "Médecine de l'état réparateur",
    location: "Boddhi Clinic · Genève",
    title: "Battez le pronostic.",
    titleAccent: "Revenez avant l'impossible.",
    sub: "Réparation tissulaire intensive dans la fenêtre critique — avant la rééducation, avant le retour au jeu.",
    subStrong: "Réparer d'abord.",
    ctaPrimary: "Parlez-nous",
    ctaSecondary: "Voir les résultats",
    photoAlt: "Athlète en mouvement",
    statLabelBefore: "Jusqu'à ",
    statLabelEm: "90 % plus rapide",
    statLabelAfter: " au retour au jeu.",
    quote1: "8–12 semaines de rééducation → 7 jours.",
    quote2: "C'est ce que nous faisons.",
    banner1: "Des semaines d'arrêt annoncées ? Parlez-nous d'abord.",
    banner2: "Résultats documentés. Confirmés indépendamment.",
  },
  what: {
    badge: "Le protocole",
    title: "Comment ça marche.",
    photoCaption: "Precision Repair Acupuncture",
    phases: [
      {
        num: "1",
        title: "État de réparation optimal",
        body: "Préparer le corps avant l'intervention.",
      },
      {
        num: "2",
        title: "Signal de réparation",
        body: "Precision Repair Acupuncture — intensif, jours consécutifs.",
      },
      {
        num: "3",
        title: "Verrouillage",
        body: "Protéger le nouveau tissu jusqu'à ce qu'il tienne.",
      },
    ],
  },
  science: {
    eyebrow: "La science",
    title: "Pourquoi on n'attend pas.",
    windowLine: "La fenêtre critique que le RRP® cible directement.",
    against: {
      label: "Le chemin habituel",
      lines: [
        "Repos. Glace. Attente.",
        "Supprimer la réponse. Protéger la blessure.",
        "Revenir dans 8 à 12 semaines.",
      ],
    },
    for: {
      label: "RRP®",
      lines: [
        "La chaleur, pas la glace.",
        "Activer la réparation dans la fenêtre critique.",
        "Verrouiller le tissu jusqu'à ce qu'il tienne.",
      ],
      punch: "Rien n'est laissé au hasard.",
    },
  },
  cases: {
    badge: "Résultats",
    title: "Quand les semaines deviennent des jours.",
    subtitle: "",
    readMore: "Lire l'histoire",
    backLabel: "Retour à l'accueil",
    items: [
      {
        slug: "kaleigh-quennec",
        name: "Kaleigh Quennec",
        team: "Équipe olympique suisse de hockey sur glace",
        photo: "/assets/kaleigh-quennec.jpg",
        injury: "LCM grade 3 rupture distale complète",
        beforeLabel: "Pronostic",
        before: "Chirurgie. Saison terminée.",
        video: "/assets/videos/kaleigh-fr.mp4",
        videoPoster: "/assets/videos/kaleigh-poster.jpg",
        videoLabel: "Regarder",
        storyLabel: "Témoignage",
        rows: [
          {
            label: "Blessure",
            value: "LCM grade 3 : rupture distale complète, genou gauche",
          },
          {
            label: "Recommandation",
            value:
              "Intervention chirurgicale. Pas de retour au jeu cette saison.",
          },
          {
            label: "Contexte",
            value:
              "Blessure survenue 2 semaines avant les Jeux olympiques d'hiver de Milan 2026.",
          },
          {
            label: "Intervention",
            value:
              "5 traitements en 7 jours. RRP® complet : état de réparation optimal + Precision Repair Acupuncture.",
          },
        ],
        resultLabel: "Résultat",
        result: "Réparation complète",
        rtpLabel: "Retour au jeu",
        rtp: "8 jours",
        medal:
          "Médaille de bronze · Jeux olympiques d'hiver de Milan 2026",
        medalBody:
          "D'une rupture complète du LCM et d'une recommandation chirurgicale à une médaille de bronze olympique en moins de deux semaines.",
      },
      {
        slug: "kevin-mbabu",
        name: "Kevin Mbabu",
        team: "FC Midtjylland, Superliga danoise",
        photo: "/assets/kevin-mbabu.jpg",
        injury: "Déchirure du droit fémoral grade 2b",
        beforeLabel: "Pronostic",
        before: "12 semaines minimum.",
        storyLabel: "Témoignage",
        rows: [
          {
            label: "Blessure",
            value:
              "Déchirure du droit fémoral grade 2b : 11 cm, rupture de 60 % de la section, rétraction de 2,1 cm.",
          },
          {
            label: "Pronostic",
            value: "Retour au jeu à 12 semaines minimum.",
          },
          {
            label: "Intervention",
            value:
              "3 traitements en 4 jours. RRP® complet : état de réparation optimal + Precision Repair Acupuncture.",
          },
          {
            label: "Saison",
            value: "A terminé l'intégralité de la saison professionnelle.",
          },
        ],
        resultLabel: "Résultat",
        result: "Rémission complète",
        rtpLabel: "Retour au jeu",
        rtp: "7 jours",
        medal: "Vainqueur de la Coupe du Danemark",
        medalBody:
          "D'un pronostic de 12 semaines à un retour au jeu complet en 7 jours. Du diagnostic à la victoire en Coupe du Danemark.",
      },
    ],
    footnote:
      "IRM et attestations médicales sur demande : clinic@boddhiclinic.com",
  },
  services: {
    eyebrow: "Accès",
    title: "Choisissez comment commencer.",
    callout: "8–12 semaines d'arrêt ? Nous avons fait 7 jours.",
    calloutStrong: "",
    items: [
      {
        title: "Déploiement élite",
        choice: "Nous venons à vous",
        lead: "Blessure aiguë sur la route. Notre équipe sur place sous 72 heures.",
        cta: "Demander un déploiement",
        photos: [
          {
            src: "/assets/clinic/stadium.jpg",
            alt: "Stade et terrain d'entraînement élite",
          },
        ],
      },
      {
        title: "Traitement sur place",
        choice: "Vous venez à Genève",
        lead: "RRP® complet à la Boddhi Clinic — post-chirurgie, chronique, haute performance.",
        cta: "Réserver Genève",
        photos: [
          {
            src: "/assets/clinic/entrance.jpg",
            alt: "Entrée de la Boddhi Clinic à Genève",
          },
          {
            src: "/assets/clinic/treatment-room.png",
            alt: "Salle de traitement à la Boddhi Clinic",
          },
        ],
      },
    ],
  },
  about: {
    badge: "À propos",
    name: "Lucy Dean",
    role: "Fondatrice, Repair-State Medicine™",
    story: "Pas ",
    storyEm: "Lucy soigne des athlètes.",
    storyMid: " Lucy a passé ",
    storyStrong: "trente ans",
    storyEnd:
      " à étudier comment les tissus se réparent — et en a tiré le RRP®.",
    quote: "Ce protocole a exigé des décennies. ",
    quoteStrong: "Pas cinq ou dix ans de pratique.",
    location: "Basée à la Boddhi Clinic, Genève",
    teamTitle: "La RRP team",
    teamText: "Lucy Dean a créé le protocole. Autour d'elle, quatre spécialistes. ",
    teamStrong: "Un seul standard : la rigueur clinique pour l'athlète.",
    team: [
      {
        name: "Nicolas Charlet",
        role: "Acupuncture & thérapie manuelle",
        photo: "/assets/team/nicolas-charlet.jpg",
      },
      {
        name: "Doshan Gurung",
        role: "Massage népalais",
        photo: "/assets/team/doshan-gurung.jpg",
      },
      {
        name: "Alex Ginsburg",
        role: "Santé intestinale & hormonale",
        photo: "/assets/team/alex-ginsburg.jpg",
      },
      {
        name: "Claire Bostock-Tang",
        role: "Coach en santé holistique",
        photo: "/assets/team/claire-bostock-tang.jpg",
      },
    ],
  },
  contact: {
    title: "Parlez-nous",
    tagline: "La biologie n'attend pas.",
    cta: "Écrivez-nous",
    email: "clinic@boddhiclinic.com",
    location: "Boddhi Clinic, Genève",
  },
  footer: {
    copy: "© 2026 Boddhi Clinic, Genève · Médecine de l'état réparateur · Tous droits réservés",
  },
};
