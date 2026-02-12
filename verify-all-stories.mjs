import { chromium } from '@playwright/test';

async function verifyAllStories() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    console.log('=== COMPREHENSIVE LADLE VERIFICATION ===\n');
    
    // 1. Button > Variants
    console.log('1. Button > Variants');
    await page.goto('http://localhost:61000/?story=button--variants', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'final-01-button-variants.png', fullPage: true });
    console.log('   ✓ Screenshot saved\n');
    
    // 2. Badge > Variants
    console.log('2. Badge > Variants');
    await page.goto('http://localhost:61000/?story=badge--variants', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'final-02-badge-variants.png', fullPage: true });
    console.log('   ✓ Screenshot saved\n');
    
    // 3. Card > Default
    console.log('3. Card > Default');
    await page.goto('http://localhost:61000/?story=card--default', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'final-03-card-default.png', fullPage: true });
    console.log('   ✓ Screenshot saved\n');
    
    // 4. StatusBadge > All statuses
    console.log('4. StatusBadge > All statuses');
    await page.goto('http://localhost:61000/?story=statusbadge--all-statuses', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'final-04-statusbadge-all.png', fullPage: true });
    console.log('   ✓ Screenshot saved\n');
    
    // 5. Input > With label
    console.log('5. Input > With label');
    await page.goto('http://localhost:61000/?story=input--with-label', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'final-05-input-with-label.png', fullPage: true });
    console.log('   ✓ Screenshot saved\n');
    
    // 6. Tabs > Default
    console.log('6. Tabs > Default');
    await page.goto('http://localhost:61000/?story=tabs--default', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'final-06-tabs-default.png', fullPage: true });
    console.log('   ✓ Screenshot saved\n');
    
    // 7. Navigation > NavItem > Default
    console.log('7. Navigation > NavItem > Default');
    await page.goto('http://localhost:61000/?story=navitem--default', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'final-07-navitem-default.png', fullPage: true });
    console.log('   ✓ Screenshot saved\n');
    
    // 8. Design Tokens > Semantic Colors
    console.log('8. Design Tokens > Semantic Colors');
    await page.goto('http://localhost:61000/?story=semantic-colors--default', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'final-08-semantic-colors.png', fullPage: true });
    console.log('   ✓ Screenshot saved\n');
    
    console.log('=== ALL SCREENSHOTS CAPTURED ===');
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
}

verifyAllStories();
