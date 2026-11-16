import type { Metadata } from "next";
import ServicesPage from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, SaaS, mobile apps, AI integration, product design, cloud and dedicated developers from Lian Labs.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return <ServicesPage region="world" />;
}
