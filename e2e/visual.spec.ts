import { test, expect } from "@playwright/test"

// Ladle exports a meta.json with all story keys at build time.
// We fetch it and dynamically generate a visual regression test per story.

interface LadleMeta {
  stories: Record<string, { name: string; levels: string[] }>
}

let stories: Record<string, { name: string; levels: string[] }> = {}

test.beforeAll(async ({ request }) => {
  const res = await request.get("/meta.json")
  const meta: LadleMeta = await res.json()
  stories = meta.stories
})

test.describe("Visual regression", () => {
  test("all stories render and match snapshots", async ({ page }) => {
    const storyKeys = Object.keys(stories)
    expect(storyKeys.length).toBeGreaterThan(0)

    for (const storyKey of storyKeys) {
      await test.step(storyKey, async () => {
        await page.goto(`/?story=${storyKey}&mode=preview`)
        await page.waitForSelector("[data-storyloaded]", { timeout: 10_000 })
        // Give animations time to settle
        await page.waitForTimeout(300)
        await expect(page).toHaveScreenshot(`${storyKey}.png`)
      })
    }
  })
})
