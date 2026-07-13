import { chromium } from 'playwright'

const BASE = process.env.BASE || 'http://localhost:4173'
const errors = []
const warnings = []

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1366, height: 900 } })

page.on('console', (msg) => {
  const t = msg.type()
  if (t === 'error') errors.push(`[console.error] ${msg.text()}`)
  else if (t === 'warning') warnings.push(`[console.warn] ${msg.text()}`)
})
page.on('pageerror', (err) => errors.push(`[pageerror] ${err.message}`))

async function check(path, name, action) {
  await page.goto(BASE + path, { waitUntil: 'networkidle' })
  await page.waitForTimeout(2500)
  if (action) await action()
  await page.waitForTimeout(1500)
  const text = await page.evaluate(() => document.body.innerText)
  const canvases = await page.locator('canvas').count()
  await page.screenshot({ path: `smoke-${name}.png`, fullPage: false })
  console.log(`\n=== ${name} (${path}) ===`)
  console.log('  canvas sayısı:', canvases)
  console.log('  metin örneği:', JSON.stringify(text.replace(/\s+/g, ' ').slice(0, 120)))
}

try {
  // Dashboard
  await check('/', 'dashboard')

  // Grafikler — uygulama içi link ile
  await check('/', 'charts', async () => {
    await page.getByRole('link', { name: /Grafikler/i }).click()
    await page.waitForTimeout(500)
  })

  // Ayarlar
  await check('/ayarlar', 'settings')

  // Tema toggle testi
  await page.goto(BASE + '/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1500)
  await page.getByRole('button', { name: /Tema değiştir/i }).click()
  await page.waitForTimeout(800)
  const isLight = await page.evaluate(() => document.documentElement.classList.contains('light'))
  console.log('\n=== tema toggle ===\n  açık tema aktif:', isLight)
} catch (e) {
  errors.push(`[test-exception] ${e.message}`)
} finally {
  await browser.close()
}

console.log('\n================ SONUÇ ================')
console.log('Hata sayısı:', errors.length)
errors.forEach((e) => console.log('  ✗', e))
console.log('Uyarı sayısı:', warnings.length)
warnings.slice(0, 8).forEach((w) => console.log('  !', w))
process.exit(errors.length ? 1 : 0)
