# Voice Tech Nepal — 2026 Redesign

A rebuild of the Voice Tech Nepal website in Next.js + Tailwind CSS,
using the same brand mark, colours, and business details as the live
site, with a cleaner layout and real photos from past bootcamps in
place of stock/placeholder content.

This lives on the `redesign-2026` branch, in this `redesign-2026/`
folder, separate from the live site's files at the repo root — the
live site (`index.html` etc. on `main`) is untouched and keeps working
exactly as it does now. See [`../REDESIGN.md`](../REDESIGN.md) for how
this fits together and how to preview or ship it.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `app/` — pages, layout, metadata
- `components/sections/` — Hero, Skills, Schedule, Coaches, Gallery, Contact
- `components/layout/` — Navbar, Footer, WhatsApp booking bar
- `components/ui/` — Button, Logo, Section, SectionHeading
- `lib/content.ts` — phone numbers, address, class times (single source of truth)
- `public/photos/` — real coach and gallery photos pulled from the live site's `assets/images/`
- `public/logo.jpg` — the existing Voice Tech Nepal logo, unchanged

## Known gaps

- `.com.np` domain not yet wired up (still pointing at `voicetechnepal.online`)
- Not yet deployed anywhere — see `../REDESIGN.md` for the Vercel option
