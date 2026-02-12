import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "../components/button"

describe("Button", () => {
  it("renders with text content", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument()
  })

  it("renders default variant", () => {
    render(<Button>Default</Button>)
    const btn = screen.getByRole("button")
    expect(btn).toHaveAttribute("data-variant", "default")
  })

  it("renders all variants", () => {
    const variants = [
      "default",
      "destructive",
      "outline",
      "secondary",
      "ghost",
      "link",
    ] as const
    for (const variant of variants) {
      const { unmount } = render(<Button variant={variant}>{variant}</Button>)
      const btn = screen.getByRole("button")
      expect(btn).toHaveAttribute("data-variant", variant)
      unmount()
    }
  })

  it("renders all sizes", () => {
    const sizes = [
      "default",
      "xs",
      "sm",
      "lg",
      "icon",
      "icon-xs",
      "icon-sm",
      "icon-lg",
    ] as const
    for (const size of sizes) {
      const { unmount } = render(<Button size={size}>S</Button>)
      const btn = screen.getByRole("button")
      expect(btn).toHaveAttribute("data-size", size)
      unmount()
    }
  })

  it("handles click events", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click</Button>)
    await user.click(screen.getByRole("button"))
    expect(onClick).toHaveBeenCalledOnce()
  })

  it("does not fire click when disabled", async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(
      <Button onClick={onClick} disabled>
        Disabled
      </Button>
    )
    await user.click(screen.getByRole("button"))
    expect(onClick).not.toHaveBeenCalled()
  })

  it("applies custom className", () => {
    render(<Button className="custom-class">Custom</Button>)
    expect(screen.getByRole("button")).toHaveClass("custom-class")
  })

  it("renders as child element with asChild", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )
    const link = screen.getByRole("link", { name: "Link Button" })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/test")
  })
})
