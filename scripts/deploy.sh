#!/usr/bin/env bash
# Build and publish dist/ to the gh-pages branch (GitHub Pages serves it). Normal push, no force.
set -euo pipefail
cd "$(dirname "$0")/.."
pnpm lint
NODE_ENV=production pnpm build
touch dist/.nojekyll
WT=$(mktemp -d)
git fetch -q origin gh-pages
git worktree add -q "$WT" origin/gh-pages --detach
trap 'git worktree remove --force "$WT"' EXIT
find "$WT" -mindepth 1 -maxdepth 1 ! -name .git -exec rm -rf {} +
cp -R dist/. "$WT"/
cd "$WT"
git add -A
if git diff --cached --quiet; then echo "Nothing changed"; exit 0; fi
git commit -qm "Deploy $(git -C "$OLDPWD" rev-parse --short HEAD)"
git push -q origin HEAD:gh-pages
echo "Pushed to gh-pages"
