import { chromium } from '@playwright/test';

async function getStoryUrls() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:61000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Expand Button to see its stories
    await page.click('text=Button');
    await page.waitForTimeout(500);
    
    // Get all links in the sidebar
    const links = await page.locator('aside a').all();
    
    console.log('Found story links:');
    for (const link of links) {
      const text = await link.textContent();
      const href = await link.getAttribute('href');
      if (href && text) {
        console.log(`  ${text.trim()}: ${href}`);
      }
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
}

getStoryUrls();
