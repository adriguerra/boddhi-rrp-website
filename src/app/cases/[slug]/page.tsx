import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { getCaseBySlug, getCaseSlugs, getContent } from "@/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseBySlug("en", slug);
  if (!item) return {};
  return {
    title: `${item.name} — BODDHI RRP®`,
    description: item.medalBody,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const content = getContent("en");
  const item = getCaseBySlug("en", slug);
  if (!item) notFound();
  return <CaseStudyPage content={content} item={item} />;
}
