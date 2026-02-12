import type { Story } from "@ladle/react"
import { Input } from "../components/input"
import { Label } from "../components/label"

export default { title: "Components/Input" }

export const Default: Story = () => <Input placeholder="Enter text..." />

export const WithLabel: Story = () => (
  <div className="space-y-2 max-w-sm">
    <Label htmlFor="email">Email</Label>
    <Input id="email" type="email" placeholder="name@example.com" />
  </div>
)

export const Disabled: Story = () => (
  <Input placeholder="Disabled input" disabled />
)

export const FileInput: Story = () => (
  <div className="space-y-2 max-w-sm">
    <Label htmlFor="file">Upload</Label>
    <Input id="file" type="file" />
  </div>
)

export const Invalid: Story = () => (
  <Input aria-invalid="true" defaultValue="bad value" />
)
