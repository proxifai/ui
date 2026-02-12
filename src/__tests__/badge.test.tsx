import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Badge } from "../components/badge"

describe("Badge", () => {
  it("renders with text content", () => {
    render(<Badge>Active</Badge>)
    expect(screen.getByText("Active")).toBeInTheDocument()
  })

  it("renders default variant", () => {
    render(<Badge>Default</Badge>)
    expect(screen.getByText("Default")).toHaveAttribute(
      "data-variant",
      "default"
    )
  })

  it("renders all variants", () => {
    const variants = [
      "default",
      "secondary",
      "destructive",
      "outline",
      "ghost",
      "link",
      "success",
      "warning",
      "info",
    ] as const
    for (const variant of variants) {
      const { unmount } = render(<Badge variant={variant}>{variant}</Badge>)
      expect(screen.getByText(variant)).toHaveAttribute(
        "data-variant",
        variant
      )
      unmount()
    }
  })

  it("applies custom className", () => {
    render(<Badge className="extra">Custom</Badge>)
    expect(screen.getByText("Custom")).toHaveClass("extra")
  })

  it("renders as child element with asChild", () => {
    render(
      <Badge asChild>
        <a href="/status">Link Badge</a>
      </Badge>
    )
    const link = screen.getByRole("link", { name: "Link Badge" })
    expect(link).toBeInTheDocument()
  })
})
