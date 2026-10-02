# sjlieu.github.io

Personal academic website — React + Vite, deployed to GitHub Pages at https://sjlieu.github.io.

## Edit the content

All text lives in [`src/content.ts`](src/content.ts): bio, links, education, news, publications, projects.
Items marked `TODO` are placeholders.

- **Photo:** put a square image at `public/profile.jpg`, then set `photo: "/profile.jpg"`.
- **CV:** put your PDF at `public/cv.pdf`, then set the CV link to `"/cv.pdf"`.
- **Papers:** PDFs can go in `public/papers/` and be linked as `"/papers/name.pdf"`.

Links with an empty `href` are hidden automatically.

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
