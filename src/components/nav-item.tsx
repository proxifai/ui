"use client"

import * as React from "react"

import { cn } from "../lib/utils"

interface NavItemProps extends React.ComponentProps<"a"> {
  /** The navigation target URL */
  href: string
  /** Icon element rendered before the label */
  icon?: React.ReactNode
  /** Text label */
  label: string
  /** Whether this item is currently active */
  isActive?: boolean
  /** Optional count badge */
  count?: number
  /** Color override for the icon */
  iconColor?: string
  /** Whether the sidebar is collapsed (icon-only mode) */
  collapsed?: boolean
  /** Indentation level (in rem) */
  indent?: number
  /** Render function for the link wrapper — defaults to <a>. Pass your router Link component here. */
  asChild?: boolean
  /** Optional external link indicator */
  external?: boolean
}

function NavItem({
  href,
  icon,
  label,
  isActive,
  count,
  iconColor,
  collapsed,
  indent,
  external,
  className,
  children,
  ...props
}: NavItemProps) {
  return (
    <a
      href={href}
      data-slot="nav-item"
      data-active={isActive || undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
        isActive
          ? "bg-surface-hover text-foreground"
          : "text-muted-foreground hover:bg-surface-hover/50 hover:text-foreground",
        collapsed && "justify-center px-0",
        className
      )}
      style={{ paddingLeft: indent ? `${indent}rem` : undefined }}
      {...props}
    >
      {icon && (
        <span
          className="shrink-0 [&_svg]:h-4 [&_svg]:w-4"
          style={{ color: iconColor }}
        >
          {icon}
        </span>
      )}
      {!collapsed && <span className="truncate flex-1">{label}</span>}
      {!collapsed && count !== undefined && count > 0 && (
        <span className="ml-auto text-xs text-muted-foreground tabular-nums">
          {count}
        </span>
      )}
      {children}
    </a>
  )
}

export { NavItem }
export type { NavItemProps }
