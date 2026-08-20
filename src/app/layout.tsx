import type { Metadata } from "next";
import { Days_One, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const daysOne = Days_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-days-one",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rapidrepairprotocol.com"),
  title: "BODDHI RRP® — Rapid Repair Protocol",
  description:
    "Targeted tissue repair for accelerated return to play. Repair-State Medicine by Boddhi Clinic, Geneva.",
  alternates: {
    languages: {
      en: "/",
      fr: "/fr",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
    url: "/",
    siteName: "BODDHI RRP®",
    title: "BODDHI RRP® — Rapid Repair Protocol",
    description:
      "Beat the prognosis. Accelerate return. Documented tissue repair for elite athletes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BODDHI RRP® — Rapid Repair Protocol",
    description:
      "Beat the prognosis. Accelerate return. Documented tissue repair for elite athletes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${daysOne.variable} ${plusJakarta.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
