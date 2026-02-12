import { chromium } from '@playwright/test';

async function verifyLadle() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  try {
    console.log('=== LADLE COMPONENT VERIFICATION ===\n');
    
    // Navigate to Ladle
    console.log('1. Navigating to Ladle homepage...');
    await page.goto('http://localhost:61000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'verify-01-homepage.png', fullPage: true });
    console.log('   ✓ Screenshot: verify-01-homepage.png\n');
    
    // 1. Button > Variants
    console.log('2. Checking Button > Variants...');
    try {
      await page.click('text=Button');
      await page.waitForTimeout(500);
      await page.click('text=Variants');
      await page.waitForTimeout(2000);
      await page.screenshot({ path: 'verify-02-button-variants.png', fullPage: true });
      console.log('   ✓ Screenshot: verify-02-button-variants.png');
      console.log('   Should show: Default, Secondary, Destructive, Outline, Ghost, Link variants\n');
    } catch (e) {
      console.log('   ✗ Error:', e.message, '\n');
    }
    
    // 2. Badge > Variants
    console.log('3. Checking Badge > Variants...');
    try {
      await page.click('text=Badge');
      await page.waitForTimeout(500);
      await page.click('text=Variants');
      await page.waitForTimeout(2000);
      await page.screenshot({ path: 'verify-03-badge-variants.png', fullPage: true });
      console.log('   ✓ Screenshot: verify-03-badge-variants.png');
      console.log('   Should show: Success (green), Warning (amber/yellow), Info (blue) badges\n');
    } catch (e) {
      console.log('   ✗ Error:', e.message, '\n');
    }
    
    // 3. Card > Default
    console.log('4. Checking Card > Default...');
    try {
      await page.click('text=Card');
      await page.waitForTimeout(500);
      await page.click('text=Default');
      await page.waitForTimeout(2000);
      await page.screenshot({ path: 'verify-04-card-default.png', fullPage: true });
      console.log('   ✓ Screenshot: verify-04-card-default.png');
      console.log('   Should show: Card with background, borders, Deploy/Cancel buttons\n');
    } catch (e) {
      console.log('   ✗ Error:', e.message, '\n');
    }
    
    // 4. StatusBadge > All statuses
    console.log('5. Checking StatusBadge...');
    try {
      // Try different variations of the name
      const statusBadgeFound = await page.locator('text=Statusbadge').first().isVisible({ timeout: 2000 })
        .catch(() => page.locator('text=StatusBadge').first().isVisible({ timeout: 2000 }))
        .catch(() => page.locator('text=Status badge').first().isVisible({ timeout: 2000 }));
      
      if (statusBadgeFound) {
        await page.click('text=Statusbadge');
        await page.waitForTimeout(500);
        // Look for "All statuses" or similar
        const allStatusesVisible = await page.locator('text=All statuses').first().isVisible({ timeout: 2000 })
          .catch(() => page.locator('text=Default').first().isVisible({ timeout: 2000 }));
        
        if (allStatusesVisible) {
          await page.click('text=All statuses').catch(() => page.click('text=Default'));
        }
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'verify-05-statusbadge.png', fullPage: true });
        console.log('   ✓ Screenshot: verify-05-statusbadge.png');
        console.log('   Should show: Running, Completed, Failed, Queued, Cancelled with colors\n');
      } else {
        console.log('   ⚠ StatusBadge component not found in sidebar\n');
      }
    } catch (e) {
      console.log('   ✗ Error:', e.message, '\n');
    }
    
    // 5. Input > With label
    console.log('6. Checking Input > With label...');
    try {
      await page.click('text=Input');
      await page.waitForTimeout(500);
      await page.click('text=With label');
      await page.waitForTimeout(2000);
      await page.screenshot({ path: 'verify-06-input-with-label.png', fullPage: true });
      console.log('   ✓ Screenshot: verify-06-input-with-label.png');
      console.log('   Should show: Input with label, proper border, background, placeholder\n');
    } catch (e) {
      console.log('   ✗ Error:', e.message, '\n');
    }
    
    // 6. Tabs > Default
    console.log('7. Checking Tabs > Default...');
    try {
      await page.click('text=Tabs');
      await page.waitForTimeout(500);
      await page.click('text=Default');
      await page.waitForTimeout(2000);
      await page.screenshot({ path: 'verify-07-tabs-default.png', fullPage: true });
      console.log('   ✓ Screenshot: verify-07-tabs-default.png');
      console.log('   Should show: Tabs with active/inactive states\n');
    } catch (e) {
      console.log('   ✗ Error:', e.message, '\n');
    }
    
    // 7. Navigation > NavItem > Default
    console.log('8. Checking Navigation > NavItem > Default...');
    try {
      await page.click('text=Navigation');
      await page.waitForTimeout(500);
      await page.click('text=Navitem');
      await page.waitForTimeout(500);
      await page.click('text=Default');
      await page.waitForTimeout(2000);
      await page.screenshot({ path: 'verify-08-navitem-default.png', fullPage: true });
      console.log('   ✓ Screenshot: verify-08-navitem-default.png');
      console.log('   Should show: Nav items with background and text colors\n');
    } catch (e) {
      console.log('   ✗ Error:', e.message, '\n');
    }
    
    // 8. Design Tokens > Semantic Colors
    console.log('9. Checking Design Tokens > Semantic Colors...');
    try {
      await page.click('text=Design tokens');
      await page.waitForTimeout(500);
      await page.click('text=Semantic colors');
      await page.waitForTimeout(2000);
      await page.screenshot({ path: 'verify-09-semantic-colors.png', fullPage: true });
      console.log('   ✓ Screenshot: verify-09-semantic-colors.png');
      console.log('   Should show: Color swatches rendering properly\n');
    } catch (e) {
      console.log('   ✗ Error:', e.message, '\n');
    }
    
    console.log('=== VERIFICATION COMPLETE ===');
    
  } catch (error) {
    console.error('Fatal error:', error.message);
  } finally {
    await browser.close();
  }
}

verifyLadle();
