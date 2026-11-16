import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { EDITIONS } from "@/lib/editions";

const { title, description } = EDITIONS.et.meta;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/et", languages: { "en-ET": "/et", "x-default": "/" } },
  openGraph: { title, description, url: "/et", locale: "en_ET" },
};

export default function EthiopiaHome() {
  return <HomePage region="et" />;
}
