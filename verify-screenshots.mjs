import { chromium } from '/Users/eyoel/vibecoding/helper/Nucleus/website/node_modules/@playwright/test/index.mjs'
import fs from 'fs'
import path from 'path'

const outDir = path.resolve('screenshots')
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true })
}

async function run() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true })
  
  // 1. Desktop 1440px
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  })
  const page = await desktopContext.newPage()

  console.log('Navigating to homepage...')
  await page.goto('http://localhost:4173/#works', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)
  await page.screenshot({ path: path.join(outDir, '01-desktop-home.png'), fullPage: false })
  console.log('Saved 01-desktop-home.png')

  console.log('Navigating to project detail...')
  await page.goto('http://localhost:4173/#project/house-in-the-rift', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)
  await page.screenshot({ path: path.join(outDir, '02-desktop-project-detail.png'), fullPage: false })
  console.log('Saved 02-desktop-project-detail.png')

  console.log('Navigating to profile & CV...')
  await page.goto('http://localhost:4173/#about', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)
  await page.screenshot({ path: path.join(outDir, '03-desktop-about.png'), fullPage: false })
  console.log('Saved 03-desktop-about.png')

  console.log('Navigating to PDF lookbook...')
  await page.goto('http://localhost:4173/#pdf-lookbook', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1000)
  await page.screenshot({ path: path.join(outDir, '04-desktop-pdf-lookbook.png'), fullPage: false })
  console.log('Saved 04-desktop-pdf-lookbook.png')

  // 2. Mobile iPhone 13 (390 x 844)
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true
  })
  const mobilePage = await mobileContext.newPage()
  await mobilePage.goto('http://localhost:4173/#works', { waitUntil: 'networkidle' })
  await mobilePage.waitForTimeout(1000)
  await mobilePage.screenshot({ path: path.join(outDir, '05-mobile-home.png'), fullPage: false })
  console.log('Saved 05-mobile-home.png')

  await browser.close()
  console.log('All visual verification screenshots captured successfully!')
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
