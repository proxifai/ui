import * as React from "react";
import {
  Bar,
  BarChart as RBarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { cn } from "../../lib/utils";
import { ChartLegend } from "./legend";
import { CHART_DEFAULTS, resolveColor } from "./theme";
import { ChartTooltipContent, type ChartTooltipContentProps } from "./tooltip";
import type { ChartCommonProps } from "./types";

export interface BarChartProps extends ChartCommonProps {
  /** Stack series. Default: false. */
  stacked?: boolean;
  /** Max bar width in px. */
  maxBarSize?: number;
  /** Gap between bar categories (in px). */
  barCategoryGap?: number | string;
  /**
   * Bar orientation. "vertical" (default) = bars grow upward; "horizontal" =
   * bars grow rightward (category axis on the Y axis).
   */
  orientation?: "vertical" | "horizontal";
  /**
   * If set on a single-series chart, each datum's bar uses `row[cellColorKey]`
   * as its fill. Useful for "priority breakdown" style charts where every row
   * has its own semantic color.
   */
  cellColorKey?: string;
  /** Y axis width (only used in horizontal orientation). */
  yAxisWidth?: number;
  valueFormatter?: ChartTooltipContentProps["valueFormatter"];
  labelFormatter?: ChartTooltipContentProps["labelFormatter"];
}

export function BarChart({
  data,
  xKey,
  series,
  height = CHART_DEFAULTS.height.bar,
  stacked = false,
  maxBarSize = CHART_DEFAULTS.barMaxSize,
  barCategoryGap,
  orientation = "vertical",
  cellColorKey,
  yAxisWidth,
  legend = false,
  tooltip = true,
  hideAxes = false,
  hideGrid = false,
  margin,
  xTickFormatter,
  yTickFormatter,
  valueFormatter,
  labelFormatter,
  className,
}: BarChartProps) {
  const isHoriz = orientation === "horizontal";
  const m = { top: 8, right: 8, bottom: 0, left: -8, ...margin };
  const lastIdx = series.length - 1;
  return (
    <div className={cn("w-full", className)}>
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RBarChart
            data={data}
            margin={m}
            barCategoryGap={barCategoryGap}
            layout={isHoriz ? "vertical" : "horizontal"}
          >
            {!hideGrid && (
              <CartesianGrid
                {...CHART_DEFAULTS.grid}
                vertical={isHoriz}
                horizontal={!isHoriz}
              />
            )}
            {!hideAxes && (
              isHoriz ? (
                <XAxis
                  type="number"
                  tick={CHART_DEFAULTS.axisTick}
                  tickLine={false}
                  axisLine={false}
                  allowDecimals={false}
                  tickFormatter={xTickFormatter}
                />
              ) : (
                <XAxis
                  dataKey={xKey}
                  tick={CHART_DEFAULTS.axisTick}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={xTickFormatter}
                />
              )
            )}
            {!hideAxes && (
              isHoriz ? (
                <YAxis
                  type="category"
                  dataKey={xKey}
                  tick={CHART_DEFAULTS.axisTick}
                  tickLine={false}
                  axisLine={false}
                  width={yAxisWidth ?? 52}
                  tickFormatter={yTickFormatter}
                />
              ) : (
                <YAxis
                  tick={CHART_DEFAULTS.axisTick}
                  tickLine={false}
                  axisLine={false}
                  allowDecimals={false}
                  tickFormatter={yTickFormatter}
                />
              )
            )}
            {tooltip && (
              <Tooltip
                cursor={{ fill: "var(--accent)", opacity: 0.4 }}
                content={
                  <ChartTooltipContent
                    valueFormatter={valueFormatter}
                    labelFormatter={labelFormatter}
                  />
                }
              />
            )}
            {series.map((s, i) => {
              const color = resolveColor(s.color);
              const isTop = !stacked || i === lastIdx;
              const radius = s.radius ?? CHART_DEFAULTS.barRadius;
              const cornerRadius: [number, number, number, number] = isHoriz
                ? isTop
                  ? [0, radius, radius, 0]
                  : [0, 0, 0, 0]
                : isTop
                  ? [radius, radius, 0, 0]
                  : [0, 0, 0, 0];
              const useCells = !!cellColorKey && series.length === 1;
              return (
                <Bar
                  key={s.key}
                  dataKey={s.key}
                  name={s.label ?? s.key}
                  stackId={stacked ? "stack" : undefined}
                  fill={useCells ? undefined : color}
                  radius={cornerRadius}
                  maxBarSize={maxBarSize}
                  isAnimationActive={false}
                >
                  {useCells &&
                    data.map((row, idx) => (
                      <Cell
                        key={idx}
                        fill={resolveColor((row[cellColorKey!] as string) ?? color)}
                      />
                    ))}
                </Bar>
              );
            })}
          </RBarChart>
        </ResponsiveContainer>
      </div>
      {legend && <ChartLegend series={series} />}
    </div>
  );
}
