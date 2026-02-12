import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { renderHook, act } from "@testing-library/react"
import { useIsMobile } from "../hooks/use-is-mobile"

describe("useIsMobile", () => {
  let listeners: Array<(e: { matches: boolean }) => void> = []
  let currentMatches = false

  beforeEach(() => {
    listeners = []
    currentMatches = false

    vi.stubGlobal(
      "matchMedia",
      vi.fn((query: string) => ({
        matches: currentMatches,
        media: query,
        addEventListener: (_: string, cb: (e: { matches: boolean }) => void) => {
          listeners.push(cb)
        },
        removeEventListener: (_: string, cb: (e: { matches: boolean }) => void) => {
          listeners = listeners.filter((l) => l !== cb)
        },
      }))
    )
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it("returns false on desktop viewport", () => {
    currentMatches = false
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)
  })

  it("returns true on mobile viewport", () => {
    currentMatches = true
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(true)
  })

  it("updates when viewport changes", () => {
    currentMatches = false
    const { result } = renderHook(() => useIsMobile())
    expect(result.current).toBe(false)

    act(() => {
      listeners.forEach((l) => l({ matches: true }))
    })
    expect(result.current).toBe(true)
  })

  it("cleans up event listener on unmount", () => {
    currentMatches = false
    const { unmount } = renderHook(() => useIsMobile())
    expect(listeners.length).toBe(1)
    unmount()
    expect(listeners.length).toBe(0)
  })
})
