# BODDHI RRP® — Rapid Repair Protocol website

Next.js (App Router) implementation of the BODDHI RRP marketing site, with
English (`/`) and French (`/fr`) via shared components, and **Motion** for
hero + scroll-reveal animations.

## Stack

- Next.js 16 + React 19
- Motion (`motion/react`)
- Phosphor Icons
- Days One + Plus Jakarta Sans via `next/font`

## Develop

```sh
npm install
npm run dev
# → http://localhost:3000
```

## Deploy

Designed for Vercel. Push the repo and import the project; no special config required.

## Notes

- Contact CTAs still show a confirmation toast only (design parity). Wire to
  `mailto:clinic@boddhiclinic.com` or a form service when ready.
- Language preference is stored in `localStorage` (`rrpLang`); the EN home
  page redirects to `/fr` when the visitor previously picked French.
