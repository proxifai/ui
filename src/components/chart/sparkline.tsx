import * as React from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

import { cn } from "../../lib/utils";
import { CHART_DEFAULTS, gradId, resolveColor, type ChartColor } from "./theme";
import type { ChartDatum } from "./types";

export interface SparklineProps {
  data: ChartDatum[];
  /** dataKey to plot. */
  dataKey: string;
  color?: ChartColor;
  height?: number;
  /** Fill style under the line. */
  fill?: "none" | "solid" | "gradient";
  strokeWidth?: number;
  className?: string;
}

export function Sparkline({
  data,
  dataKey,
  color = "primary",
  height = CHART_DEFAULTS.height.sparkline,
  fill = "gradient",
  strokeWidth = 1.5,
  className,
}: SparklineProps) {
  const stroke = resolveColor(color);
  const id = gradId("spark", dataKey);
  return (
    <div className={cn("w-full", className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
          {fill === "gradient" && (
            <defs>
              <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={stroke} stopOpacity={0.3} />
                <stop offset="100%" stopColor={stroke} stopOpacity={0} />
              </linearGradient>
            </defs>
          )}
          <Area
            type="monotone"
            dataKey={dataKey}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill={fill === "none" ? "none" : fill === "solid" ? stroke : `url(#${id})`}
            fillOpacity={fill === "solid" ? 0.2 : 1}
            dot={false}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
