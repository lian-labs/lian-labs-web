import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { EDITIONS } from "@/lib/editions";

const { title, description } = EDITIONS.world.meta;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/", languages: { "en-ET": "/et", "x-default": "/" } },
  openGraph: { title, description, url: "/" },
};

export default function Home() {
  return <HomePage region="world" />;
}
