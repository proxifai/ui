import * as React from "react";
import {
  Area,
  AreaChart as RAreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { cn } from "../../lib/utils";
import { ChartLegend } from "./legend";
import { CHART_DEFAULTS, gradId, resolveColor } from "./theme";
import { ChartTooltipContent, type ChartTooltipContentProps } from "./tooltip";
import type { ChartCommonProps } from "./types";

export interface AreaChartProps extends ChartCommonProps {
  /** Stack series. Default: false. */
  stacked?: boolean;
  /** Curve interpolation. Default: `monotone`. */
  curve?: "monotone" | "linear" | "step";
  /** Tooltip value formatter. */
  valueFormatter?: ChartTooltipContentProps["valueFormatter"];
  labelFormatter?: ChartTooltipContentProps["labelFormatter"];
}

export function AreaChart({
  data,
  xKey,
  series,
  height = CHART_DEFAULTS.height.area,
  stacked = false,
  curve = "monotone",
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
}: AreaChartProps) {
  const m = { top: 8, right: 8, bottom: 0, left: -8, ...margin };
  return (
    <div className={cn("w-full", className)}>
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RAreaChart data={data} margin={m}>
            <defs>
              {series.map((s) => {
                const color = resolveColor(s.color);
                return (
                  <linearGradient key={s.key} id={gradId("area", s.key)} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity={0.2} />
                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                  </linearGradient>
                );
              })}
            </defs>
            {!hideGrid && <CartesianGrid {...CHART_DEFAULTS.grid} vertical={false} />}
            {!hideAxes && (
              <XAxis
                dataKey={xKey}
                tick={CHART_DEFAULTS.axisTick}
                tickLine={false}
                axisLine={false}
                tickFormatter={xTickFormatter}
              />
            )}
            {!hideAxes && (
              <YAxis
                tick={CHART_DEFAULTS.axisTick}
                tickLine={false}
                axisLine={false}
                allowDecimals={false}
                tickFormatter={yTickFormatter}
              />
            )}
            {tooltip && (
              <Tooltip
                cursor={{ stroke: "var(--border)", strokeWidth: 1 }}
                content={
                  <ChartTooltipContent
                    valueFormatter={valueFormatter}
                    labelFormatter={labelFormatter}
                  />
                }
              />
            )}
            {series.map((s) => {
              const color = resolveColor(s.color);
              const fill = s.fill ?? "gradient";
              const dash =
                s.variant === "dashed" ? "6 3" : s.variant === "dotted" ? "2 4" : undefined;
              return (
                <Area
                  key={s.key}
                  type={curve}
                  dataKey={s.key}
                  name={s.label ?? s.key}
                  stackId={stacked ? "stack" : undefined}
                  stroke={color}
                  strokeWidth={s.strokeWidth ?? 2}
                  strokeDasharray={dash}
                  fill={
                    fill === "none"
                      ? "none"
                      : fill === "solid"
                        ? color
                        : `url(#${gradId("area", s.key)})`
                  }
                  fillOpacity={fill === "solid" ? 0.2 : 1}
                  dot={false}
                  activeDot={
                    fill === "none"
                      ? false
                      : { r: 3, strokeWidth: 2, stroke: color, fill: "var(--card)" }
                  }
                  isAnimationActive={false}
                />
              );
            })}
          </RAreaChart>
        </ResponsiveContainer>
      </div>
      {legend && <ChartLegend series={series} />}
    </div>
  );
}
