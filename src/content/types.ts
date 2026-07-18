export type Locale = "en" | "fr";

export type SiteContent = {
  locale: Locale;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    aria: string;
    links: { href: string; label: string }[];
    cta: string;
    langAria: string;
    otherLangLabel: string;
    otherLangHref: string;
    footerLangLabel: string;
  };
  hero: {
    eyebrow: string;
    location: string;
    title: string;
    titleAccent: string;
    sub: string;
    subStrong: string;
    ctaPrimary: string;
    ctaSecondary: string;
    photoAlt: string;
    statLabelBefore: string;
    statLabelEm: string;
    statLabelAfter: string;
    quote1: string;
    quote2: string;
    banner1: string;
    banner2: string;
  };
  what: {
    badge: string;
    title: string;
    titleAccent: string;
    lead: string;
    leadStrong: string;
    leadDisplay: string;
    repairOverline: string;
    repairBody: string;
    quote1: string;
    quote1Accent: string;
    quote2: string;
    photoCaption: string;
    phasesHead: string;
    phases: {
      num: string;
      title: string;
      body: string;
      bullets?: string[];
    }[];
    keyOverline: string;
    keyBody: string;
    keyAccent: string;
    keyCta: string;
  };
  science: {
    eyebrow: string;
    title: string;
    principles: {
      label: string;
      title: string;
      paragraphs: string[];
      punch?: string;
    }[];
    windowLabel: string;
    windowTitle: string;
    windowBody: string;
    windowStrong: string;
  };
  cases: {
    badge: string;
    title: string;
    subtitle: string;
    readMore: string;
    backLabel: string;
    items: {
      slug: string;
      name: string;
      team: string;
      photo: string;
      injury: string;
      beforeLabel: string;
      before: string;
      video?: string;
      videoLabel?: string;
      rows: { label: string; value: string }[];
      resultLabel: string;
      result: string;
      rtpLabel: string;
      rtp: string;
      medal: string;
      medalBody: string;
    }[];
    footnote: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    callout: string;
    calloutStrong: string;
    items: {
      num: string;
      title: string;
      lead: string;
      blocks: { title: string; body: string }[];
    }[];
  };
  about: {
    badge: string;
    name: string;
    role: string;
    story: string;
    storyEm: string;
    storyMid: string;
    storyStrong: string;
    storyEnd: string;
    quote: string;
    quoteStrong: string;
    location: string;
    creds: { value: string; unit: string; body: string }[];
    teamTitle: string;
    teamText: string;
    teamStrong: string;
    team: { name: string; role: string; photo: string }[];
  };
  contact: {
    title: string;
    tagline: string;
    primary: string;
    residency: string;
    training: string;
    email: string;
    location: string;
    toast: string;
  };
  footer: {
    copy: string;
  };
};
