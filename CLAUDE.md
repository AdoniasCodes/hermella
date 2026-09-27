# Hermella portfolio: project rules

Workspace rules (pnpm, no em dashes, git identity, no AI attribution) live in `/Users/eyoel/vibecoding/CLAUDE.md`.

- This is a personal portfolio for one early-career architect with 5 to 7 projects. Keep it simple:
  no big-studio patterns (project index/archive pages, filters, company-style stat counters). (Eyoel, 2026-09-27)
- Design reference: the Webflow "Optik" template pin (giant heavy name with a building in front of it,
  angled dark band, about block with photo collage). Keep that essence. (Eyoel, 2026-09-27)
- Keep her signature quote on the site: "A building should not fight its climate or pretend to be
  weightless. When we honor the raw weight of stone and the movement of the sun, architecture achieves
  quiet permanence." It lives in `src/data/profile.ts` as `signatureQuote`. (Eyoel, 2026-09-27)
- 3D interactive, scroll-driven elements are a core requirement, not decoration. (Eyoel, 2026-09-27)
- Tailwind v4: theme tokens go in `src/index.css` `@theme`. No tailwind.config.js.
- Hash routing only (`#about`, `#contact`, `#project/<slug>`, `#work`, `#pdf-lookbook`) so GitHub Pages needs no 404 fallback.
