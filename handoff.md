# Handoff: Hermella portfolio

**Phase:** V2 redesign shipped (2026-09-27). Waiting on her real project content.
**Live:** https://adoniascodes.github.io/hermella/  (repo AdoniasCodes/hermella, source on main, served from gh-pages via `pnpm run deploy`)

## What exists now
- Home (`src/pages/HomePage.tsx`): pinned 3D hero (`src/home/Hero.tsx` + `src/three/*`). A procedural house
  orbits, explodes into 4 labelled layers, then lifts the upper floors off to show the ground plan.
  Hermella's cut-out photo stands in the model as the scale figure. Then: angled credentials band,
  about collage, 3D-tilt project gallery (`src/home/WorksGallery.tsx`, scroll-driven on desktop,
  swipe on phones), her signature quote as a word-by-word reveal, process, closing CTA.
- Other routes kept and restyled through theme tokens: project detail, about, contact, PDF lookbook.
- Removed: Works page, Archive/Index page, ProjectCard (too big-studio for 5 to 7 projects).
- Package manager moved to pnpm. Fonts: Archivo (display), Instrument Sans, Instrument Serif, IBM Plex Mono.

## Open issues
1. **All project content is placeholder.** The 5 projects, Unsplash photos, awards, press items and the phone
   number `+251 91 123 4567` in `src/data/*.ts` were invented by the first build. They must be replaced
   with her real work before this goes to any studio. This is the blocker.
2. `hermella.png` is only 128x371 px. A larger transparent cut-out would look sharper in the about collage.
3. HeroScene chunk is ~266 KB gzipped (three.js). Lazy-loaded, fine for now.

## Next steps
- Get her real projects (title, year, place, 1 short paragraph, 4 to 6 images, 1 or 2 drawings) and update `src/data/projects.ts`.
- Optional: per-project rotatable massing model on project pages (deliberately skipped to keep it simple).

## Key files
`src/three/HeroScene.tsx` (camera path + explode timing), `src/three/HouseModel.tsx` (geometry),
`src/data/profile.ts`, `src/data/projects.ts`, `scripts/deploy.sh`, `scripts/shoot.mjs`.
No credentials in this project.
