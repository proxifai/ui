import { chromium } from '@playwright/test';

async function verifyColorStyling() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    console.log('=== VERIFYING COLOR STYLING ISSUES ===\n');
    
    // 1. Badge > Variants
    console.log('1. Badge > Variants');
    await page.goto('http://localhost:61000/?story=components--badge--variants', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'color-check-01-badge-variants.png', fullPage: true });
    console.log('   ✓ Screenshot: color-check-01-badge-variants.png\n');
    
    // 2. StatusBadge > All Statuses
    console.log('2. StatusBadge > All Statuses');
    await page.goto('http://localhost:61000/?story=components--statusbadge--all-statuses', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'color-check-02-statusbadge.png', fullPage: true });
    console.log('   ✓ Screenshot: color-check-02-statusbadge.png\n');
    
    // 3. Design Tokens > Semantic Colors
    console.log('3. Design Tokens > Semantic Colors');
    await page.goto('http://localhost:61000/?story=design-tokens--semantic-colors', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'color-check-03-semantic-colors.png', fullPage: true });
    console.log('   ✓ Screenshot: color-check-03-semantic-colors.png\n');
    
    // 4. Design Tokens > Status Colors
    console.log('4. Design Tokens > Status Colors');
    await page.goto('http://localhost:61000/?story=design-tokens--status-colors', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'color-check-04-status-colors.png', fullPage: true });
    console.log('   ✓ Screenshot: color-check-04-status-colors.png\n');
    
    console.log('=== ALL COLOR CHECKS COMPLETE ===');
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
}

verifyColorStyling();
