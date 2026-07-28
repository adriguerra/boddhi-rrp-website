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
    menuOpen: string;
    menuClose: string;
    langAria: string;
    otherLangLabel: string;
    otherLangHref: string;
    footerLangLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    sub: string;
    ctaPrimary: string;
    photoAlt: string;
    proofLead: string;
    proof: string;
    proofCta: string;
  };
  protocol: {
    title: string;
    cta: string;
    phases: {
      num: string;
      title: string;
      bullets: string[];
    }[];
  };
  cases: {
    badge: string;
    title: string;
    subtitle: string;
    readMore: string;
    backLabel: string;
    closeLabel: string;
    items: {
      slug: string;
      name: string;
      team: string;
      role: string;
      photo: string;
      injury: string;
      beforeLabel: string;
      before: string;
      video?: string;
      videoPoster?: string;
      videoLabel?: string;
      storyLabel?: string;
      rows: { label: string; value: string }[];
      meta: { label: string; value: string }[];
      percent: string;
      percentLabel: string;
      resultLabel: string;
      result: string;
      rtpLabel: string;
      rtp: string;
      medal: string;
      medalBody: string;
      modal: {
        sections: { title: string; body: string }[];
        gallery: { src: string; alt: string }[];
      };
    }[];
    footnote: string;
  };
  delivery: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      num: string;
      title: string;
      points: string[];
      cta: string;
      photo: { src: string; alt: string };
    }[];
  };
  about: {
    badge: string;
    name: string;
    role: string;
    bio: string;
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
    tagline: string;
    columns: { title: string; links: { label: string; href: string }[] }[];
    legal: { label: string; href: string }[];
    copy: string;
  };
};
