"use client"

import * as React from "react"

interface SidebarContextType {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
  toggleCollapsed: () => void
  mobileOpen: boolean
  setMobileOpen: (open: boolean) => void
}

const SidebarContext = React.createContext<SidebarContextType | undefined>(
  undefined
)

const DEFAULT_STORAGE_KEY = "sidebar-collapsed"

interface SidebarProviderProps {
  children: React.ReactNode
  /** localStorage key for persisting collapsed state */
  storageKey?: string
  /** Callback invoked on route change — use to auto-close mobile drawer */
  onRouteChange?: () => void
}

function SidebarProvider({
  children,
  storageKey = DEFAULT_STORAGE_KEY,
}: SidebarProviderProps) {
  const [collapsed, setCollapsedState] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const stored = localStorage.getItem(storageKey)
    if (stored !== null) {
      setCollapsedState(stored === "true")
    }
  }, [storageKey])

  const setCollapsed = React.useCallback(
    (value: boolean) => {
      setCollapsedState(value)
      localStorage.setItem(storageKey, String(value))
    },
    [storageKey]
  )

  const toggleCollapsed = React.useCallback(() => {
    setCollapsed(!collapsed)
  }, [collapsed, setCollapsed])

  return (
    <SidebarContext.Provider
      value={{
        collapsed,
        setCollapsed,
        toggleCollapsed,
        mobileOpen,
        setMobileOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

export { SidebarProvider, useSidebar, SidebarContext }
export type { SidebarContextType }
