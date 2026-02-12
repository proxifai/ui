import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { formatDate, formatRelativeDate } from "../lib/format"

describe("formatDate", () => {
  it("formats a Date object", () => {
    const date = new Date("2025-01-15T12:00:00Z")
    const result = formatDate(date)
    expect(result).toContain("Jan")
    expect(result).toContain("15")
    expect(result).toContain("2025")
  })

  it("formats an ISO string", () => {
    const result = formatDate("2025-06-01T00:00:00Z")
    expect(result).toContain("2025")
  })

  it("returns empty string for null", () => {
    expect(formatDate(null)).toBe("")
  })

  it("returns empty string for undefined", () => {
    expect(formatDate(undefined)).toBe("")
  })
})

describe("formatRelativeDate", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date("2025-03-15T12:00:00Z"))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("returns 'Today' for today's date", () => {
    expect(formatRelativeDate("2025-03-15T10:00:00Z")).toBe("Today")
  })

  it("returns 'Yesterday' for yesterday", () => {
    expect(formatRelativeDate("2025-03-14T10:00:00Z")).toBe("Yesterday")
  })

  it("returns 'X days ago' for < 7 days", () => {
    expect(formatRelativeDate("2025-03-11T10:00:00Z")).toBe("4 days ago")
  })

  it("returns 'X weeks ago' for < 30 days", () => {
    expect(formatRelativeDate("2025-03-01T10:00:00Z")).toBe("2 weeks ago")
  })

  it("returns 'X months ago' for < 365 days", () => {
    expect(formatRelativeDate("2024-12-15T10:00:00Z")).toBe("3 months ago")
  })

  it("returns 'X years ago' for >= 365 days", () => {
    expect(formatRelativeDate("2023-01-01T10:00:00Z")).toBe("2 years ago")
  })

  it("returns empty string for null", () => {
    expect(formatRelativeDate(null)).toBe("")
  })

  it("returns empty string for undefined", () => {
    expect(formatRelativeDate(undefined)).toBe("")
  })
})
