import type { Story } from "@ladle/react"
import { ScrollArea, ScrollBar } from "../components/scroll-area"
import { Separator } from "../components/separator"

export default { title: "Components/ScrollArea" }

const tags = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`)

export const Vertical: Story = () => (
  <ScrollArea className="h-72 w-48 rounded-md border">
    <div className="p-4">
      <h4 className="mb-4 text-sm font-medium">Tags</h4>
      {tags.map((tag) => (
        <div key={tag}>
          <div className="text-sm">{tag}</div>
          <Separator className="my-2" />
        </div>
      ))}
    </div>
  </ScrollArea>
)

export const Horizontal: Story = () => (
  <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
    <div className="flex w-max gap-4 p-4">
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="shrink-0 w-32 h-20 rounded-md bg-muted flex items-center justify-center text-sm text-muted-foreground"
        >
          Card {i + 1}
        </div>
      ))}
    </div>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
)
