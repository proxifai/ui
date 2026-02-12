import type { Story } from "@ladle/react"
import { Skeleton } from "../components/skeleton"

export default { title: "Components/Skeleton" }

export const Default: Story = () => (
  <div className="space-y-3 max-w-sm">
    <Skeleton className="h-4 w-3/4" />
    <Skeleton className="h-4 w-1/2" />
    <Skeleton className="h-4 w-5/6" />
  </div>
)

export const CardLoading: Story = () => (
  <div className="flex items-center gap-4 max-w-sm">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="space-y-2 flex-1">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  </div>
)

export const TableLoading: Story = () => (
  <div className="space-y-2 max-w-md">
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="flex gap-4">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 flex-1" />
        <Skeleton className="h-8 w-20" />
      </div>
    ))}
  </div>
)
