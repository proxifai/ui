import { chromium } from '@playwright/test';

async function finalVerification() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    console.log('=== FINAL COMPREHENSIVE LADLE VERIFICATION ===\n');
    
    // 1. Button > Variants
    console.log('1. Button > Variants');
    await page.goto('http://localhost:61000/?story=components--button--variants', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'FINAL-01-button-variants.png', fullPage: true });
    console.log('   ✓ Screenshot: FINAL-01-button-variants.png\n');
    
    // 2. Badge > Variants
    console.log('2. Badge > Variants');
    await page.goto('http://localhost:61000/?story=components--badge--variants', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'FINAL-02-badge-variants.png', fullPage: true });
    console.log('   ✓ Screenshot: FINAL-02-badge-variants.png\n');
    
    // 3. Card > Default
    console.log('3. Card > Default');
    await page.goto('http://localhost:61000/?story=components--card--default', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'FINAL-03-card-default.png', fullPage: true });
    console.log('   ✓ Screenshot: FINAL-03-card-default.png\n');
    
    // 4. StatusBadge > All statuses (need to check the actual export name)
    console.log('4. StatusBadge');
    await page.goto('http://localhost:61000/?story=components--status-badge--all-statuses', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'FINAL-04-statusbadge.png', fullPage: true });
    console.log('   ✓ Screenshot: FINAL-04-statusbadge.png\n');
    
    // 5. Input > With label
    console.log('5. Input > With label');
    await page.goto('http://localhost:61000/?story=components--input--with-label', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'FINAL-05-input-with-label.png', fullPage: true });
    console.log('   ✓ Screenshot: FINAL-05-input-with-label.png\n');
    
    // 6. Tabs > Default
    console.log('6. Tabs > Default');
    await page.goto('http://localhost:61000/?story=components--tabs--default', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'FINAL-06-tabs-default.png', fullPage: true });
    console.log('   ✓ Screenshot: FINAL-06-tabs-default.png\n');
    
    // 7. Navigation > NavItem > Default
    console.log('7. NavItem > Default');
    await page.goto('http://localhost:61000/?story=navigation--nav-item--default', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'FINAL-07-navitem-default.png', fullPage: true });
    console.log('   ✓ Screenshot: FINAL-07-navitem-default.png\n');
    
    // 8. Design Tokens > Semantic Colors
    console.log('8. Design Tokens > Semantic Colors');
    await page.goto('http://localhost:61000/?story=design-tokens--semantic-colors', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'FINAL-08-semantic-colors.png', fullPage: true });
    console.log('   ✓ Screenshot: FINAL-08-semantic-colors.png\n');
    
    console.log('=== ALL SCREENSHOTS CAPTURED SUCCESSFULLY ===');
    
  } catch (error) {
    console.error('Error:', error.message);
    console.error(error.stack);
  } finally {
    await browser.close();
  }
}

finalVerification();
