import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/products";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Array<[string, number]> = [
    ["/", 1],
    ["/services", 0.9],
    ["/products", 0.9],
    ["/about", 0.7],
    ["/contact", 0.7],
    ["/privacy", 0.2],
    ["/terms", 0.2],
  ];

  return [
    ...pages.map(([path, priority]) => ({
      url: absoluteUrl(path),
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...PRODUCTS.map((p) => ({
      url: absoluteUrl(`/products/${p.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
