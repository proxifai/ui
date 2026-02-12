import type { Story } from "@ladle/react"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "../components/tooltip"
import { Button } from "../components/button"
import { Info } from "lucide-react"

export default { title: "Components/Tooltip" }

export const Default: Story = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

export const OnIcon: Story = () => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon-sm">
          <Info />
        </Button>
      </TooltipTrigger>
      <TooltipContent>More information</TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

export const Sides: Story = () => (
  <TooltipProvider>
    <div className="flex gap-4 items-center p-8">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline" size="sm">{side}</Button>
          </TooltipTrigger>
          <TooltipContent side={side}>Tooltip on {side}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  </TooltipProvider>
)
