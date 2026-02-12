import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { CollapsibleSection } from "../components/collapsible-section"

describe("CollapsibleSection", () => {
  it("renders title and children expanded by default", () => {
    render(
      <CollapsibleSection title="Projects">
        <div>Project 1</div>
      </CollapsibleSection>
    )
    expect(screen.getByText("Projects")).toBeInTheDocument()
    expect(screen.getByText("Project 1")).toBeInTheDocument()
  })

  it("collapses on toggle click", async () => {
    const user = userEvent.setup()
    render(
      <CollapsibleSection title="Projects">
        <div>Project 1</div>
      </CollapsibleSection>
    )

    // Find the collapse toggle button (first button in the component)
    const toggleButtons = screen.getAllByRole("button")
    await user.click(toggleButtons[0])
    expect(screen.queryByText("Project 1")).not.toBeInTheDocument()
  })

  it("starts collapsed when defaultExpanded is false", () => {
    render(
      <CollapsibleSection title="Collapsed" defaultExpanded={false}>
        <div>Hidden</div>
      </CollapsibleSection>
    )
    expect(screen.queryByText("Hidden")).not.toBeInTheDocument()
  })

  it("renders heading as a link when href is provided", () => {
    render(
      <CollapsibleSection title="Projects" href="/projects">
        <div>Child</div>
      </CollapsibleSection>
    )
    const link = screen.getByRole("link", { name: /Projects/ })
    expect(link).toHaveAttribute("href", "/projects")
  })

  it("renders icon in the heading", () => {
    render(
      <CollapsibleSection
        title="Projects"
        icon={<svg data-testid="icon" />}
      >
        <div>Child</div>
      </CollapsibleSection>
    )
    expect(screen.getByTestId("icon")).toBeInTheDocument()
  })

  it("calls onAdd when add button is clicked", async () => {
    const user = userEvent.setup()
    const onAdd = vi.fn()
    render(
      <CollapsibleSection title="Projects" onAdd={onAdd}>
        <div>Child</div>
      </CollapsibleSection>
    )

    const buttons = screen.getAllByRole("button")
    // The add button is the second button
    const addBtn = buttons[buttons.length - 1]
    await user.click(addBtn)
    expect(onAdd).toHaveBeenCalledOnce()
  })

  it("applies isActive styling to heading", () => {
    render(
      <CollapsibleSection title="Active" href="/active" isActive>
        <div>Child</div>
      </CollapsibleSection>
    )
    const link = screen.getByRole("link")
    expect(link).toHaveClass("font-medium")
  })
})
