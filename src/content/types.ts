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
    audience: string;
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
    photoCaption: string;
    phases: {
      num: string;
      title: string;
      body: string;
    }[];
  };
  science: {
    eyebrow: string;
    title: string;
    windowLine: string;
    against: {
      label: string;
      lines: string[];
    };
    for: {
      label: string;
      lines: string[];
      punch?: string;
    };
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
      videoPoster?: string;
      videoLabel?: string;
      storyLabel?: string;
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
    callout: string;
    calloutStrong: string;
    items: {
      title: string;
      choice: string;
      lead: string;
      cta: string;
      photos: { src: string; alt: string }[];
    }[];
  };
  about: {
    badge: string;
    name: string;
    role: string;
    location: string;
    creds: {
      to: number;
      suffix?: string;
      label: string;
      format?: "comma";
    }[];
    teamTitle: string;
    team: { name: string; role: string; photo: string }[];
  };
  contact: {
    title: string;
    tagline: string;
    cta: string;
    email: string;
    location: string;
  };
  footer: {
    copy: string;
  };
};
