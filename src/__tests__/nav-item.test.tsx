import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { NavItem } from "../components/nav-item"

describe("NavItem", () => {
  it("renders label and link", () => {
    render(<NavItem href="/home" label="Home" />)
    const link = screen.getByRole("link", { name: "Home" })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute("href", "/home")
  })

  it("renders icon", () => {
    render(
      <NavItem
        href="/test"
        label="Test"
        icon={<svg data-testid="icon" />}
      />
    )
    expect(screen.getByTestId("icon")).toBeInTheDocument()
  })

  it("applies active state", () => {
    render(<NavItem href="/active" label="Active" isActive />)
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("data-active", "true")
    expect(link).toHaveClass("bg-surface-hover")
  })

  it("does not apply active class when inactive", () => {
    render(<NavItem href="/inactive" label="Inactive" />)
    const link = screen.getByRole("link")
    expect(link).not.toHaveAttribute("data-active")
    expect(link).toHaveClass("text-muted-foreground")
  })

  it("renders count badge", () => {
    render(<NavItem href="/test" label="Issues" count={5} />)
    expect(screen.getByText("5")).toBeInTheDocument()
  })

  it("does not render count when 0", () => {
    render(<NavItem href="/test" label="Issues" count={0} />)
    expect(screen.queryByText("0")).not.toBeInTheDocument()
  })

  it("collapsed mode hides label", () => {
    render(<NavItem href="/test" label="Hidden" collapsed />)
    expect(screen.queryByText("Hidden")).not.toBeInTheDocument()
  })

  it("applies custom className", () => {
    render(<NavItem href="/test" label="Custom" className="extra-class" />)
    expect(screen.getByRole("link")).toHaveClass("extra-class")
  })

  it("applies icon color", () => {
    render(
      <NavItem
        href="/test"
        label="Colored"
        icon={<svg data-testid="icon" />}
        iconColor="red"
      />
    )
    const iconWrapper = screen.getByTestId("icon").parentElement
    expect(iconWrapper).toHaveStyle({ color: "rgb(255, 0, 0)" })
  })

  it("external link opens in new tab", () => {
    render(<NavItem href="https://example.com" label="External" external />)
    const link = screen.getByRole("link")
    expect(link).toHaveAttribute("target", "_blank")
    expect(link).toHaveAttribute("rel", "noopener noreferrer")
  })

  it("applies indent via paddingLeft", () => {
    render(<NavItem href="/test" label="Indented" indent={2} />)
    const link = screen.getByRole("link")
    expect(link).toHaveStyle({ paddingLeft: "2rem" })
  })
})
