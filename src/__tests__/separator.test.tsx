import { describe, it, expect } from "vitest"
import { render } from "@testing-library/react"
import { Separator } from "../components/separator"

describe("Separator", () => {
  it("renders horizontal by default", () => {
    const { container } = render(<Separator />)
    const el = container.firstChild as HTMLElement
    expect(el).toHaveAttribute("data-orientation", "horizontal")
  })

  it("renders vertical orientation", () => {
    const { container } = render(<Separator orientation="vertical" />)
    const el = container.firstChild as HTMLElement
    expect(el).toHaveAttribute("data-orientation", "vertical")
  })

  it("has separator data-slot", () => {
    const { container } = render(<Separator />)
    const el = container.firstChild as HTMLElement
    expect(el).toHaveAttribute("data-slot", "separator")
  })

  it("applies custom className", () => {
    const { container } = render(<Separator className="my-4" />)
    const el = container.firstChild as HTMLElement
    expect(el).toHaveClass("my-4")
  })
})
