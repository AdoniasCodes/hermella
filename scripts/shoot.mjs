import { chromium } from '/Users/eyoel/vibecoding/helper/Nucleus/website/node_modules/@playwright/test/index.mjs'
// Usage: node scripts/shoot.mjs <outPrefix> <url> [width] [height] [stops in viewport heights, comma list]
const out = process.argv[2]; const url = process.argv[3]; const w = +process.argv[4]||1440; const h = +process.argv[5]||900
const stops = (process.argv[6]||'0').split(',').map(Number)
const browser = await chromium.launch({ channel: 'chrome', headless: true, args:['--use-angle=metal','--enable-gpu','--ignore-gpu-blocklist'] })
const page = await (await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage()
const errs=[]; page.on('console', m => { if (m.type()==='error'||m.type()==='warning') errs.push(m.text()) }); page.on('pageerror', e=>errs.push('PAGEERR '+e.message))
await page.goto(url, { waitUntil: 'networkidle' }); await page.waitForTimeout(2500)
for (const y of stops) {
  await page.evaluate(y => window.scrollTo(0, y * window.innerHeight), y)
  await page.waitForTimeout(1800)
  await page.screenshot({ path: `${out}-${String(y).replace('.','_')}.png` })
}
console.log(errs.slice(0,10).join('\n'))
await browser.close()
