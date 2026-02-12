import type { GlobalProvider } from "@ladle/react"
import { useLadleContext, ThemeState } from "@ladle/react"
import { useEffect } from "react"

// Import the global CSS — this is the main entry point for Tailwind + design tokens
import "../src/stories/globals.css"

/**
 * Global Ladle provider — syncs Ladle's theme addon to the .dark class
 * that our tokens.css uses, and wraps stories in a padded container.
 */
export const Provider: GlobalProvider = ({ children }) => {
  const { globalState } = useLadleContext()
  const isDark = globalState.theme === ThemeState.Dark

  useEffect(() => {
    // Toggle .dark on <html> so tokens.css variables activate
    document.documentElement.classList.toggle("dark", isDark)

    // Also set color-scheme for native elements
    document.documentElement.style.colorScheme = isDark ? "dark" : "light"
  }, [isDark])

  return (
    <div className="min-h-screen bg-background text-foreground p-6 antialiased">
      {children}
    </div>
  )
}
