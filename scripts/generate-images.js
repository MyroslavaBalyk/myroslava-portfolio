const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generateImages() {
  console.log('Generating images for split view component...');
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport size
  await page.setViewport({ width: 800, height: 600 });
  
  // Generate design view image
  const designHtmlPath = path.join(__dirname, '../public/images/design-view.html');
  const designHtmlUrl = `file://${designHtmlPath}`;
  await page.goto(designHtmlUrl);
  await page.screenshot({ path: path.join(__dirname, '../public/images/design-view.jpg') });
  console.log('Design view image generated');
  
  // Generate code view image
  const codeHtmlPath = path.join(__dirname, '../public/images/code-view.html');
  const codeHtmlUrl = `file://${codeHtmlPath}`;
  await page.goto(codeHtmlUrl);
  await page.screenshot({ path: path.join(__dirname, '../public/images/code-view.jpg') });
  console.log('Code view image generated');
  
  await browser.close();
  console.log('All images generated successfully!');
}

generateImages().catch(console.error);
