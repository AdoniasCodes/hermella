# Hermella portfolio: workflows

## Run locally
```
cd /Users/eyoel/vibecoding/helper/architect-portfolio
pnpm install
pnpm dev            # http://localhost:5173
```

## Check before pushing
```
pnpm lint && pnpm build
python3 ~/vibecoding/scripts/check-emdash.py src index.html
```

## Screenshot the 3D hero at scroll stages
Stops are in viewport heights (hero runs from 0 to about 2.4).
```
pnpm build && pnpm preview --port 4180 &
node scripts/shoot.mjs /tmp/shot http://localhost:4180/hermella/ 1440 900 0,1.3,2.3
node scripts/shoot.mjs /tmp/m http://localhost:4180/hermella/ 390 844 0,1.3,2.3
```
Uses Playwright from `helper/Nucleus/website/node_modules` (system Chrome).

## Deploy
```
git push origin main        # source
pnpm run deploy             # builds and pushes dist/ to gh-pages (what GitHub Pages serves)
gh api repos/AdoniasCodes/hermella/pages/builds/latest --jq .status   # wait for "built"
```
Live URL: https://adoniascodes.github.io/hermella/
A GitHub Actions workflow is not used: the local gh token lacks `workflow` scope.

## Swap in her real projects
Edit `src/data/projects.ts` (one object per project, 5 to 7 total). Images: put files in `public/work/`
and reference them as `${import.meta.env.BASE_URL}work/<file>` or keep full URLs.
Portrait / scale figure in the 3D model: `public/hermella.png` (transparent PNG cut-out).

## Tune the 3D hero
- Camera path: `KEYS` in `src/three/HeroScene.tsx` (progress, azimuth, polar, radius, target height).
- Explode / lift timing: same file, `explode` and `lift` ranges.
- Model geometry: `src/three/HouseModel.tsx`, layers 01 to 04 plus site.
- Chapter captions: `CHAPTERS` in `src/home/Hero.tsx` (ranges must match the camera timing).
