"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "../lib/utils"

interface NavSectionProps extends React.ComponentProps<"div"> {
  /** Section title */
  title: string
  /** Whether the section can be collapsed */
  collapsible?: boolean
  /** Whether the section starts collapsed */
  defaultCollapsed?: boolean
  /** Optional action element rendered after the title (e.g. an "add" button) */
  action?: React.ReactNode
  /** Whether the sidebar is in collapsed mode (hides titles) */
  sidebarCollapsed?: boolean
}

function NavSection({
  title,
  children,
  collapsible = true,
  defaultCollapsed = false,
  action,
  sidebarCollapsed,
  className,
  ...props
}: NavSectionProps) {
  const [collapsed, setCollapsed] = React.useState(defaultCollapsed)

  if (sidebarCollapsed) {
    return (
      <div
        data-slot="nav-section"
        className={cn("mb-2", className)}
        {...props}
      >
        <div className="mt-1 space-y-0.5">{children}</div>
      </div>
    )
  }

  return (
    <div data-slot="nav-section" className={cn("mb-2", className)} {...props}>
      <div className="flex items-center">
        <button
          onClick={() => collapsible && setCollapsed(!collapsed)}
          className={cn(
            "flex flex-1 items-center gap-1 px-2 py-1 text-xs font-medium text-muted-foreground hover:text-foreground",
            !collapsible && "cursor-default"
          )}
        >
          {collapsible && (
            <ChevronDown
              className={cn(
                "h-3 w-3 transition-transform",
                collapsed && "-rotate-90"
              )}
            />
          )}
          <span>{title}</span>
        </button>
        {action && <div className="pr-2">{action}</div>}
      </div>
      {!collapsed && <div className="mt-1 space-y-0.5">{children}</div>}
    </div>
  )
}

export { NavSection }
export type { NavSectionProps }
