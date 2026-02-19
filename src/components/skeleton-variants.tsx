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

// ─── Code / Forge skeletons ─────────────────────────────────────────

function SkeletonRepoListItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-center gap-4 px-3 md:px-6 py-3 border-b border-border",
        className
      )}
      {...props}
    >
      <Skeleton className="h-8 w-8 rounded-lg shrink-0" />
      <div className="flex-1 min-w-0 space-y-1.5">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-[40%]" />
          <Skeleton className="h-3 w-3 rounded-full" />
        </div>
        <Skeleton className="h-3 w-[55%]" />
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <Skeleton className="h-3 w-12" />
        <Skeleton className="h-3 w-14" />
      </div>
    </div>
  )
}

function SkeletonRepoList({
  count = 8,
  className,
  ...props
}: React.ComponentProps<"div"> & { count?: number }) {
  return (
    <div className={cn("animate-shimmer", className)} {...props}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonRepoListItem key={i} />
      ))}
    </div>
  )
}

function SkeletonRepoCard({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex items-start gap-4 p-4 rounded-lg border border-border",
        className
      )}
      {...props}
    >
      <Skeleton className="h-10 w-10 rounded-lg shrink-0" />
      <div className="flex-1 min-w-0 space-y-2">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-[50%]" />
          <Skeleton className="h-3 w-3 rounded-full" />
        </div>
        <Skeleton className="h-3 w-[70%]" />
        <div className="flex items-center gap-4">
          <Skeleton className="h-3 w-12" />
          <Skeleton className="h-3 w-14" />
          <Skeleton className="h-3 w-10" />
        </div>
      </div>
    </div>
  )
}

function SkeletonRepoGrid({
  count = 6,
  className,
  ...props
}: React.ComponentProps<"div"> & { count?: number }) {
  return (
    <div className={cn("animate-shimmer p-3 md:p-6", className)} {...props}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonRepoCard key={i} />
        ))}
      </div>
    </div>
  )
}

function SkeletonRepoHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("border-b border-border bg-surface", className)}
      {...props}
    >
      <div className="px-6 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded" />
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-3 w-3" />
              <Skeleton className="h-6 w-36" />
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>
            <Skeleton className="h-3 w-[50%]" />
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <div className="flex items-center gap-4">
              <Skeleton className="h-4 w-10" />
              <Skeleton className="h-4 w-10" />
              <Skeleton className="h-4 w-10" />
            </div>
            <Skeleton className="h-8 w-28 rounded-md" />
          </div>
        </div>
      </div>
      <div className="px-6 flex items-center gap-6 border-t border-border py-3">
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-4 w-12" />
        <Skeleton className="h-4 w-24" />
        <div className="ml-auto">
          <Skeleton className="h-8 w-32 rounded-md" />
        </div>
      </div>
    </div>
  )
}

function SkeletonFileTree({
  count = 8,
  className,
  ...props
}: React.ComponentProps<"div"> & { count?: number }) {
  return (
    <div className={cn("animate-shimmer rounded-lg border border-border overflow-hidden", className)} {...props}>
      <div className="flex items-center gap-2 px-4 py-2 bg-surface-hover border-b border-border">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-32" />
      </div>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 px-4 py-2 border-b border-border last:border-b-0">
          <Skeleton className="h-4 w-4 shrink-0" />
          <Skeleton className="h-4" style={{ width: `${30 + Math.random() * 30}%` }} />
          <div className="ml-auto flex items-center gap-2">
            <Skeleton className="h-3 w-40" />
            <Skeleton className="h-3 w-16" />
          </div>
        </div>
      ))}
    </div>
  )
}

function SkeletonCodePage({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("h-full flex flex-col animate-shimmer", className)} {...props}>
      <SkeletonRepoHeader />
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <SkeletonFileTree />
        <div className="rounded-lg border border-border p-6 space-y-3">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-[90%]" />
          <Skeleton className="h-3 w-[75%]" />
          <Skeleton className="h-3 w-[85%]" />
        </div>
      </div>
    </div>
  )
}

function SkeletonCommitList({
  count = 8,
  className,
  ...props
}: React.ComponentProps<"div"> & { count?: number }) {
  return (
    <div className={cn("animate-shimmer divide-y divide-border", className)} {...props}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex items-start gap-4 px-6 py-4">
          <Skeleton className="h-8 w-8 rounded-full shrink-0 mt-1" />
          <div className="flex-1 min-w-0 space-y-2">
            <Skeleton className="h-4" style={{ width: `${40 + Math.random() * 30}%` }} />
            <div className="flex items-center gap-3">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-3 w-24" />
            </div>
          </div>
          <Skeleton className="h-7 w-20 rounded-md shrink-0" />
        </div>
      ))}
    </div>
  )
}

export {
  SkeletonIssueRow,
  SkeletonIssueList,
  SkeletonProjectCard,
  SkeletonProjectGrid,
  SkeletonRepoListItem,
  SkeletonRepoList,
  SkeletonRepoCard,
  SkeletonRepoGrid,
  SkeletonRepoHeader,
  SkeletonFileTree,
  SkeletonCodePage,
  SkeletonCommitList,
}
