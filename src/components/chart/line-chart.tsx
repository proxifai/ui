import * as React from "react";
import {
  CartesianGrid,
  Line,
  LineChart as RLineChart,
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

export interface LineChartProps extends ChartCommonProps {
  curve?: "monotone" | "linear" | "step";
  valueFormatter?: ChartTooltipContentProps["valueFormatter"];
  labelFormatter?: ChartTooltipContentProps["labelFormatter"];
}

export function LineChart({
  data,
  xKey,
  series,
  height = CHART_DEFAULTS.height.line,
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
}: LineChartProps) {
  const m = { top: 8, right: 8, bottom: 0, left: -8, ...margin };
  return (
    <div className={cn("w-full", className)}>
      <div style={{ height }}>
        <ResponsiveContainer width="100%" height="100%">
          <RLineChart data={data} margin={m}>
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
              const dash =
                s.variant === "dashed" ? "6 3" : s.variant === "dotted" ? "2 4" : undefined;
              return (
                <Line
                  key={s.key}
                  type={curve}
                  dataKey={s.key}
                  name={s.label ?? s.key}
                  stroke={color}
                  strokeWidth={s.strokeWidth ?? 2}
                  strokeDasharray={dash}
                  dot={false}
                  activeDot={{ r: 3, strokeWidth: 2, stroke: color, fill: "var(--card)" }}
                  isAnimationActive={false}
                />
              );
            })}
          </RLineChart>
        </ResponsiveContainer>
      </div>
      {legend && <ChartLegend series={series} shape="line" />}
    </div>
  );
}
