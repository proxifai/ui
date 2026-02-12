import type { Story } from "@ladle/react"
import { Switch } from "../components/switch"
import { Label } from "../components/label"
import { useState } from "react"

export default { title: "Components/Switch" }

export const Default: Story = () => <Switch />

export const WithLabel: Story = () => (
  <div className="flex items-center gap-2">
    <Switch id="airplane" />
    <Label htmlFor="airplane">Airplane Mode</Label>
  </div>
)

export const Controlled: Story = () => {
  const [on, setOn] = useState(true)
  return (
    <div className="flex items-center gap-2">
      <Switch checked={on} onCheckedChange={setOn} id="notif" />
      <Label htmlFor="notif">Notifications {on ? "On" : "Off"}</Label>
    </div>
  )
}

export const SmallSize: Story = () => (
  <div className="flex items-center gap-2">
    <Switch size="sm" id="compact" />
    <Label htmlFor="compact" className="text-xs">Compact</Label>
  </div>
)

export const Disabled: Story = () => (
  <div className="flex items-center gap-2">
    <Switch disabled checked />
    <Label className="opacity-50">Disabled</Label>
  </div>
)
