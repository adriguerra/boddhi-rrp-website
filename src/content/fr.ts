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
      { href: "#protocol", label: "Protocole" },
      { href: "#cases", label: "Histoires de succès" },
      { href: "#access", label: "Accès" },
      { href: "#about", label: "À propos" },
    ],
    cta: "Réserver un appel",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    langAria: "Langue",
    otherLangLabel: "EN",
    otherLangHref: "/",
    footerLangLabel: "English version",
  },
  hero: {
    eyebrow: "Pour les athlètes d'élite avec blessures aiguës",
    title: "Battez le pronostic.\n**Accélérez le retour.**",
    sub: "Ligaments, muscles et tendons — sans chirurgie, en jours pas en mois.",
    ctaPrimary: "Réserver un appel",
    ctaWatchVideo: "Voir la vidéo",
    ctaReadStory: "Lire l'histoire",
    photoAlt: "Precision Repair Acupuncture",
    scrollLabel: "Défiler vers le bas",
    proofLead: "D'une blessure de fin de saison à une qualification olympique.",
    proof: "De fin de saison à médaillée olympique.",
    proofCta: "En savoir plus",
  },
  protocol: {
    badge: "Comment fonctionne le RRP",
    title: "Optimiser la réparation tissulaire pour restaurer la performance.",
    subtitle:
      "Le RRP® est un protocole en 3 étapes sur 4 à 14 jours pour les déchirures musculaires, ligamentaires et tendineuses aiguës. Nous utilisons l’acupuncture de précision pour amplifier la réponse naturelle de réparation tissulaire du corps.",
    cta: "Découvrir la science",
    science: {
      title: "Deux principes.\nTout le reste en découle.",
      closeLabel: "Fermer",
      principles: [
        {
          label: "Principe 1",
          title: "Activation vasculaire & modulation immunitaire",
          body: [
            "La réparation dépend des ressources biologiques acheminées par le système vasculaire — cellules immunitaires, facteurs de croissance, oxygène, nutriments. Sans une livraison optimale, elle échoue avant même de commencer.",
            "Le RRP® maximise la perfusion tissulaire, la vasodilatation et le recrutement des cellules immunitaires à chaque étape.",
            "La chaleur, pas la glace. L'activation, pas la suppression.",
          ],
          poster: "/assets/science/principle-1-poster.jpg",
          posterAlt:
            "Aiguilles de Precision Repair Acupuncture placées le long de la jambe",
        },
        {
          label: "Principe 2",
          title: "Verrouillage stratégique de la réparation",
          body: [
            "Le tissu nouvellement formé est vulnérable.",
            "Le RRP® verrouille la réparation — immobilisation stratégique, charge contrôlée, soutien biologique — jusqu'à ce que la structure tienne.",
            "Précis. Délibéré. Rien n'est laissé au hasard.",
          ],
          poster: "/assets/science/principle-2-poster.jpg",
          posterAlt:
            "Strapping sportif appliqué pour verrouiller la réparation autour du genou",
        },
      ],
    },
    phases: [
      {
        num: "1",
        title: "Préparer le corps",
        subtitle: "Créer les conditions optimales de réparation",
        bullets: [
          "Protocole de récupération quotidien guidé",
          "Plan nutritionnel et de sommeil personnalisé",
          "Conditionnement du corps entier",
        ],
      },
      {
        num: "2",
        title: "Réparation tissulaire ciblée",
        subtitle:
          "Déclencher des signaux neurologiques pour accélérer la réparation du site lésé",
        bullets: [
          "Precision Repair Acupuncture (PRA)",
          "Stimulation thermique",
          "Soutien biologique ciblé",
        ],
      },
      {
        num: "3",
        title: "Immobilisation stratégique",
        subtitle: "Protéger la réparation pour la croissance tissulaire",
        bullets: [
          "Immobilisation totale pendant les 72 premières heures",
          "Mobilisation stratégique au bon moment",
          "Retour progressif à la performance",
        ],
      },
    ],
  },
  cases: {
    badge: "Histoires de succès",
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
              body: "Kaleigh a suivi cinq traitements RRP® en sept jours, alliant préparation à l'état de réparation optimal et Precision Repair Acupuncture.",
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
              body: "Kevin a suivi trois traitements RRP® en quatre jours, alliant préparation à l'état de réparation optimal et Precision Repair Acupuncture.",
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
    badge: "Accès",
    title: "Le RRP livré dans un environnement\ndédié et privé",
    subtitle:
      "Des soins d'exception — là où survient la blessure, ou dans une suite de récupération à Genève.",
    items: [
      {
        num: "01",
        title: "Nous venons à vous",
        subtitle: "L'équipe RRP se déploie auprès de l'athlète",
        points: [
          "Résidence sur site — 4 à 14 jours",
          "Athlète unique ou déploiement club",
          "Aigu · Chronique · Performance",
        ],
        cta: "Demander un déploiement",
        photo: {
          src: "/assets/clinic/stadium.jpg",
          alt: "Piste d’athlétisme dans un stade élite",
        },
      },
      {
        num: "02",
        title: "Vous venez à nous",
        subtitle: "Pour l'athlète qui vient à Genève",
        points: [
          "Environnement clinique dédié",
          "Protocole complet · focus total",
          "Grands matchs · retraites · stages de pré-saison",
        ],
        cta: "Réserver Genève",
        photo: {
          src: "/assets/clinic/geneva.jpg",
          alt: "Jet d’Eau et le quai de Genève",
        },
      },
    ],
  },
  about: {
    badge: "À propos",
    title: "Rencontrez l'équipe",
    name: "Lucy Dean",
    role: "Créatrice du RRP®",
    bio: "Lucy a développé le Rapid Repair Protocol après plus d'une décennie de pratique clinique d'élite en Chine et en Europe. Elle réunit neuro-acupuncture, science de la réparation tissulaire et sport de haut niveau.",
    location: "Basée à la Boddhi Clinic, Genève",
    creds: [
      { to: 50000, format: "comma", suffix: "+", label: "Heures cliniques" },
      { to: 28, suffix: " ans", label: "Formation avancée" },
      { to: 12, suffix: " ans", label: "En Chine" },
      {
        to: 1,
        suffix: " sur 3",
        label: "Cliniques de neuro-acupuncture en Europe",
      },
    ],
    teamTitle: "Soutenue par quatre praticiens aux expertises complémentaires.",
    teamIntro: [],
    team: [
      {
        name: "Claire Bostock-Tang",
        role: "Coaching en santé holistique",
        photo: "/assets/team/claire-bostock-tang.jpg",
      },
      {
        name: "Doshan Gurung",
        role: "Massage tissulaire spécialisé",
        photo: "/assets/team/doshan-gurung.jpg",
      },
      {
        name: "Nicolas Charlet",
        role: "Acupuncture & thérapies manuelles chinoises",
        photo: "/assets/team/nicolas-charlet.jpg",
      },
      {
        name: "Alex Ginsburg",
        role: "Soutien intestinal, hépatique et hormonal",
        photo: "/assets/team/alex-ginsburg.jpg",
      },
    ],
  },
  proofBridge: {
    text: "Documenté avec des athlètes d'élite — du hockey olympique au football de Premier League.",
    cta: "Voir leurs histoires",
    href: "#top",
  },
  contact: {
    title: "Examinons le cas",
    tagline:
      "Partagez le diagnostic et le pronostic. Nous vous dirons si le RRP peut accélérer le retour.",
    cta: "Réserver un appel",
    email: "clinic@boddhiclinic.com",
    phone: "+41 22 758 22 88",
    phoneHref: "tel:+41227582288",
    phoneLabel: "Ou appelez",
    location: "Boddhi Clinic, Genève",
    calendar: {
      eventLabel: "Appel découverte",
      duration: "30 min",
      monthLabel: "Août 2026",
      weekdays: ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"],
      days: [
        null,
        null,
        null,
        null,
        null,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
      ],
      selectedDay: 12,
      timesLabel: "Horaires disponibles",
      times: ["09:00", "09:30", "10:00", "11:00", "14:00", "15:30"],
      selectedTime: "10:00",
    },
  },
  footer: {
    tagline: "Une récupération plus rapide pour les athlètes d'élite.",
    phone: "+41 22 758 22 88",
    phoneHref: "tel:+41227582288",
    columns: [
      {
        title: "Explorer",
        links: [
          { label: "Protocole", href: "#protocol" },
          { label: "Histoires de succès", href: "#cases" },
          { label: "Accès", href: "#access" },
          { label: "À propos", href: "#about" },
        ],
      },
      {
        title: "Commencer",
        links: [
          { label: "Réserver un appel", href: "#contact" },
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
