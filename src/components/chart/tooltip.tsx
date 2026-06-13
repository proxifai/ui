import * as React from "react";

import { cn } from "../../lib/utils";

interface TooltipEntry {
  name: string;
  value: number | string;
  color: string;
  dataKey?: string;
}

export interface ChartTooltipContentProps {
  active?: boolean;
  payload?: TooltipEntry[];
  label?: string | number;
  /** Format the displayed value per series. Receives raw value + series name. */
  valueFormatter?: (value: number | string, name: string) => string;
  /** Format the displayed label. */
  labelFormatter?: (label: string | number) => string;
  className?: string;
}

export function ChartTooltipContent({
  active,
  payload,
  label,
  valueFormatter,
  labelFormatter,
  className,
}: ChartTooltipContentProps) {
  if (!active || !payload?.length) return null;
  const lbl = label !== undefined ? (labelFormatter ? labelFormatter(label) : String(label)) : null;
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-popover/95 backdrop-blur-md px-3 py-2.5 shadow-xl",
        className,
      )}
    >
      {lbl !== null && <p className="text-[11px] text-muted-foreground mb-1">{lbl}</p>}
      <div className="space-y-1">
        {payload.map((e, i) => {
          const display = valueFormatter ? valueFormatter(e.value, e.name) : String(e.value);
          return (
            <div key={i} className="flex items-center justify-between gap-6">
              <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span
                  className="w-2 h-2 rounded-sm"
                  style={{ backgroundColor: e.color }}
                  aria-hidden
                />
                {e.name}
              </span>
              <span className="text-[11px] font-semibold text-foreground tabular-nums">{display}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
