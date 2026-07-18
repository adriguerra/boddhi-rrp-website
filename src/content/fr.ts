import type { SiteContent } from "./types";

export const fr: SiteContent = {
  locale: "fr",
  meta: {
    title: "BODDHI RRP® — Rapid Repair Protocol",
    description:
      "Réparation tissulaire ciblée pour un retour au jeu accéléré. La médecine de l'état réparateur par la Boddhi Clinic, Genève.",
  },
  nav: {
    aria: "Navigation principale",
    links: [
      { href: "#cases", label: "Études de cas" },
      { href: "#what", label: "Protocole" },
      { href: "#science", label: "Science" },
      { href: "#services", label: "Services" },
      { href: "#about", label: "À propos" },
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
    title: "Réparation tissulaire ciblée.",
    titleAccent: "Retour au jeu accéléré.",
    sub: "Intensif. Immersif. Délivré dans la fenêtre biologique critique. Avant la rééducation. Avant le retour au jeu.",
    subStrong: "Réparer d'abord.",
    ctaPrimary: "Parlez-nous",
    ctaSecondary: "Voir les résultats",
    photoAlt: "Athlète en mouvement",
    statLabelBefore: "Jusqu'à ",
    statLabelEm: "90 % de réduction",
    statLabelAfter: " du délai de retour au jeu.",
    quote1: "Quand 8 à 12 semaines de rééducation deviennent 7 jours.",
    quote2: "C'est ce que nous faisons.",
    banner1: "8 à 12 semaines d'arrêt annoncées ? Parlez-nous d'abord.",
    banner2:
      "Nous ne pouvons pas garantir le même résultat à chaque fois. Mais les preuves parlent d'elles-mêmes.",
  },
  what: {
    badge: "Qu'est-ce que le RRP® ?",
    title: "Une nouvelle catégorie : ",
    titleAccent: "la médecine de l'état réparateur.",
    lead: "La réparation tissulaire ciblée pour un retour au jeu accéléré. ",
    leadStrong: "Ni physiothérapie. Ni acupuncture.",
    leadDisplay:
      "Intensif, immersif et à temps compté : des séances quotidiennes consécutives sur 3 à 7 jours, avec l'adhésion totale de l'athlète.",
    repairOverline: "Ce que nous réparons",
    repairBody:
      "Les lésions des tissus mous, sur tout le spectre de gravité. Ligaments, muscles et tendons, de l'entorse aiguë à la rupture complète de grade 3.",
    quote1: "Quand le RRP® est terminé, nous vous rendons l'athlète. ",
    quote1Accent: "Réparé.",
    quote2:
      "Le staff kiné et performance prend le relais, avec un athlète réparé. Pas un athlète qui attend encore de guérir.",
    photoCaption: "Precision Repair Acupuncture",
    phasesHead: "Les trois phases",
    phases: [
      {
        num: "01",
        title: "Créer l'état de réparation optimal",
        body: "Le corps est préparé à la réparation avant même le début de l'intervention.",
        bullets: [
          "Optimisation intestinale et nutritionnelle",
          "Sommeil et régulation circadienne",
          "Activation parasympathique",
          "Intervention sur le nerf vague",
          "Amélioration du flux sanguin",
        ],
      },
      {
        num: "02",
        title: "Délivrer le signal de réparation",
        body: "Precision Repair Acupuncture (PRA) : spécifique au tissu, activée thermiquement, neuro-intégrée. Délivrée de façon intensive sur des jours consécutifs.",
      },
      {
        num: "03",
        title: "Verrouillage stratégique de la réparation",
        body: "Réparation enclenchée. Désormais verrouillée. Immobilisation stratégique et mise en charge contrôlée protègent la biologie jusqu'à ce qu'elle tienne.",
      },
    ],
    keyOverline: "Message clé",
    keyBody:
      "Le RRP® ne remplace pas la chirurgie. Dans les cas chirurgicaux évidents, opérez. Mais dans les cas limites, le RRP® a fait la différence. ",
    keyAccent:
      "La chirurgie avait été recommandée à Kaleigh Quennec. Huit jours plus tard, elle disputait les Jeux olympiques d'hiver de Milan 2026, sans opération.",
    keyCta: "Face à une décision chirurgicale, parlez-nous d'abord.",
  },
  science: {
    eyebrow: "La science",
    title: "Deux principes.\nTout le reste en découle.",
    principles: [
      {
        label: "Premier principe",
        title: "Activation vasculaire et modulation immunitaire",
        paragraphs: [
          "La réparation dépend des ressources biologiques acheminées par le système vasculaire : cellules immunitaires, facteurs de croissance, oxygène, nutriments. Sans acheminement optimal, elle échoue avant même de commencer.",
          "Le RRP® maximise la perfusion tissulaire, la vasodilatation et le recrutement des cellules immunitaires à chaque étape. La chaleur, pas la glace. L'activation, pas la suppression.",
        ],
      },
      {
        label: "Second principe",
        title: "Verrouillage stratégique de la réparation",
        paragraphs: [
          "Le tissu nouvellement formé est vulnérable. Le RRP® verrouille la réparation : immobilisation stratégique, mise en charge contrôlée, soutien biologique jusqu'à ce que la structure tienne.",
        ],
        punch: "Précis. Délibéré. Rien n'est laissé au hasard.",
      },
    ],
    windowLabel: "Fenêtre critique",
    windowTitle: "Les 72 premières heures",
    windowBody:
      "Dans les minutes qui suivent la blessure, des changements vasculaires s'opèrent, la signalisation des cytokines démarre, les cellules immunitaires se mobilisent. Les 72 premières heures ne sont pas une période d'attente. ",
    windowStrong: "Elles sont une fenêtre. Le RRP® la cible directement.",
  },
  cases: {
    badge: "Résultats",
    title: "Quand les semaines deviennent des jours.",
    subtitle:
      "Des résultats documentés. Confirmés de manière indépendante par IRM et médecins du sport.",
    readMore: "Voir l'étude de cas complète",
    backLabel: "Retour à l'accueil",
    items: [
      {
        slug: "kaleigh-quennec",
        name: "Kaleigh Quennec",
        team: "Équipe olympique suisse de hockey sur glace",
        photo: "/assets/kaleigh-quennec.jpg",
        injury: "LCM grade 3 — rupture distale complète",
        beforeLabel: "Pronostic",
        before: "Chirurgie. Saison terminée.",
        video: "/assets/videos/kaleigh-fr.mp4",
        videoLabel: "Témoignage",
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
        injury: "Déchirure du droit fémoral grade 2b — 11 cm",
        beforeLabel: "Pronostic",
        before: "12 semaines minimum.",
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
        medal: "FC Midtjylland · vainqueur de la Coupe du Danemark",
        medalBody:
          "D'un pronostic de 12 semaines à un retour au jeu complet en 7 jours. Du diagnostic à la victoire en Coupe du Danemark.",
      },
    ],
    footnote:
      "Images IRM et attestations médicales disponibles sur demande : clinic@boddhiclinic.com",
  },
  services: {
    eyebrow: "Services",
    title: "Trois portes d'entrée",
    intro:
      "Une méthodologie. Trois portes d'entrée. Un objectif : optimiser la réparation tissulaire pour restaurer la performance.",
    callout:
      "8 à 12 semaines d'arrêt annoncées ? Nous avons obtenu le même résultat en 7 jours. ",
    calloutStrong: "Appelez-nous avant que la fenêtre ne se referme.",
    items: [
      {
        num: "01",
        title: "Déploiement élite",
        lead: "L'équipe RRP® se déplace auprès de l'athlète. Sur site. Dans la fenêtre critique de réparation de 72 heures.",
        blocks: [
          {
            title: "Déploiement aigu pour un athlète",
            body: "Blessure aiguë. Fenêtre critique. Urgence maximale. Un seul athlète, blessure aiguë non chirurgicale : déclenché dans la fenêtre critique de réparation.",
          },
          {
            title: "Résidence en club · cinq jours sur site",
            body: "Cinq jours sur site, plusieurs athlètes, trois axes de traitement : blessure aiguë, blessure chronique et préparation à la performance. Comprend l'évaluation pré-déploiement, le traitement quotidien, la documentation de transmission, le calendrier de retour au jeu et un suivi à distance continu.",
          },
        ],
      },
      {
        num: "02",
        title: "Boddhi Clinic · Genève",
        lead: "Pour l'athlète d'élite qui vient à nous.",
        blocks: [
          {
            title: "Immersion totale à Genève",
            body: "Le protocole complet délivré sur place dans un environnement clinique dédié : concentration totale, zéro distraction.",
          },
          {
            title: "Également disponible pour",
            body: "Orientations post-chirurgicales (optimiser la réparation avant la rééducation), blessures chroniques quand la rééducation conventionnelle plafonne, et profils haute performance hors sport professionnel recherchant le même standard de soin.",
          },
        ],
      },
      {
        num: "03",
        title: "Formation de praticien RRP®",
        lead: "Pas une formation courte. Un parcours structuré pour cliniciens confirmés, à l'expérience démontrée.",
        blocks: [
          {
            title: "Ouvert aux",
            body: "Acupuncteurs confirmés, physiothérapeutes, médecins du sport et chirurgiens du sport.",
          },
          {
            title: "Trois niveaux de certification",
            body: "Praticien RRP® (fondamental) · Praticien avancé RRP® (PRA complète, stimulation thermique, neuro-acupuncture, gestion des cas complexes) · Instructeur RRP® (habilité à former d'autres praticiens). Les praticiens avancés peuvent rejoindre les déploiements de résidence en club.",
          },
        ],
      },
    ],
  },
  about: {
    badge: "À propos",
    name: "Lucy Dean",
    role: "Créatrice du RRP®",
    story: "L'histoire n'est pas ",
    storyEm: "Lucy soigne des athlètes.",
    storyMid: " L'histoire, c'est : Lucy a passé ",
    storyStrong: "trente ans",
    storyEnd:
      " à étudier comment le corps répare les tissus, et en a tiré une méthodologie.",
    quote:
      "Ces références ne sont pas un argument marketing. Elles sont la raison d'être du protocole. Le RRP® n'aurait pas pu être construit par un praticien avec cinq ou dix ans d'expérience. ",
    quoteStrong: "Il a fallu des décennies.",
    location: "Basée à la Boddhi Clinic, Genève",
    creds: [
      {
        value: "50 000",
        unit: "Heures cliniques",
        body: "30 ans de pratique ininterrompue.",
      },
      {
        value: "15 ans",
        unit: "Formation avancée",
        body: "Pas de la formation continue : un enseignement professionnel avancé dans plusieurs disciplines.",
      },
      {
        value: "12 ans",
        unit: "En Chine",
        body: "7 ans de formation clinique et académique intensive. 5 ans d'internat hospitalier aux côtés de grands médecins chinois. Parle couramment le mandarin.",
      },
      {
        value: "1 des 3",
        unit: "Cliniques de neuro-acupuncture en Europe",
        body: "Parmi les très rares praticiens en Europe à proposer cette spécialisation.",
      },
    ],
    teamTitle: "La RRP team",
    teamText:
      "La réparation engage tout le corps. Autour de Lucy, quatre praticiens apportent chacun leur discipline : acupuncture, massage thérapeutique, soutien intestin et hormones, accompagnement holistique. ",
    teamStrong:
      "Des expertises complémentaires, un seul standard : la rigueur clinique, au service exclusif de l'athlète.",
    team: [
      {
        name: "Nicolas Charlet",
        role: "Acupuncture & thérapies manuelles chinoises",
        photo: "/assets/team/nicolas-charlet.jpg",
      },
      {
        name: "Doshan Gurung",
        role: "Massage thérapeutique traditionnel",
        photo: "/assets/team/doshan-gurung.jpg",
      },
      {
        name: "Alex Ginsburg",
        role: "Soutien intestin, foie & hormones",
        photo: "/assets/team/alex-ginsburg.jpg",
      },
      {
        name: "Claire Bostock-Tang",
        role: "Santé holistique & thérapie par les bols chantants",
        photo: "/assets/team/claire-bostock-tang.jpg",
      },
    ],
  },
  contact: {
    title: "Parlez-nous",
    tagline: "La biologie n'attend pas. Vous non plus.",
    primary: "Nous contacter pour un déploiement élite",
    residency: "Se renseigner sur la résidence en club",
    training: "Se renseigner sur la formation de praticien",
    email: "clinic@boddhiclinic.com",
    location: "Boddhi Clinic, Genève",
    toast: "Demande envoyée, nous revenons vers vous",
  },
  footer: {
    copy: "© 2026 Boddhi Clinic, Genève · Médecine de l'état réparateur · Tous droits réservés",
  },
};
