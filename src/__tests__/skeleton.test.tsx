import { describe, it, expect } from "vitest"
import { render } from "@testing-library/react"
import { Skeleton } from "../components/skeleton"

describe("Skeleton", () => {
  it("renders with pulse animation class", () => {
    const { container } = render(<Skeleton data-testid="skeleton" />)
    const el = container.firstChild as HTMLElement
    expect(el).toHaveClass("animate-pulse")
  })

  it("applies custom className", () => {
    const { container } = render(<Skeleton className="h-4 w-40" />)
    const el = container.firstChild as HTMLElement
    expect(el).toHaveClass("h-4")
    expect(el).toHaveClass("w-40")
  })

  it("has the skeleton data-slot", () => {
    const { container } = render(<Skeleton />)
    const el = container.firstChild as HTMLElement
    expect(el).toHaveAttribute("data-slot", "skeleton")
  })
})
