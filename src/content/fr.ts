import type { SiteContent } from "./types";

export const fr: SiteContent = {
  locale: "fr",
  meta: {
    title: "BODDHI RRP® — Rapid Repair Protocol",
    description:
      "Battez le pronostic. Accélérez le retour au jeu. Réparation tissulaire documentée pour athlètes d'élite. Boddhi Clinic, Genève.",
  },
  nav: {
    aria: "Navigation principale",
    links: [
      { href: "#protocol", label: "Le protocole" },
      { href: "#cases", label: "Impact" },
      { href: "#delivery", label: "Accès" },
      { href: "#about", label: "L'équipe" },
    ],
    cta: "Réserver",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    langAria: "Langue",
    otherLangLabel: "EN",
    otherLangHref: "/",
    footerLangLabel: "English version",
  },
  hero: {
    eyebrow: "Protocole immersif, intensif et holistique de réparation tissulaire",
    title: "Battez le pronostic, **accélérez le retour au jeu**",
    sub: "Fondé sur plus de 30 ans de pratique clinique, le RRP® est une méthodologie révolutionnaire pour réparer rapidement les tissus blessés. Nous traitons les blessures sportives aiguës : ligaments, muscles et tendons — sans chirurgie, en jours, pas en mois.",
    ctaPrimary: "Parlez-nous",
    photoAlt: "Joueurs de hockey sur glace en compétition",
    proofLead: "D'une blessure de fin de saison à une qualification olympique.",
    proof: "Ensemble, nous battons le pronostic de **90 %**.",
    proofCta: "Découvrir les cas",
  },
  protocol: {
    title: "Optimiser la réparation tissulaire pour restaurer la performance.",
    cta: "Commencer maintenant",
    phases: [
      {
        num: "01",
        title: "Préparer le corps",
        bullets: [
          "Amorcer l'état de réparation optimal",
          "Réduire l'inflammation sans glace",
          "Préparer le tissu au signal",
        ],
      },
      {
        num: "02",
        title: "Réparation tissulaire ciblée",
        bullets: [
          "Precision Repair Acupuncture",
          "Séances intensives consécutives",
          "Activer la réparation dans la fenêtre critique",
        ],
      },
      {
        num: "03",
        title: "Construire sur des bases solides",
        bullets: [
          "Verrouiller le nouveau tissu jusqu'à ce qu'il tienne",
          "Protéger la fenêtre de réparation",
          "Revenir en confiance",
        ],
      },
    ],
  },
  cases: {
    badge: "Impact",
    title: "Ensemble, nous battons le pronostic de **90 %**",
    subtitle: "",
    readMore: "Voir leur histoire",
    backLabel: "Retour à l'accueil",
    closeLabel: "Fermer",
    items: [
      {
        slug: "kaleigh-quennec",
        name: "Kaleigh Quennec",
        team: "Équipe olympique suisse de hockey sur glace",
        role: "Attaquante",
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
        meta: [
          { label: "Équipe", value: "Hockey olympique suisse" },
          { label: "Rôle", value: "Attaquante" },
          { label: "Blessure", value: "LCM grade 3" },
          { label: "Retour au jeu", value: "8 jours" },
        ],
        percent: "90%",
        percentLabel: "Plus rapide que le pronostic",
        resultLabel: "Résultat",
        result: "Réparation complète",
        rtpLabel: "Retour au jeu",
        rtp: "8 jours",
        medal:
          "Médaille de bronze · Jeux olympiques d'hiver de Milan 2026",
        medalBody:
          "D'une rupture complète du LCM et d'une recommandation chirurgicale à une médaille de bronze olympique en moins de deux semaines.",
        modal: {
          sections: [
            {
              title: "La blessure",
              body: "LCM grade 3 : rupture distale complète du genou gauche. Recommandation chirurgicale. Pas de retour au jeu cette saison. Blessure survenue deux semaines avant les Jeux olympiques d'hiver de Milan 2026.",
            },
            {
              title: "L'intervention",
              body: "Kaleigh a suivi cinq traitements RRP® intensifs en sept jours, alliant préparation à l'état de réparation optimal et Precision Repair Acupuncture.",
            },
            {
              title: "Le résultat",
              body: "Réparation complète et retour au jeu en 8 jours — puis médaille de bronze olympique à Milan 2026.",
            },
          ],
          gallery: [
            {
              src: "/case-studies/kaleigh/treatment.jpg",
              alt: "Séance de traitement RRP",
            },
            {
              src: "/assets/acupuncture.png",
              alt: "Precision Repair Acupuncture",
            },
            {
              src: "/case-studies/kaleigh/action.jpg",
              alt: "Athlète en action",
            },
            {
              src: "/case-studies/kaleigh/slide-team.jpg",
              alt: "Équipe olympique suisse de hockey",
            },
          ],
        },
      },
      {
        slug: "kevin-mbabu",
        name: "Kevin Mbabu",
        team: "FC Midtjylland, Superliga danoise",
        role: "Défenseur",
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
        meta: [
          { label: "Équipe", value: "FC Midtjylland" },
          { label: "Rôle", value: "Défenseur" },
          { label: "Blessure", value: "Déchirure musculaire grade 2b" },
          { label: "Retour au jeu", value: "7 jours" },
        ],
        percent: "90%",
        percentLabel: "Plus rapide que le pronostic",
        resultLabel: "Résultat",
        result: "Rémission complète",
        rtpLabel: "Retour au jeu",
        rtp: "7 jours",
        medal: "Vainqueur de la Coupe du Danemark",
        medalBody:
          "D'un pronostic de 12 semaines à un retour au jeu complet en 7 jours. Du diagnostic à la victoire en Coupe du Danemark.",
        modal: {
          sections: [
            {
              title: "La blessure",
              body: "Déchirure du droit fémoral grade IIb, avec rupture importante des fibres et rétraction. Pronostic initial : minimum 12 semaines avant le retour au jeu.",
            },
            {
              title: "L'intervention",
              body: "Kevin a suivi trois traitements RRP® intensifs en quatre jours, alliant préparation à l'état de réparation optimal et Precision Repair Acupuncture.",
            },
            {
              title: "Le résultat",
              body: "Retour au jeu complet en 7 jours, puis fin de saison professionnelle et victoire en Coupe du Danemark.",
            },
          ],
          gallery: [
            {
              src: "/case-studies/kevin/treatment.jpg",
              alt: "Traitement RRP — ventouses",
            },
            {
              src: "/assets/acupuncture.png",
              alt: "Aiguilles Precision Repair Acupuncture",
            },
            {
              src: "/case-studies/kevin/action.jpg",
              alt: "Détail du traitement",
            },
            {
              src: "/case-studies/kevin/slide-2.png",
              alt: "Célébration Kevin Mbabu",
            },
          ],
        },
      },
    ],
    footnote:
      "IRM et attestations médicales sur demande : clinic@boddhiclinic.com",
  },
  delivery: {
    eyebrow: "Accès RRP",
    title: "Le RRP livré dans un environnement dédié et privé",
    subtitle:
      "Des soins d'exception — là où survient la blessure, ou à notre clinique de Genève.",
    items: [
      {
        num: "01",
        title: "Nous venons à vous",
        points: [
          "Votre domicile",
          "Votre centre d'entraînement",
          "Votre club — RRP® complet sur site",
          "Déploiement de l'équipe sous 72 heures",
        ],
        cta: "Demander un déploiement",
        photo: {
          src: "/assets/clinic/stadium.jpg",
          alt: "Terrain d'entraînement élite",
        },
      },
      {
        num: "02",
        title: "Vous venez à nous",
        points: [
          "Notre clinique à Genève",
          "Environnement de traitement privé",
          "Hôtels partenaires privilégiés",
          "RRP® complet : aigu, post-chirurgie & chronique",
        ],
        cta: "Réserver Genève",
        photo: {
          src: "/assets/clinic/treatment-room.jpg",
          alt: "Salle de traitement à la Boddhi Clinic",
        },
      },
    ],
  },
  about: {
    badge: "L'équipe",
    name: "Lucy Dean",
    role: "Créatrice du RRP® · Directrice clinique",
    bio: "Lucy a développé le Rapid Repair Protocol après plus d'une décennie de pratique clinique d'élite en Chine et en Europe — alliant neuro-acupuncture, médecine de l'état réparateur et sport de haut niveau.",
    location: "Basée à la Boddhi Clinic, Genève",
    creds: [
      { to: 50000, format: "comma", label: "Heures cliniques" },
      { to: 15, suffix: " ans", label: "Formation avancée" },
      { to: 12, suffix: " ans", label: "En Chine" },
      {
        to: 1,
        suffix: " sur 3",
        label: "Cliniques de neuro-acupuncture en Europe",
      },
    ],
    teamTitle: "L'équipe RRP",
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
    title: "Travaillez avec nous",
    tagline: "La meilleure façon d'apprendre, c'est de travailler avec nous.",
    cta: "Postuler",
    email: "clinic@boddhiclinic.com",
    location: "Boddhi Clinic, Genève",
  },
  footer: {
    tagline: "Une récupération plus rapide pour les athlètes d'élite.",
    columns: [
      {
        title: "Explorer",
        links: [
          { label: "Le protocole", href: "#protocol" },
          { label: "Impact", href: "#cases" },
          { label: "Accès", href: "#delivery" },
          { label: "L'équipe", href: "#about" },
        ],
      },
      {
        title: "Commencer",
        links: [
          { label: "Réserver", href: "#contact" },
          { label: "Nous écrire", href: "mailto:clinic@boddhiclinic.com" },
        ],
      },
      {
        title: "Informations",
        links: [
          { label: "Boddhi Clinic", href: "#about" },
          { label: "Genève", href: "#contact" },
        ],
      },
      {
        title: "Réseaux",
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
      { label: "Confidentialité", href: "#contact" },
      { label: "Conditions", href: "#contact" },
      { label: "Contact", href: "#contact" },
    ],
    copy: "© 2026 Boddhi Clinic, Genève · Médecine de l'état réparateur · Tous droits réservés",
  },
};
