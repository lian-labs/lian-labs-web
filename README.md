# Lian Labs Ethiopia website

Company site for Lian Labs in Ethiopia, served at **https://et.lian-labs.com**.
The global audience is served by the main site at https://lian-labs.com.

`src/lib/editions.ts` also holds a global version of the copy, kept for later.
`SITE_REGION` in `src/lib/regions.ts` picks which one this site serves.

## Editing content

All copy lives in `src/lib`, so most changes never touch a component:

- `editions.ts`: hero, services, why-us, process, FAQ and CTA
- `products.ts`: products (each gets a `/products/<slug>` page automatically)
- `clients.ts`: countries served and headline stats
- `testimonials.ts`: client reviews
- `site.ts`: contact email, booking link, social links
- `src/components/LogoMarquee.tsx`: client logos

## Development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local`. Before launch, set `NEXT_PUBLIC_SITE_URL`
to the production domain: canonical URLs, the sitemap and structured data are
built from it. Search engines may index every deployment except Vercel
previews and any deployment with `NEXT_PUBLIC_NOINDEX=1`.
