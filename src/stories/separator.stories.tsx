import type { Story } from "@ladle/react"
import { Separator } from "../components/separator"

export default { title: "Components/Separator" }

export const Horizontal: Story = () => (
  <div className="max-w-sm">
    <div className="space-y-1">
      <h4 className="text-sm font-medium">Proxifai UI</h4>
      <p className="text-sm text-muted-foreground">
        Shared design system components.
      </p>
    </div>
    <Separator className="my-4" />
    <div className="flex h-5 items-center gap-4 text-sm">
      <span>Docs</span>
      <Separator orientation="vertical" />
      <span>Source</span>
      <Separator orientation="vertical" />
      <span>Changelog</span>
    </div>
  </div>
)

export const Vertical: Story = () => (
  <div className="flex h-10 items-center gap-4 text-sm">
    <span>Item A</span>
    <Separator orientation="vertical" />
    <span>Item B</span>
    <Separator orientation="vertical" />
    <span>Item C</span>
  </div>
)
