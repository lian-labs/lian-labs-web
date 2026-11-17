import type { Metadata } from "next";
import HomePage from "@/components/HomePage";
import { EDITION } from "@/lib/editions";

const { title, description } = EDITION.meta;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", locale: "en_ET" },
};

export default function Home() {
  return <HomePage />;
}
