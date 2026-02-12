import type { Story } from "@ladle/react"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../components/popover"
import { Button } from "../components/button"
import { Input } from "../components/input"
import { Label } from "../components/label"

export default { title: "Components/Popover" }

export const Default: Story = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline">Open Popover</Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <div className="space-y-4">
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Dimensions</h4>
          <p className="text-xs text-muted-foreground">
            Set the dimensions for the layer.
          </p>
        </div>
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="width">Width</Label>
            <Input id="width" defaultValue="100%" className="col-span-2" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <Label htmlFor="height">Height</Label>
            <Input id="height" defaultValue="25px" className="col-span-2" />
          </div>
        </div>
      </div>
    </PopoverContent>
  </Popover>
)
