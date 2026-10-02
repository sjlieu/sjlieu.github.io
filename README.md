# sjlieu.github.io

Personal academic website — React + Vite, deployed to GitHub Pages at https://sjlieu.github.io.

## Edit the content

All text lives in [`src/content.ts`](src/content.ts), drawn from the CV: bio, links, education,
research experience, research projects, and publications.

- **Photo:** put a square image at `public/profile.jpg`, then set `photo: "/profile.jpg"`.
- **CV:** put your PDF at `public/cv.pdf`, then set the CV link to `"/cv.pdf"`.
- **Project covers:** put an image in `public/projects/` and set the project's `cover`
  (e.g. `"/projects/boston.jpg"`). Projects without one get a generated constellation cover.
- **Project keywords:** each project's `keywords` drive the filter buttons; add new ones to `KEYWORDS`.
- **Card backs:** `funding` shows as "Funded by …" (empty shows "Independent work"); each item in
  `details` is a bullet, and its `refs` (e.g. `["P7", "C5"]`) link to entries in Publications.

Links with an empty `href` are hidden automatically.

## Font

The site uses **D-DIN** (free DIN-style face, SIL Open Font License — see
`public/fonts/d-din/OFL.txt`), self-hosted from `public/fonts/d-din/`. To switch to the licensed
DIN 2014 later, create an Adobe Fonts web project, add its `<link>` to `index.html`, and put
`"din-2014"` first in `--font` in `src/index.css`.

## Preview locally

```bash
npm install      # first time only
npm run dev      # open http://localhost:5173
```

## Publish

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it
(takes ~1 minute; progress is under the repo's **Actions** tab).

```bash
git add -A
git commit -m "Update site"
git push
```

## Background

The animated background is ThreeUI's **Constellation Field** (`src/shaders/`), copied verbatim from
https://threeui.com/source-code/constellation-field.json (SHA-256 verified). It renders inside a
sandboxed iframe. The ten one-line `.html` files in `src/shaders/neuform-isolated/sources/` that
contain only a "Stub" comment stand in for variants ThreeUI imports but does not ship in this bundle.

Tune it via the props on `<ConstellationField />` in `src/App.tsx` (`speed`, `density`, `length`,
`strokeWidth`, `hue`, `brightness`, …).
