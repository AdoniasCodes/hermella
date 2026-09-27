# Architecture Portfolio — Project Context

## Purpose
A surprise gift and high-caliber digital & printable architecture portfolio for an architect who graduated 2 years ago, is a minimalist-first designer, and is applying for architecture roles at top design studios.

## Current State
- **Status**: Complete V1 scaffolded, styled, verified with visual screenshots, and ready to run or host.
- **Tech Stack**: Vite + React 19 + TypeScript + Tailwind CSS v4 + Lucide Icons.
- **Visual Design**: Warm linen/limestone palette, Cormorant Garamond + Inter + Space Mono typography, Swiss minimalist grid, interactive CAD vector drawings with zoom/pan, full-screen lightbox, and print-ready PDF monograph view.
- **Verification**: Verified with production build (`npm run build`), clean TypeScript (`tsc -b`), and Playwright visual screenshots on desktop (1440px) and mobile (iPhone 13 @ 390px).

## Project Structure
- `src/data/projects.ts`: Central catalog of 5 realistic architectural projects with specs, drawings, and materials.
- `src/data/profile.ts`: Profile, manifesto, CV, experience, education, software competencies, awards.
- `src/components/`:
  - `Navbar.tsx`: Responsive navigation with PDF Lookbook action.
  - `Footer.tsx`: Studio coordinates and back-to-top.
  - `ProjectCard.tsx`: Grid & Editorial layout modes.
  - `ProjectDetail.tsx`: Comprehensive case study view.
  - `DrawingViewer.tsx`: Interactive SVG floor plans/sections with zoom and scale.
  - `MaterialPalette.tsx`: Tactile specification cards.
  - `Lightbox.tsx`: Full-screen accessible image inspector.
- `src/pages/`:
  - `WorksPage.tsx`: Selected works with typology filtering.
  - `ArchivePage.tsx`: Searchable catalog table with floating thumbnail preview.
  - `AboutPage.tsx`: Architectural manifesto, CV, software skills.
  - `ContactPage.tsx`: Inquiry form and coordinates.
  - `PdfLookbookPage.tsx`: Paginated A4 monograph layout with print-to-PDF trigger.

## Next Steps When Real Data Arrives
1. Swap her actual name and contact details in `src/data/profile.ts`.
2. Replace project descriptions and image URLs in `src/data/projects.ts` with her real portfolio renders/drawings.
3. Deploy to Vercel via `vercel` or link to GitHub repository.
