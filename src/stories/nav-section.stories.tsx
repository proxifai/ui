import type { Story } from "@ladle/react"
import { NavSection } from "../components/nav-section"
import { NavItem } from "../components/nav-item"
import { Button } from "../components/button"
import { CircleDot, FileText, Calendar, Plus } from "lucide-react"

export default { title: "Navigation/NavSection" }

export const Default: Story = () => (
  <div className="w-56 bg-surface p-2 rounded-lg border border-border">
    <NavSection title="Workspace">
      <NavItem href="#" icon={<CircleDot />} label="Tasks" isActive />
      <NavItem href="#" icon={<FileText />} label="Docs" />
      <NavItem href="#" icon={<Calendar />} label="Roadmap" />
    </NavSection>
  </div>
)

export const WithAction: Story = () => (
  <div className="w-56 bg-surface p-2 rounded-lg border border-border">
    <NavSection
      title="Projects"
      action={
        <Button variant="ghost" size="icon-xs">
          <Plus />
        </Button>
      }
    >
      <NavItem href="#" label="Frontend" isActive />
      <NavItem href="#" label="Backend" />
      <NavItem href="#" label="Mobile" />
    </NavSection>
  </div>
)

export const DefaultCollapsed: Story = () => (
  <div className="w-56 bg-surface p-2 rounded-lg border border-border">
    <NavSection title="Hidden Section" defaultCollapsed>
      <NavItem href="#" label="You won't see me initially" />
    </NavSection>
    <NavSection title="Visible Section">
      <NavItem href="#" label="I'm visible" />
    </NavSection>
  </div>
)

export const NonCollapsible: Story = () => (
  <div className="w-56 bg-surface p-2 rounded-lg border border-border">
    <NavSection title="Always Open" collapsible={false}>
      <NavItem href="#" icon={<CircleDot />} label="Tasks" />
      <NavItem href="#" icon={<FileText />} label="Docs" />
    </NavSection>
  </div>
)

export const SidebarCollapsed: Story = () => (
  <div className="w-12 bg-surface p-2 rounded-lg border border-border">
    <NavSection title="Hidden Title" sidebarCollapsed>
      <NavItem href="#" icon={<CircleDot />} label="Tasks" collapsed />
      <NavItem href="#" icon={<FileText />} label="Docs" collapsed />
    </NavSection>
  </div>
)
