import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { getContent } from "@/content";

const content = getContent("en");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function Home() {
  return <HomePage content={content} />;
}
