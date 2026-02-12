import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SidebarProvider, useSidebar } from "../components/sidebar-provider"

function SidebarConsumer() {
  const { collapsed, toggleCollapsed, mobileOpen, setMobileOpen } =
    useSidebar()
  return (
    <div>
      <span data-testid="collapsed">{String(collapsed)}</span>
      <span data-testid="mobile-open">{String(mobileOpen)}</span>
      <button onClick={toggleCollapsed}>Toggle</button>
      <button onClick={() => setMobileOpen(true)}>Open Mobile</button>
      <button onClick={() => setMobileOpen(false)}>Close Mobile</button>
    </div>
  )
}

describe("SidebarProvider", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it("defaults collapsed to false", () => {
    render(
      <SidebarProvider>
        <SidebarConsumer />
      </SidebarProvider>
    )
    expect(screen.getByTestId("collapsed")).toHaveTextContent("false")
  })

  it("toggleCollapsed flips the state", async () => {
    const user = userEvent.setup()
    render(
      <SidebarProvider>
        <SidebarConsumer />
      </SidebarProvider>
    )

    await user.click(screen.getByText("Toggle"))
    expect(screen.getByTestId("collapsed")).toHaveTextContent("true")

    await user.click(screen.getByText("Toggle"))
    expect(screen.getByTestId("collapsed")).toHaveTextContent("false")
  })

  it("persists to localStorage", async () => {
    const user = userEvent.setup()
    render(
      <SidebarProvider storageKey="test-sidebar">
        <SidebarConsumer />
      </SidebarProvider>
    )

    await user.click(screen.getByText("Toggle"))
    expect(localStorage.getItem("test-sidebar")).toBe("true")
  })

  it("reads from localStorage on mount", () => {
    localStorage.setItem("sidebar-collapsed", "true")
    render(
      <SidebarProvider>
        <SidebarConsumer />
      </SidebarProvider>
    )
    expect(screen.getByTestId("collapsed")).toHaveTextContent("true")
  })

  it("manages mobileOpen state", async () => {
    const user = userEvent.setup()
    render(
      <SidebarProvider>
        <SidebarConsumer />
      </SidebarProvider>
    )

    expect(screen.getByTestId("mobile-open")).toHaveTextContent("false")
    await user.click(screen.getByText("Open Mobile"))
    expect(screen.getByTestId("mobile-open")).toHaveTextContent("true")
    await user.click(screen.getByText("Close Mobile"))
    expect(screen.getByTestId("mobile-open")).toHaveTextContent("false")
  })
})

describe("useSidebar", () => {
  it("throws when used outside provider", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {})
    expect(() => render(<SidebarConsumer />)).toThrow(
      "useSidebar must be used within a SidebarProvider"
    )
    spy.mockRestore()
  })
})
