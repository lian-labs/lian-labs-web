import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

type Breadcrumb = { name: string; path: string };

export default function Breadcrumbs({
  items,
}: Readonly<{ items: Breadcrumb[] }>) {
  const fullItems = [{ name: "Home", path: "/" }, ...items];

  return (
    <>
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
          {fullItems.map((item, index) => {
            const isCurrent = index === fullItems.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden>/</span>}
                {isCurrent ? (
                  <span aria-current="page" className="text-ink-muted">
                    {item.name}
                  </span>
                ) : (
                  <a href={item.path} className="hover:text-brand-700">
                    {item.name}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(fullItems)} />
    </>
  );
}
