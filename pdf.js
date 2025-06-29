import puppeteer from 'puppeteer'
import express from 'express'
import path from 'path'

const app = express()
const prefix = process.env.NODE_ENV === 'pages' ? '/cv-resume/' : '/'
app.use(prefix, express.static('dist'))
const server = app.listen(3000)

;(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
  })
  const page = await browser.newPage()
  await page.goto('http://localhost:3000'+prefix+'index.html', {
    waitUntil: 'networkidle0',
  })
  await page.pdf({
    path: `${path.join(import.meta.dirname, 'dist/files/gordon-peter-wills_cv-resume.pdf')}`,
    format: 'A4',
    margin: {
      top: 30,
      bottom: 20,
      right: 0,
      left: 0,
    },
  })
  await browser.close()
  server.close()
})()
