import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Textarea } from "../components/textarea"

describe("Textarea", () => {
  it("renders with placeholder", () => {
    render(<Textarea placeholder="Write here..." />)
    expect(screen.getByPlaceholderText("Write here...")).toBeInTheDocument()
  })

  it("handles controlled value and onChange", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Textarea value="" onChange={onChange} />)
    const textarea = screen.getByRole("textbox")
    await user.type(textarea, "hello")
    expect(onChange).toHaveBeenCalled()
  })

  it("is disabled when disabled prop is set", () => {
    render(<Textarea disabled />)
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  it("applies custom className", () => {
    render(<Textarea className="min-h-[200px]" />)
    expect(screen.getByRole("textbox")).toHaveClass("min-h-[200px]")
  })

  it("has textarea data-slot", () => {
    render(<Textarea />)
    expect(screen.getByRole("textbox")).toHaveAttribute(
      "data-slot",
      "textarea"
    )
  })
})
