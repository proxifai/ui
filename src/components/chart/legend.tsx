import * as React from "react";

import { cn } from "../../lib/utils";
import { resolveColor } from "./theme";
import type { ChartSeries } from "./types";

export interface ChartLegendProps {
  series: ChartSeries[];
  className?: string;
  /** Optional override of the swatch shape; default: `square`. */
  shape?: "square" | "dot" | "line";
}

export function ChartLegend({ series, className, shape = "square" }: ChartLegendProps) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-5 gap-y-1.5 mt-3 pl-1", className)}>
      {series.map((s) => {
        const color = resolveColor(s.color);
        const dashed = s.variant === "dashed" || s.variant === "dotted";
        return (
          <span
            key={s.key}
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            {shape === "line" || (shape === "square" && dashed) ? (
              <span
                className="inline-block w-3"
                style={{
                  borderTop: `2px ${s.variant === "dotted" ? "dotted" : dashed ? "dashed" : "solid"} ${color}`,
                }}
                aria-hidden
              />
            ) : shape === "dot" ? (
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: color }}
                aria-hidden
              />
            ) : (
              <span
                className="w-2.5 h-2.5 rounded-sm"
                style={{ backgroundColor: color }}
                aria-hidden
              />
            )}
            {s.label ?? s.key}
          </span>
        );
      })}
    </div>
  );
}
