// Chart theme: palette + axis/grid defaults shared across all chart kinds.
// Hex values match the colors already used inline across proxifai/web so
// migrations are visually no-op.

export type ChartColorName =
  | "emerald"
  | "blue"
  | "violet"
  | "amber"
  | "orange"
  | "red"
  | "rose"
  | "cyan"
  | "zinc"
  | "muted"
  | "primary"
  | "foreground";

export type ChartColor = ChartColorName | (string & {});

export const CHART_PALETTE: Record<ChartColorName, string> = {
  emerald: "#10b981",
  blue: "#3b82f6",
  violet: "#8b5cf6",
  amber: "#eab308",
  orange: "#f97316",
  red: "#ef4444",
  rose: "#f43f5e",
  cyan: "#06b6d4",
  zinc: "#71717a",
  muted: "#27272a",
  primary: "var(--primary)",
  foreground: "var(--foreground)",
};

export function resolveColor(c: ChartColor | undefined, fallback = "#3b82f6"): string {
  if (!c) return fallback;
  if (c in CHART_PALETTE) return CHART_PALETTE[c as ChartColorName];
  return c;
}

export const CHART_DEFAULTS = {
  grid: { strokeDasharray: "3 3", stroke: "var(--border)", strokeOpacity: 0.5 },
  axisTick: { fontSize: 11, fill: "var(--muted-foreground)" },
  height: { area: 280, bar: 280, line: 280, donut: 200, sparkline: 80 },
  barMaxSize: 32,
  barRadius: 4,
} as const;

// Stable id for SVG gradient defs.
export function gradId(prefix: string, key: string): string {
  return `pfai-chart-${prefix}-${key.replace(/[^a-zA-Z0-9_-]/g, "_")}`;
}
