"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { cn } from "../lib/utils"
import { useThemeSafe } from "./theme-provider"

function ThemeToggle({ className, ...props }: React.ComponentProps<"button">) {
  const { resolvedTheme, setTheme } = useThemeSafe()

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <button
      data-slot="theme-toggle"
      onClick={toggleTheme}
      className={cn(
        "relative p-2 rounded-lg transition-colors",
        "text-muted-foreground hover:text-foreground hover:bg-surface-hover",
        className
      )}
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      {...props}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  )
}

export { ThemeToggle }
