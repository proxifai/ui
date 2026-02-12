import type { Story } from "@ladle/react"
import { Button } from "../components/button"
import { Mail, Loader2 } from "lucide-react"

export default { title: "Components/Button" }

export const Default: Story = () => <Button>Click me</Button>

export const Variants: Story = () => (
  <div className="flex gap-2 flex-wrap">
    <Button variant="default">Default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
)

export const Sizes: Story = () => (
  <div className="flex items-center gap-2 flex-wrap">
    <Button size="xs">Extra Small</Button>
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
  </div>
)

export const IconSizes: Story = () => (
  <div className="flex items-center gap-2">
    <Button size="icon-xs"><Mail /></Button>
    <Button size="icon-sm"><Mail /></Button>
    <Button size="icon"><Mail /></Button>
    <Button size="icon-lg"><Mail /></Button>
  </div>
)

export const WithIcon: Story = () => (
  <div className="flex gap-2">
    <Button><Mail /> Send Email</Button>
    <Button variant="outline"><Mail /> Draft</Button>
  </div>
)

export const Loading: Story = () => (
  <Button disabled>
    <Loader2 className="animate-spin" />
    Loading...
  </Button>
)

export const Disabled: Story = () => (
  <div className="flex gap-2">
    <Button disabled>Default</Button>
    <Button variant="secondary" disabled>Secondary</Button>
    <Button variant="destructive" disabled>Destructive</Button>
    <Button variant="outline" disabled>Outline</Button>
  </div>
)

export const AsChild: Story = () => (
  <Button asChild>
    <a href="https://example.com">Link as Button</a>
  </Button>
)
