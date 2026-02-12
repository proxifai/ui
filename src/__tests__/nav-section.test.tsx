import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { NavSection } from "../components/nav-section"

describe("NavSection", () => {
  it("renders title and children", () => {
    render(
      <NavSection title="Workspace">
        <div>Child 1</div>
        <div>Child 2</div>
      </NavSection>
    )
    expect(screen.getByText("Workspace")).toBeInTheDocument()
    expect(screen.getByText("Child 1")).toBeInTheDocument()
    expect(screen.getByText("Child 2")).toBeInTheDocument()
  })

  it("collapses children on title click", async () => {
    const user = userEvent.setup()
    render(
      <NavSection title="Workspace">
        <div>Content</div>
      </NavSection>
    )
    expect(screen.getByText("Content")).toBeInTheDocument()

    await user.click(screen.getByText("Workspace"))
    expect(screen.queryByText("Content")).not.toBeInTheDocument()
  })

  it("expands again on second click", async () => {
    const user = userEvent.setup()
    render(
      <NavSection title="Workspace">
        <div>Content</div>
      </NavSection>
    )

    await user.click(screen.getByText("Workspace"))
    expect(screen.queryByText("Content")).not.toBeInTheDocument()

    await user.click(screen.getByText("Workspace"))
    expect(screen.getByText("Content")).toBeInTheDocument()
  })

  it("non-collapsible mode always shows children", async () => {
    const user = userEvent.setup()
    render(
      <NavSection title="Static" collapsible={false}>
        <div>Always visible</div>
      </NavSection>
    )
    await user.click(screen.getByText("Static"))
    expect(screen.getByText("Always visible")).toBeInTheDocument()
  })

  it("starts collapsed when defaultCollapsed is true", () => {
    render(
      <NavSection title="Hidden" defaultCollapsed>
        <div>Hidden Content</div>
      </NavSection>
    )
    expect(screen.queryByText("Hidden Content")).not.toBeInTheDocument()
  })

  it("renders action slot", () => {
    render(
      <NavSection title="Section" action={<button>Add</button>}>
        <div>Content</div>
      </NavSection>
    )
    expect(screen.getByText("Add")).toBeInTheDocument()
  })

  it("sidebarCollapsed mode hides title", () => {
    render(
      <NavSection title="Hidden Title" sidebarCollapsed>
        <div>Content</div>
      </NavSection>
    )
    expect(screen.queryByText("Hidden Title")).not.toBeInTheDocument()
    expect(screen.getByText("Content")).toBeInTheDocument()
  })
})
