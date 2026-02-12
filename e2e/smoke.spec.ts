import { test, expect } from "@playwright/test"

test("Ladle loads and sidebar renders", async ({ page }) => {
  await page.goto("/")
  await page.waitForLoadState("networkidle")
  await expect(page.getByText("Components", { exact: true })).toBeVisible()
  console.log("Sidebar loads with Components category")
})

test("Button story renders", async ({ page }) => {
  await page.goto("/?story=components--button--variants&mode=preview")
  await page.waitForSelector("[data-storyloaded]", { timeout: 10_000 })
  await page.waitForTimeout(500)
  // Check for button text content rather than button elements
  // (Ladle preview mode renders the story inside a wrapper)
  await expect(page.getByText("Default")).toBeVisible()
  await expect(page.getByText("Secondary")).toBeVisible()
  await expect(page.getByText("Destructive")).toBeVisible()
  console.log("Button variants story renders all variants")
})

test("Badge story renders", async ({ page }) => {
  await page.goto("/?story=components--badge--variants&mode=preview")
  await page.waitForSelector("[data-storyloaded]", { timeout: 10_000 })
  await page.waitForTimeout(500)
  await expect(page.getByText("Success")).toBeVisible()
  await expect(page.getByText("Warning")).toBeVisible()
  await expect(page.getByText("Info")).toBeVisible()
  console.log("Badge variants story renders all variants")
})

test("Design tokens page renders", async ({ page }) => {
  await page.goto("/?story=design-tokens--semantic-colors&mode=preview")
  await page.waitForSelector("[data-storyloaded]", { timeout: 10_000 })
  await page.waitForTimeout(500)
  await expect(page.getByText("Semantic Colors")).toBeVisible()
  await expect(page.getByText("primary", { exact: true }).first()).toBeVisible()
  console.log("Design tokens page renders color swatches")
})

test("NavItem story renders", async ({ page }) => {
  await page.goto("/?story=navigation--navitem--default&mode=preview")
  await page.waitForSelector("[data-storyloaded]", { timeout: 10_000 })
  await page.waitForTimeout(500)
  await expect(page.getByText("All Tasks")).toBeVisible()
  await expect(page.getByText("Docs")).toBeVisible()
  console.log("NavItem story renders navigation items")
})

test("StatusBadge story renders", async ({ page }) => {
  await page.goto("/?story=components--statusbadge--all-statuses&mode=preview")
  await page.waitForSelector("[data-storyloaded]", { timeout: 10_000 })
  await page.waitForTimeout(500)
  await expect(page.getByText("Running")).toBeVisible()
  await expect(page.getByText("Completed")).toBeVisible()
  await expect(page.getByText("Failed")).toBeVisible()
  console.log("StatusBadge story renders all statuses")
})

test("Dialog story renders", async ({ page }) => {
  await page.goto("/?story=components--dialog--default&mode=preview")
  await page.waitForSelector("[data-storyloaded]", { timeout: 10_000 })
  await page.waitForTimeout(500)
  await expect(page.getByText("Open Dialog")).toBeVisible()
  console.log("Dialog story renders trigger button")
})
