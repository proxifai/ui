import * as React from "react";
import { Cell, Pie, PieChart as RPieChart, ResponsiveContainer, Tooltip } from "recharts";

import { cn } from "../../lib/utils";
import { CHART_DEFAULTS, resolveColor, type ChartColor } from "./theme";
import { ChartTooltipContent, type ChartTooltipContentProps } from "./tooltip";

export interface DonutDatum {
  name: string;
  value: number;
  color?: ChartColor;
}

export interface DonutChartProps {
  data: DonutDatum[];
  size?: number;
  /** Inner-radius ratio (0–0.95). Default: 0.7 (typical donut). 0 = pie. */
  innerRatio?: number;
  /** Text shown in the middle of the donut. */
  centerLabel?: React.ReactNode;
  /** Smaller text below `centerLabel`. */
  centerSublabel?: React.ReactNode;
  /** Padding angle between slices in degrees. Default: 3. */
  paddingAngle?: number;
  tooltip?: boolean;
  valueFormatter?: ChartTooltipContentProps["valueFormatter"];
  className?: string;
}

export function DonutChart({
  data,
  size = CHART_DEFAULTS.height.donut,
  innerRatio = 0.7,
  centerLabel,
  centerSublabel,
  paddingAngle = 3,
  tooltip = true,
  valueFormatter,
  className,
}: DonutChartProps) {
  const outer = size / 2 - 8;
  const inner = innerRatio > 0 ? Math.max(0, Math.round(outer * innerRatio)) : 0;
  return (
    <div className={cn("relative shrink-0", className)} style={{ width: size, height: size }}>
      {data.length > 0 && (
        <ResponsiveContainer width="100%" height="100%">
          <RPieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={inner}
              outerRadius={outer}
              paddingAngle={paddingAngle}
              dataKey="value"
              nameKey="name"
              strokeWidth={0}
              isAnimationActive={false}
            >
              {data.map((d, i) => (
                <Cell key={i} fill={resolveColor(d.color, "#3b82f6")} />
              ))}
            </Pie>
            {tooltip && (
              <Tooltip content={<ChartTooltipContent valueFormatter={valueFormatter} />} />
            )}
          </RPieChart>
        </ResponsiveContainer>
      )}
      {(centerLabel || centerSublabel) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {centerLabel && (
            <span className="text-4xl font-bold text-foreground tabular-nums leading-none tracking-tight">
              {centerLabel}
            </span>
          )}
          {centerSublabel && (
            <span className="text-xs text-muted-foreground mt-1">{centerSublabel}</span>
          )}
        </div>
      )}
    </div>
  );
}
