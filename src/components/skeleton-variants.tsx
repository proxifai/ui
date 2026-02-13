import * as React from "react"
import { Skeleton } from "./skeleton"
import { cn } from "../lib/utils"

function SkeletonIssueRow({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 px-6 py-3 border-b border-border",
        className
      )}
      {...props}
    >
      {/* Status dot */}
      <Skeleton className="h-4 w-4 rounded-full shrink-0" />
      {/* Issue info */}
      <div className="flex-1 min-w-0 space-y-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-4 w-[60%]" />
        </div>
        <Skeleton className="h-3 w-[40%]" />
      </div>
      {/* Badge */}
      <Skeleton className="h-5 w-16 rounded-full shrink-0" />
      {/* Priority */}
      <Skeleton className="h-5 w-12 rounded-full shrink-0" />
    </div>
  )
}

function SkeletonIssueList({
  count = 8,
  className,
  ...props
}: React.ComponentProps<"div"> & { count?: number }) {
  return (
    <div className={cn("animate-shimmer", className)} {...props}>
      {/* Group header skeleton */}
      <div className="flex items-center gap-2 px-6 py-3 border-b border-border">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-6" />
      </div>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonIssueRow key={i} />
      ))}
    </div>
  )
}

function SkeletonProjectCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 px-6 py-4 border-b border-border",
        className
      )}
      {...props}
    >
      {/* Status icon */}
      <Skeleton className="h-4 w-4 rounded-full shrink-0 mt-0.5" />
      {/* Project info */}
      <div className="flex-1 min-w-0 space-y-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-[45%]" />
          <Skeleton className="h-5 w-16 rounded-full" />
        </div>
        <Skeleton className="h-3 w-[70%]" />
        <div className="flex items-center gap-3">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-14" />
        </div>
      </div>
      {/* Progress */}
      <div className="w-32 space-y-2 shrink-0">
        <div className="flex items-center justify-between">
          <Skeleton className="h-3 w-14" />
          <Skeleton className="h-3 w-8" />
        </div>
        <Skeleton className="h-1.5 w-full rounded-full" />
      </div>
      {/* Arrow */}
      <Skeleton className="h-4 w-4 shrink-0 mt-0.5" />
    </div>
  )
}

function SkeletonProjectGrid({
  count = 6,
  className,
  ...props
}: React.ComponentProps<"div"> & { count?: number }) {
  return (
    <div className={cn("animate-shimmer", className)} {...props}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonProjectCard key={i} />
      ))}
    </div>
  )
}

export { SkeletonIssueRow, SkeletonIssueList, SkeletonProjectCard, SkeletonProjectGrid }
