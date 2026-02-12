import type { Story } from "@ladle/react"
import { Textarea } from "../components/textarea"
import { Label } from "../components/label"

export default { title: "Components/Textarea" }

export const Default: Story = () => <Textarea placeholder="Write something..." />

export const WithLabel: Story = () => (
  <div className="space-y-2 max-w-sm">
    <Label htmlFor="desc">Description</Label>
    <Textarea id="desc" placeholder="Describe the issue..." />
  </div>
)

export const Disabled: Story = () => (
  <Textarea placeholder="Disabled" disabled />
)
