"use client";

import Link from "next/link";
import type { Locale } from "@/content";

const STORAGE_KEY = "rrpLang";

export function LangLink({
  locale,
  href,
  children,
  className,
  ...rest
}: {
  locale: Locale;
  href: string;
  children: React.ReactNode;
  className?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  return (
    <Link
      href={href}
      className={className}
      hrefLang={locale === "en" ? "fr" : "en"}
      lang={locale === "en" ? "fr" : "en"}
      onClick={() => {
        try {
          localStorage.setItem(STORAGE_KEY, locale === "en" ? "fr" : "en");
        } catch {
          /* ignore */
        }
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}
