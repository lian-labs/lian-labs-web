import type { Metadata } from "next";
import ServicesPage from "@/components/ServicesPage";

export const metadata: Metadata = {
  title: "Software Development Services in Ethiopia",
  description:
    "Business software, websites, mobile apps, Telebirr and Chapa payment integration, school management and AI automation for Ethiopian organisations.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return <ServicesPage />;
}
