# Lian Labs website

Company site for Lian Labs, with two editions on one Next.js app:

| Edition  | Path  | Audience                                         |
| -------- | ----- | ------------------------------------------------ |
| Global   | `/`   | Startups and companies worldwide                 |
| Ethiopia | `/et` | Ethiopian businesses, schools and organisations  |

Products, About and Contact are shared between editions.

## Editing content

All copy lives in `src/lib`, so most changes never touch a component:

- `editions.ts`: hero, services, why-us, process, FAQ and CTA for each edition
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

Set `NEXT_PUBLIC_SITE_URL` to the production domain (used for canonical URLs,
sitemap and structured data). Optional analytics: `NEXT_PUBLIC_GA_MEASUREMENT_ID`,
`NEXT_PUBLIC_CLARITY_PROJECT_ID`.
