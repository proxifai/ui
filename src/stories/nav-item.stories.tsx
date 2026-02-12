import type { Story } from "@ladle/react"
import { NavItem } from "../components/nav-item"
import { CircleDot, FileText, Settings, Globe, Inbox } from "lucide-react"

export default { title: "Navigation/NavItem" }

export const Default: Story = () => (
  <div className="w-56 bg-surface p-2 rounded-lg border border-border space-y-0.5">
    <NavItem href="#" icon={<CircleDot />} label="All Tasks" isActive />
    <NavItem href="#" icon={<FileText />} label="Docs" />
    <NavItem href="#" icon={<Settings />} label="Settings" />
  </div>
)

export const WithCount: Story = () => (
  <div className="w-56 bg-surface p-2 rounded-lg border border-border space-y-0.5">
    <NavItem href="#" icon={<Inbox />} label="Inbox" count={12} />
    <NavItem href="#" icon={<CircleDot />} label="Issues" count={34} isActive />
    <NavItem href="#" icon={<FileText />} label="Docs" count={0} />
  </div>
)

export const Collapsed: Story = () => (
  <div className="w-12 bg-surface p-2 rounded-lg border border-border space-y-1">
    <NavItem href="#" icon={<CircleDot />} label="Tasks" collapsed isActive />
    <NavItem href="#" icon={<FileText />} label="Docs" collapsed />
    <NavItem href="#" icon={<Settings />} label="Settings" collapsed />
  </div>
)

export const External: Story = () => (
  <div className="w-56 bg-surface p-2 rounded-lg border border-border">
    <NavItem href="https://github.com" icon={<Globe />} label="GitHub" external />
  </div>
)

export const WithIndent: Story = () => (
  <div className="w-56 bg-surface p-2 rounded-lg border border-border space-y-0.5">
    <NavItem href="#" icon={<CircleDot />} label="Parent" isActive />
    <NavItem href="#" label="Child 1" indent={1.5} />
    <NavItem href="#" label="Child 2" indent={1.5} />
    <NavItem href="#" label="Grandchild" indent={3} />
  </div>
)

export const IconColor: Story = () => (
  <div className="w-56 bg-surface p-2 rounded-lg border border-border space-y-0.5">
    <NavItem href="#" icon={<CircleDot />} label="Active" iconColor="#22c55e" isActive />
    <NavItem href="#" icon={<CircleDot />} label="Pending" iconColor="#f59e0b" />
    <NavItem href="#" icon={<CircleDot />} label="Error" iconColor="#ef4444" />
  </div>
)
