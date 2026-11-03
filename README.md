This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## J10 Effect

Single-page site for an AI film and advertising studio, built with the Next.js App Router.

- `app/page.tsx`: page layout and copy
- `app/components/hero-film.tsx`: hero film and chapter timeline
- `app/components/work.tsx`: portfolio and film player
- `app/contact.ts`: contact email, used everywhere on the site
- `public/films/`: web encodes and posters. The MP4s are gitignored, so they don't reach Vercel through a git deploy. Deploy with the Vercel CLI from a folder that has them (`npx vercel --prod`).
