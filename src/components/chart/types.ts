import type { ChartColor } from "./theme";

export type ChartDatum = Record<string, unknown>;

export interface ChartSeries {
  /** dataKey on each datum row. */
  key: string;
  /** Display label (legend, tooltip). Defaults to `key`. */
  label?: string;
  /** Semantic name (`emerald` etc.), hex, or css var. */
  color?: ChartColor;
  /** Line stroke style (line + area). */
  variant?: "solid" | "dashed" | "dotted";
  /** Area fill style. Default: `gradient` for area, `none` for line. */
  fill?: "none" | "solid" | "gradient";
  /** Stroke width. */
  strokeWidth?: number;
  /** Bar corner radius (only the top bar in a stack gets it; handled internally). */
  radius?: number;
}

export interface ChartCommonProps {
  data: ChartDatum[];
  xKey: string;
  series: ChartSeries[];
  height?: number;
  /** Bottom legend. Default: false. */
  legend?: boolean;
  /** Show tooltip on hover. Default: true. */
  tooltip?: boolean;
  /** Hide X/Y axes (used for sparkline-ish embedded charts). */
  hideAxes?: boolean;
  /** Hide grid lines. */
  hideGrid?: boolean;
  /** Recharts margin. */
  margin?: { top?: number; right?: number; bottom?: number; left?: number };
  className?: string;
  /** Optional X tick formatter. */
  xTickFormatter?: (value: string | number) => string;
  /** Optional Y tick formatter. */
  yTickFormatter?: (value: string | number) => string;
}
