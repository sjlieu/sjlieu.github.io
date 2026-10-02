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

## Top navigation

The dock at the top is ThreeUI's **AnimatedTopDock** (sable variant), from
https://threeui.com/source-code/animated-top-dock.json (SHA-256 verified). Its spring controller
(`src/shaders/animated-top-dock/topDockController.ts`), its styles (`src/shaders/threeui.css`), and its
Fragment Mono font (`src/shaders/fonts/`, extracted from the `@designcodeio/threeui` 1.2.0 package
and hash-checked) are unmodified. The published component only renders demo items, so
`src/components/SiteDock.tsx` rebuilds its sable markup with this site's sections; the demo wrapper
and the retro/glass WebGL variants (which need Three.js r128) are not included.

## Cover image credits

- `public/projects/bikeshare.jpg`: 3D render of the NYC Citi Bike OD pairs from the W2 study
  (1,881 pairs as arcs; color = average e-bike share) over NYC building footprints extruded by
  roof height (NYC Open Data `5zhs-2jue`).
- `public/projects/birds-feather.jpg`: 3D render of Atlanta census tracts (2010) raised by
  restaurant-trip accessibility uncertainty (W7 data), with restaurant trips from tract
  13121011419 as arcs colored by home block group.
- Both are rendered with deck.gl from the pages in `cover-originals/render3d/` (local only; serve
  that folder, e.g. `python3 -m http.server`, and open `index.html` or `atl.html`).
- `public/projects/e-scooter.jpg`, `pedestrian.jpg`, `school-bus.jpg`: free photos from
  [Unsplash](https://unsplash.com/license) (Unsplash License; no attribution required).
