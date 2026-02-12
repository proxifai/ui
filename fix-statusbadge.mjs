import { chromium } from '@playwright/test';

async function finalCheck() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    // StatusBadge > All Statuses (correct naming)
    console.log('Checking StatusBadge > AllStatuses...');
    await page.goto('http://localhost:61000/?story=components--status-badge--all-statuses', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'FINAL-04-statusbadge-CORRECTED.png', fullPage: true });
    console.log('✓ Screenshot saved\n');
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
}

finalCheck();
