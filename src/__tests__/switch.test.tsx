import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Switch } from "../components/switch"

describe("Switch", () => {
  it("renders", () => {
    render(<Switch aria-label="toggle" />)
    expect(screen.getByRole("switch")).toBeInTheDocument()
  })

  it("toggles on click", async () => {
    const user = userEvent.setup()
    const onCheckedChange = vi.fn()
    render(
      <Switch aria-label="toggle" onCheckedChange={onCheckedChange} />
    )
    await user.click(screen.getByRole("switch"))
    expect(onCheckedChange).toHaveBeenCalledWith(true)
  })

  it("supports controlled mode", () => {
    const { rerender } = render(
      <Switch aria-label="toggle" checked={false} />
    )
    expect(screen.getByRole("switch")).toHaveAttribute("data-state", "unchecked")

    rerender(<Switch aria-label="toggle" checked={true} />)
    expect(screen.getByRole("switch")).toHaveAttribute("data-state", "checked")
  })

  it("renders default size", () => {
    render(<Switch aria-label="toggle" />)
    expect(screen.getByRole("switch")).toHaveAttribute("data-size", "default")
  })

  it("renders sm size", () => {
    render(<Switch aria-label="toggle" size="sm" />)
    expect(screen.getByRole("switch")).toHaveAttribute("data-size", "sm")
  })

  it("is disabled when disabled prop is set", () => {
    render(<Switch aria-label="toggle" disabled />)
    expect(screen.getByRole("switch")).toBeDisabled()
  })
})
