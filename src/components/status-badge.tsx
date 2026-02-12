"use client"

import * as React from "react"

import { cn } from "../lib/utils"

interface StatusConfig {
  label: string
  icon: React.ElementType
  className: string
}

interface StatusBadgeProps<T extends string = string>
  extends React.ComponentProps<"span"> {
  /** The current status key */
  status: T
  /** Map of status keys to their display config (label, icon, className) */
  config: Record<T, StatusConfig>
  /** Whether to show the icon (defaults to true) */
  showIcon?: boolean
  /** Additional class to apply to the spinning icon when status matches */
  animateStatus?: T
}

function StatusBadge<T extends string = string>({
  status,
  config,
  showIcon = true,
  animateStatus,
  className,
  ...props
}: StatusBadgeProps<T>) {
  const entry = config[status]
  if (!entry) return null

  const Icon = entry.icon

  return (
    <span
      data-slot="status-badge"
      data-status={status}
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border",
        entry.className,
        className
      )}
      {...props}
    >
      {showIcon && (
        <Icon
          className={cn(
            "h-3 w-3",
            animateStatus && status === animateStatus && "animate-spin"
          )}
        />
      )}
      {entry.label}
    </span>
  )
}

export { StatusBadge }
export type { StatusBadgeProps, StatusConfig }
