# This branch adds a redesign — the live site is untouched

**Everything at the repo root (`index.html`, `about.html`, `assets/`, the
`CNAME` file, etc.) is exactly what's live at voicetechnepal.online right
now.** Nothing there has been edited. GitHub Pages keeps serving it from
`main` exactly as before.

The new design lives entirely inside [`redesign-2026/`](redesign-2026/) —
a separate Next.js project, on this separate `redesign-2026` branch. It
does not touch, replace, or depend on anything at the repo root.

## Why a branch + folder, not a straight replacement

So there's zero risk to the site that's currently live while this gets
reviewed. Nothing goes live until it's deliberately merged and deployed.

## To preview it locally

```bash
git checkout redesign-2026
cd redesign-2026
npm install
npm run dev
```

## To ship it

This is a Next.js app, so GitHub Pages (static-only) can't run it as-is.
The straightforward path:

1. Import this repo into [Vercel](https://vercel.com/new), set the
   **root directory** to `redesign-2026`, and deploy — free tier, auto
   HTTPS, builds on every push.
2. Point your domain at it (either keep `voicetechnepal.online` or the
   new `voicetech.com.np` once that's registered).
3. Once you're happy with it running on the new domain/host, this
   branch can be merged and the old root-level HTML files retired.

Nothing here needs to happen right away — this branch can sit and be
reviewed for as long as you like without affecting the live site.
