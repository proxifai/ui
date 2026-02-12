import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Input } from "../components/input"

describe("Input", () => {
  it("renders with placeholder", () => {
    render(<Input placeholder="Enter text" />)
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument()
  })

  it("handles controlled value and onChange", async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<Input value="" onChange={onChange} />)
    const input = screen.getByRole("textbox")
    await user.type(input, "hello")
    expect(onChange).toHaveBeenCalled()
  })

  it("is disabled when disabled prop is set", () => {
    render(<Input disabled />)
    expect(screen.getByRole("textbox")).toBeDisabled()
  })

  it("applies custom className", () => {
    render(<Input className="custom-input" />)
    expect(screen.getByRole("textbox")).toHaveClass("custom-input")
  })

  it("renders with type attribute", () => {
    render(<Input type="email" data-testid="email" />)
    expect(screen.getByTestId("email")).toHaveAttribute("type", "email")
  })
})
