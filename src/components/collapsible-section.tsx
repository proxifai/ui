"use client"

import * as React from "react"
import { ChevronDown, ChevronRight, Plus } from "lucide-react"

import { cn } from "../lib/utils"

interface CollapsibleSectionProps extends React.ComponentProps<"div"> {
  /** Section heading text */
  title: string
  /** Icon rendered in the heading */
  icon?: React.ReactNode
  /** Optional link for the heading — renders an <a> tag around the title */
  href?: string
  /** Whether the heading link is active */
  isActive?: boolean
  /** Whether the section starts expanded */
  defaultExpanded?: boolean
  /** Callback when the "add" action is clicked */
  onAdd?: () => void
}

function CollapsibleSection({
  title,
  icon,
  href,
  isActive,
  defaultExpanded = true,
  onAdd,
  children,
  className,
  ...props
}: CollapsibleSectionProps) {
  const [expanded, setExpanded] = React.useState(defaultExpanded)

  const titleContent = (
    <>
      {icon}
      <span>{title}</span>
    </>
  )

  return (
    <div
      data-slot="collapsible-section"
      className={cn("mb-1", className)}
      {...props}
    >
      <div className="flex items-center group">
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-1 text-muted-foreground hover:text-foreground"
        >
          {expanded ? (
            <ChevronDown className="h-3 w-3" />
          ) : (
            <ChevronRight className="h-3 w-3" />
          )}
        </button>
        {href ? (
          <a
            href={href}
            className={cn(
              "flex-1 flex items-center gap-2 rounded-md px-1 py-1.5 text-sm transition-colors",
              isActive
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {titleContent}
          </a>
        ) : (
          <span
            className={cn(
              "flex-1 flex items-center gap-2 rounded-md px-1 py-1.5 text-sm",
              isActive
                ? "text-foreground font-medium"
                : "text-muted-foreground"
            )}
          >
            {titleContent}
          </span>
        )}
        {onAdd && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onAdd()
            }}
            className="p-1 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Plus className="h-3 w-3" />
          </button>
        )}
      </div>
      {expanded && (
        <div className="ml-4 mt-1 space-y-0.5 border-l border-border pl-2">
          {children}
        </div>
      )}
    </div>
  )
}

export { CollapsibleSection }
export type { CollapsibleSectionProps }
