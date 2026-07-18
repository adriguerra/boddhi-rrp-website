import type { Locale } from "./types";
import { en } from "./en";
import { fr } from "./fr";

export function getContent(locale: Locale) {
  return locale === "fr" ? fr : en;
}

export function getCaseBySlug(locale: Locale, slug: string) {
  return getContent(locale).cases.items.find((item) => item.slug === slug);
}

export function getCaseSlugs() {
  return en.cases.items.map((item) => item.slug);
}

export function casePath(locale: Locale, slug: string) {
  return locale === "fr" ? `/fr/cases/${slug}` : `/cases/${slug}`;
}

export function homePath(locale: Locale) {
  return locale === "fr" ? "/fr" : "/";
}

export type { Locale, SiteContent } from "./types";
