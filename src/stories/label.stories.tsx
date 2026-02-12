import type { Story } from "@ladle/react"
import { Label } from "../components/label"
import { Input } from "../components/input"
import { Switch } from "../components/switch"

export default { title: "Components/Label" }

export const Default: Story = () => (
  <div className="space-y-2 max-w-sm">
    <Label htmlFor="email">Email address</Label>
    <Input id="email" type="email" placeholder="you@example.com" />
  </div>
)

export const WithSwitch: Story = () => (
  <div className="flex items-center gap-2">
    <Switch id="terms" />
    <Label htmlFor="terms">Accept terms and conditions</Label>
  </div>
)
