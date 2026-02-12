import type { Story } from "@ladle/react"
import { Badge } from "../components/badge"

export default { title: "Components/Badge" }

export const Default: Story = () => <Badge>Badge</Badge>

export const Variants: Story = () => (
  <div className="flex gap-2 flex-wrap">
    <Badge variant="default">Default</Badge>
    <Badge variant="secondary">Secondary</Badge>
    <Badge variant="destructive">Destructive</Badge>
    <Badge variant="outline">Outline</Badge>
    <Badge variant="ghost">Ghost</Badge>
    <Badge variant="link">Link</Badge>
    <Badge variant="success">Success</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="info">Info</Badge>
  </div>
)

export const AsLink: Story = () => (
  <Badge asChild>
    <a href="#">Clickable Badge</a>
  </Badge>
)
