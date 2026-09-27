# Architecture Portfolio & Monograph — AI Handover Document

> **Project Name**: Hermella Araya Manaye — Architecture Portfolio & Printable Monograph  
> **Repository**: [https://github.com/AdoniasCodes/hermella.git](https://github.com/AdoniasCodes/hermella.git) (Branch: `main`)  
> **Workspace Path**: `/Users/eyoel/vibecoding/helper/architect-portfolio`  
> **Target User**: Hermella Araya Manaye (B.Arch graduate, EiABC 2024, minimalist architect applying to top global design studios)  
> **Status**: Production-ready V1 scaffolded, styled, tested, and verified with visual screenshots.

---

## 1. Executive Summary & Purpose

This project is a high-caliber digital portfolio and printable architectural monograph created as a career-launching showcase for **Hermella Araya Manaye**, an architectural designer and spatial researcher based in Addis Ababa, Ethiopia.

### Key Goals
1. **Studio-Grade Architectural Presentation**: Reflects the rigorous, minimalist aesthetic of world-class practices (e.g., Peter Zumthor, John Pawson, Kengo Kuma, Studio Mumbai, Francis Kéré).
2. **Dual-Format Capability**: Functions both as an interactive Single Page Application (SPA) and as a print-ready A4 multi-page monograph (`@media print` styled) ready for PDF export to send to architectural hiring committees.
3. **Tectonic & Technical Rigor**: Moves beyond generic website templates by showcasing CAD vector floor plans/sections with interactive zoom/scale controls, tactile materiality specifications, and deep environmental/bioclimatic case study narratives.

---

## 2. Tech Stack & Dependencies

| Tool / Library | Version / Setup | Rationale & Details |
| :--- | :--- | :--- |
| **Vite** | `^8.3.0` | Ultra-fast build tool and dev server. |
| **React** | `^19.2.8` | Latest React core with modern hook primitives and concurrent rendering. |
| **TypeScript** | `~6.0.2` | Strict typing across all data structures, components, and props. |
| **Tailwind CSS** | `^4.3.3` (`@tailwindcss/vite`) | Tailwind v4 (CSS-first engine via `@import "tailwindcss";`, no legacy JS config file needed). |
| **Lucide React** | `^1.48.0` | Minimalist stroke icons for architectural UI navigation. |
| **Oxlint** | `^1.81.0` | Rust-based high-speed linter (0 errors, 0 warnings). |

### Current Build & Health Status
- **TypeScript Check**: `tsc -b` passes without errors.
- **Production Build**: `vite build` bundles cleanly to `dist/` in ~300ms.
- **Lint Check**: `oxlint` passes cleanly with 0 warnings.
- **Visual Verification**: Tested across Desktop (1440x900 @ 2x) and Mobile (iPhone 13 390x844 @ 2x) with Playwright screenshots in `screenshots/`.

---

## 3. Design System & Aesthetic Identity

- **Color Palette**:
  - Background primary: `#FAF9F6` (Linen / Warm Alabaster)
  - Background secondary / Callouts: `#F4F1EA` (Limestone / Muted Travertine)
  - Text & Monolith Accents: `#1C1B1A` (Charcoal Basalt)
  - Subdued Borders: `border-black/[0.08]` or `border-neutral-200`
- **Typography Matrix** (Loaded via Google Fonts in `index.html`):
  - **Headings & Architectural Statements**: `Cormorant Garamond` (300/400/500 italic & regular serif)
  - **Interface & Case Study Body**: `Inter` (300/400/500 geometric sans)
  - **CAD Annotations, Metadata & Scales**: `Space Mono` (400/700 monospaced)
- **Styling Rules**:
  - Generous negative space, Swiss grid discipline, subtle borders instead of drop shadows.
  - Interactive elements have soft hover transitions (`transition-colors duration-200`).
  - `@media print` rules hide navigational UI, strip backgrounds, enforce A4 page breaks (`page-break-after: always`), and format spreads for crisp physical printing.

---

## 4. Architecture & File Structure

```text
architect-portfolio/
├── .github/                   # Workflows (ready for CI/CD)
├── public/                    # Static assets
├── screenshots/               # Playwright visual test verification captures
├── src/
│   ├── assets/                # Local images and icons
│   ├── components/            # Reusable UI & architectural modules
│   │   ├── DrawingViewer.tsx  # Interactive SVG CAD viewer (zoom, pan, scale)
│   │   ├── Footer.tsx         # Colophon, coordinates, back-to-top
│   │   ├── Lightbox.tsx       # Fullscreen accessible image modal with keys
│   │   ├── MaterialPalette.tsx# Tactile material board specification cards
│   │   ├── Navbar.tsx         # Sticky header with active tabs & PDF CTA
│   │   ├── ProjectCard.tsx    # Works grid card and editorial list item
│   │   └── ProjectDetail.tsx  # Case study page (Brief, Strategy, Drawings, Materials)
│   ├── data/                  # Single source of truth for all content
│   │   ├── profile.ts         # Hermella's profile, bio, CV, skills, awards
│   │   └── projects.ts        # 5 detailed architectural case studies with CAD vectors
│   ├── pages/                 # Main page views
│   │   ├── AboutPage.tsx      # Manifesto, B.Arch thesis, CV timeline, software matrix
│   │   ├── ArchivePage.tsx    # Chronological table index with floating thumbnail hover
│   │   ├── ContactPage.tsx    # Studio inquiry form & communication channels
│   │   ├── PdfLookbookPage.tsx# Multi-spread A4 printable architectural monograph
│   │   └── WorksPage.tsx      # Filterable selected works showcase (Grid & List)
│   ├── types.ts               # Core TypeScript interfaces & types
│   ├── App.tsx                # App root with hash-based SPA routing
│   ├── index.css              # Tailwind v4 import & custom print utilities
│   └── main.tsx               # React DOM entry point
├── index.html                 # HTML shell with Google Fonts & SEO meta
├── package.json               # Dependencies & scripts
├── tsconfig.json              # TypeScript configuration references
├── verify-screenshots.mjs     # Playwright headless browser screenshot runner
└── vite.config.ts             # Vite configuration with base path for GitHub Pages
```

---

## 5. Detailed Component & Feature Breakdown

### A. Routing (`src/App.tsx`)
- Implements lightweight, robust **Hash-Based SPA Routing**:
  - `/#works` — Selected Works gallery
  - `/#project/:slug` — Deep Case Study (e.g., `/#project/house-in-the-rift`)
  - `/#archive` — Chronological index table
  - `/#about` — Profile, manifesto, and curriculum vitae
  - `/#contact` — Studio inquiries
  - `/#pdf-lookbook` — Paginated printable monograph
- Synchronizes with `window.addEventListener('hashchange')` so browser forward/back buttons work seamlessly without needing a heavy external router dependency.
- Smoothly resets scroll to top on route change.

### B. Interactive CAD Drawing Viewer (`src/components/DrawingViewer.tsx`)
- Displays pure SVG CAD vector drawings (plans, sections, elevations).
- Controls:
  - **Zoom In / Zoom Out**: Zoom levels from 75% to 250%.
  - **Reset Zoom**: One-click restore to 100%.
  - **Multi-Drawing Tab Switcher**: Switch between Floor Plan, Long Section, Detail Axonometric.
  - **Technical Meta Bar**: Displays active architectural scale (e.g., `1:100`, `1:50`), north arrow, drawing ID, and tectonic description.

### C. Materiality Palette (`src/components/MaterialPalette.tsx`)
- Showcases the tactile, sensory aspects of architecture.
- Displays material swatches with:
  - Material Name (e.g., *Site-Excavated Rammed Earth*, *Charred Yakisugi Cedar*, *Raw Glulam*)
  - Finish & Treatment (e.g., *Hydraulic lime stabilized, wire-brushed*)
  - Geographic Origin / Provenance (e.g., *Debre Zeit quarry, 45km radius*)
  - Tactile Description & Micro-Texture

### D. Fullscreen Lightbox (`src/components/Lightbox.tsx`)
- Accessible overlay for inspecting high-resolution architectural photography.
- Supports keyboard navigation: `Escape` to close, `ArrowLeft` / `ArrowRight` to step through gallery images.
- Displays index count (`[2 / 6]`) and technical image captions.

### E. Archive Index Table (`src/pages/ArchivePage.tsx`)
- Minimalist studio directory table of all projects.
- Live search filtering by title, typology, location, or year.
- **Floating Hover Thumbnail**: Moving the mouse over table rows displays a floating high-res thumbnail with project coordinates following the cursor (desktop only).

### F. Printable PDF Lookbook (`src/pages/PdfLookbookPage.tsx`)
- Formatted as an editorial A4 print publication.
- Spreads include:
  1. *Cover Page*: Monograph title, architect's credentials, editorial dates.
  2. *Architectural Statement & Table of Selected Works*.
  3. *Project Case Studies*: Paired hero images, spatial narratives, and technical drawings.
  4. *Colophon & Contact Spread*.
- Triggered with a "Print or Save to PDF" button that invokes `window.print()`.

---

## 6. Data Architecture & How to Customize

All content is strictly decoupled from the presentation components.

### 1. Architect's Profile (`src/data/profile.ts`)
To update Hermella's personal info, edit the `architectProfile` object:
- `name`: Full name
- `title`: Professional title
- `location`: Base city and mobility status
- `email` & `phone`: Contact details
- `portraitImage`: File path in `src/assets/` or URL
- `philosophyStatement`: Primary design manifesto quote
- `bioParagraphs`: Multi-paragraph professional narrative
- `experience`: Array of `ExperienceItem` (studio, role, dates, bullet achievements)
- `education`: Array of `EducationItem` (B.Arch institution, honors, thesis title)
- `skills`: Categorized architectural proficiencies (BIM, Parametric, Environmental, Craft)
- `awardsAndExhibitions`: Honor list

### 2. Project Catalog (`src/data/projects.ts`)
Contains 5 fully realized architectural case studies adhering to the `Project` interface (`src/types.ts`):
1. **01. Monolith & Horizon House** (`house-in-the-rift`) — Residential | Rammed Earth & Basalt
2. **02. Pavilion of Quietude & Water** (`pavilion-of-quietude`) — Cultural | Charred Timber & Reflecting Pool
3. **03. The Tannery Loft & Atelier** (`tannery-loft-atelier`) — Adaptive Reuse | Exposed Steel & Historic Masonry
4. **04. Highland Botanical Institute** (`botanical-institute`) — Institutional | Stepped Earth-Block Terraces
5. **05. Micro-Dwelling 24** (`micro-dwelling-24`) — Prefab & Research | Kinetic Compact Living

To swap in Hermella's real drawings or renders:
- Replace `heroImage` and `galleryImages` URLs with local paths (`/src/assets/...`) or Cloudinary/S3 URLs.
- Update `drawings`: Supply real SVG markup or image URLs with scales (`1:50`, `1:100`).
- Adjust `overview`, `designChallenge`, `spatialStrategy`, and `environmentalStrategy`.

---

## 7. Developer Cheatsheet & Operational Commands

Run all commands from `/Users/eyoel/vibecoding/helper/architect-portfolio`:

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (http://localhost:5173)
npm run dev

# 3. Check types and build production bundle into dist/
npm run build

# 4. Preview production build locally (http://localhost:4173)
npm run preview

# 5. Run Oxlint code inspection
npm run lint

# 6. Capture visual regression screenshots with Playwright
node verify-screenshots.mjs
```

---

## 8. Deployment Configuration

- **Repository**: `https://github.com/AdoniasCodes/hermella.git`
- **GitHub Pages Configuration**:
  - `vite.config.ts` has `base: process.env.NODE_ENV === 'production' ? '/hermella/' : '/'` configured.
  - Can be built and pushed to a `gh-pages` branch or deployed via GitHub Actions.
- **Vercel / Netlify Configuration**:
  - If deploying to a custom domain root or Vercel, change `base` in `vite.config.ts` to `'/'` or leave it empty so root paths resolve correctly.

---

## 9. Recommended Next Tasks & Prompts for the Next AI

Here are high-impact directions the incoming AI can tackle immediately:

### Task Idea 1: Blueprint / Dark Mode Toggle
> "Add a subtle architectural 'Blueprint Mode' or 'Dark Charcoal Mode' toggle in the Navbar that shifts the linen theme (`#FAF9F6`) to deep cyanotype blueprint (`#0B1D3A` with `#89CFF0` line work) or museum charcoal (`#121212`)."

### Task Idea 2: Interactive 3D Massing Viewer (Three.js / React Three Fiber)
> "Incorporate a lightweight 3D massing model viewer in `ProjectDetail.tsx` using `@react-three/fiber` or an interactive canvas where viewers can rotate a wireframe/clay massing model of Monolith House."

### Task Idea 3: Working Contact Form Submission
> "Integrate Formspree, Resend, or EmailJS into `src/pages/ContactPage.tsx` so client inquiries directly email Hermella's inbox with form validation and a minimalist success state."

### Task Idea 4: Full Multi-Language / Internationalization Support
> "Add a minimal language switcher in the header supporting English and Amharic / French for international architectural competition applications."

### Task Idea 5: Automated GitHub Actions CI/CD Deploy
> "Create `.github/workflows/deploy.yml` that runs `npm run lint`, `npm run build`, and automatically deploys the `dist/` directory to GitHub Pages upon pushing to `main`."

---

## 10. Important Gotchas to Keep in Mind

1. **Tailwind CSS v4 Engine**:
   - This project uses `@tailwindcss/vite` and Tailwind v4.
   - Do **NOT** try to create a `tailwind.config.js` or use legacy v3 `@tailwind base;` directives.
   - Configuration and custom theme extensions belong in `src/index.css` using modern CSS properties or Tailwind v4 `@theme` directives.
2. **Hash-Based Routing**:
   - Navigation links should use `window.location.hash` or the provided navigation handlers (`onSelectProject`, `setCurrentTab`).
   - This guarantees 100% static hosting compatibility on GitHub Pages without requiring server-side fallback rules for 404s.
3. **Print Styles**:
   - The print stylesheet relies on `print:hidden`, `print:block`, `page-break`, and A4 dimensions in `src/pages/PdfLookbookPage.tsx`. When editing this page, test changes by pressing `Cmd + P` or checking print preview.
