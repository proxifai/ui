import { chromium } from '@playwright/test';

async function inspectLadle() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    await page.goto('http://localhost:61000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    // Get the current URL
    const url = page.url();
    console.log('Current URL:', url);
    
    // Click on Button > Variants in the expanded sidebar
    console.log('\nClicking Button...');
    await page.click('text=Button');
    await page.waitForTimeout(1000);
    
    // Take a screenshot to see what's available
    await page.screenshot({ path: 'inspect-button-expanded.png', fullPage: true });
    console.log('Screenshot saved: inspect-button-expanded.png');
    
    // Try to find Variants link
    const variantsVisible = await page.locator('text=Variants').isVisible({ timeout: 2000 }).catch(() => false);
    console.log('Variants visible:', variantsVisible);
    
    if (variantsVisible) {
      console.log('\nClicking Variants...');
      await page.click('text=Variants');
      await page.waitForTimeout(2000);
      
      const newUrl = page.url();
      console.log('New URL after clicking Variants:', newUrl);
      
      await page.screenshot({ path: 'inspect-variants.png', fullPage: true });
      console.log('Screenshot saved: inspect-variants.png');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
}

inspectLadle();
