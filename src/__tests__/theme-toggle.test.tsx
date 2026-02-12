import { describe, it, expect, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ThemeProvider } from "../components/theme-provider"
import { ThemeToggle } from "../components/theme-toggle"

describe("ThemeToggle", () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.classList.remove("light", "dark")
  })

  it("renders a button", () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    )
    expect(screen.getByRole("button")).toBeInTheDocument()
  })

  it("toggles from dark to light on click", async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider defaultTheme="dark">
        <ThemeToggle />
      </ThemeProvider>
    )

    const btn = screen.getByRole("button")
    expect(btn).toHaveAttribute("title", "Switch to light mode")

    await user.click(btn)
    expect(btn).toHaveAttribute("title", "Switch to dark mode")
  })

  it("toggles from light to dark on click", async () => {
    const user = userEvent.setup()
    render(
      <ThemeProvider defaultTheme="light">
        <ThemeToggle />
      </ThemeProvider>
    )

    const btn = screen.getByRole("button")
    expect(btn).toHaveAttribute("title", "Switch to dark mode")

    await user.click(btn)
    expect(btn).toHaveAttribute("title", "Switch to light mode")
  })

  it("applies custom className", () => {
    render(
      <ThemeProvider>
        <ThemeToggle className="extra" />
      </ThemeProvider>
    )
    expect(screen.getByRole("button")).toHaveClass("extra")
  })
})
