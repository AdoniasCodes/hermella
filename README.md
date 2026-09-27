# Minimalist Architecture Portfolio & Monograph

A bespoke, editorial digital portfolio and printable monograph crafted for a minimalist-first architect. Designed with the typographic discipline of Swiss modernist design, raw materiality aesthetics, interactive CAD vector drawings, and print-ready PDF monograph layouts.

---

## Quick Start (Run Locally)

```bash
# Navigate to project directory
cd architect-portfolio

# Install dependencies (if not already installed)
npm install

# Start development server
npm run dev

# Or build & preview production
npm run build
npm run preview
```

Open `http://localhost:5173` in your browser.

---

## Key Features

1. **Editorial Architecture Aesthetics**:
   - Monograph typography: *Cormorant Garamond* (poetic architectural serif), *Inter* (modernist geometric sans), and *Space Mono* (technical CAD annotations).
   - Warm linen and limestone palette (`#FAF9F6`, `#F4F1EA`, `#1C1B1A`).
   - Generous negative space and subtle micro-interactions.

2. **5 Realistic Minimalist Architecture Projects**:
   - **01. Monolith & Horizon House** (*Residential*) — Rammed earth & basalt sanctuary on the Great Rift Escarpment.
   - **02. Pavilion of Quietude & Water** (*Cultural*) — Charred Yakisugi timber and acoustic reflecting pool on a volcanic caldera rim.
   - **03. The Tannery Loft & Atelier** (*Adaptive Reuse*) — Steel and glulam structural insertion into a 1940s masonry industrial tannery.
   - **04. Highland Botanical Institute** (*Institutional & Research*) — Stepped earth-block terraces along an 18% hillside slope.
   - **05. Micro-Dwelling 24** (*Prefab & Research*) — High-density urban living prototype with kinetic architectural cabinetry.

3. **Interactive CAD Drawings & Detailing**:
   - Built-in interactive SVG drawings with zoom/pan controls, scale notations (`1:100`, `1:50`, `1:200`), north arrows, and drawing legends.
   - Tactile materiality boards specifying stone origins, timber finishes, and concrete textures.

4. **Multi-Page Architecture Experience**:
   - **Selected Works** (Grid & Editorial List views with typology filters).
   - **Project Detail** (Deep case study with narrative breakdown: Brief, Topographic Response, Spatial Strategy, Bioclimatic Performance).
   - **Index / Archive Table** (Searchable catalog with hover thumbnail preview).
   - **Profile & CV** (Architectural manifesto, professional experience, B.Arch honors, software skills, awards).
   - **Inquiries / Contact** (Minimalist inquiry form with direct studio coordinates).

5. **One-Click PDF Lookbook / Print Monograph**:
   - Click the **"PDF Lookbook"** button in the header or visit `/#pdf-lookbook`.
   - Formatted with `@media print` rules, A4 aspect ratios, and clean page breaks.
   - Click **"Print or Save to PDF"** to generate an architectural lookbook ready to send to hiring directors.

---

## How to Customize with Her Real Projects & Information

All data is separated into clean, typed configuration files:

- **Architect Profile & CV**: Edit `src/data/profile.ts`
  - Name, title, email, phone, location
  - Architectural manifesto & biography
  - Experience, education, software proficiencies, awards
- **Projects & Drawings**: Edit `src/data/projects.ts`
  - Add, remove, or modify project titles, typologies, locations, and areas
  - Replace image URLs with her actual renders or photography
  - Add her real floor plans and technical drawings

---

## How to Host (Deploy in 2 Minutes)

### Option A: Vercel (Recommended)
1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **"Add New Project"** → Import the repo.
3. Framework preset will automatically detect **Vite**. Click **Deploy**!

### Option B: Netlify
Run in terminal:
```bash
npx netlify deploy --prod --dir=dist
```

### Option C: GitHub Pages
Run `npm run build` and publish the `dist/` directory.
