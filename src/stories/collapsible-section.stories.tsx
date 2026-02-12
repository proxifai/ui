import type { Story } from "@ladle/react"
import { CollapsibleSection } from "../components/collapsible-section"
import { Layers, Target, Zap } from "lucide-react"

export default { title: "Navigation/CollapsibleSection" }

export const Default: Story = () => (
  <div className="w-56 bg-surface p-2 rounded-lg border border-border">
    <CollapsibleSection
      title="Projects"
      icon={<Layers className="h-4 w-4" />}
      href="#"
      isActive
    >
      <a href="#" className="block px-2 py-1 text-sm text-muted-foreground hover:text-foreground">
        Frontend App
      </a>
      <a href="#" className="block px-2 py-1 text-sm text-muted-foreground hover:text-foreground">
        API Server
      </a>
      <a href="#" className="block px-2 py-1 text-sm text-muted-foreground hover:text-foreground">
        Mobile App
      </a>
    </CollapsibleSection>
  </div>
)

export const WithAdd: Story = () => (
  <div className="w-56 bg-surface p-2 rounded-lg border border-border">
    <CollapsibleSection
      title="Sprints"
      icon={<Zap className="h-4 w-4" />}
      href="#"
      onAdd={() => alert("Add sprint")}
    >
      <a href="#" className="block px-2 py-1 text-sm text-muted-foreground">Sprint 1</a>
      <a href="#" className="block px-2 py-1 text-sm text-muted-foreground">Sprint 2</a>
    </CollapsibleSection>
  </div>
)

export const StartCollapsed: Story = () => (
  <div className="w-56 bg-surface p-2 rounded-lg border border-border">
    <CollapsibleSection
      title="Initiatives"
      icon={<Target className="h-4 w-4" />}
      href="#"
      defaultExpanded={false}
    >
      <a href="#" className="block px-2 py-1 text-sm text-muted-foreground">Q1 Goals</a>
      <a href="#" className="block px-2 py-1 text-sm text-muted-foreground">Q2 Goals</a>
    </CollapsibleSection>
  </div>
)

export const NoLink: Story = () => (
  <div className="w-56 bg-surface p-2 rounded-lg border border-border">
    <CollapsibleSection title="Categories" icon={<Layers className="h-4 w-4" />}>
      <span className="block px-2 py-1 text-sm text-muted-foreground">Bug</span>
      <span className="block px-2 py-1 text-sm text-muted-foreground">Feature</span>
      <span className="block px-2 py-1 text-sm text-muted-foreground">Enhancement</span>
    </CollapsibleSection>
  </div>
)
