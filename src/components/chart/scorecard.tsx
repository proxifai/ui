import * as React from "react";

import { cn } from "../../lib/utils";

export interface ScorecardProps {
  label: string;
  value: React.ReactNode;
  /** Optional small text below value (e.g. "+12% vs last week"). */
  sublabel?: React.ReactNode;
  /** Icon shown next to sublabel. */
  icon?: React.ComponentType<{ className?: string }>;
  /** Color class for the sublabel + icon, e.g. `text-emerald-500`. */
  tone?: string;
  className?: string;
}

export function Scorecard({ label, value, sublabel, icon: Icon, tone, className }: ScorecardProps) {
  return (
    <div
      data-slot="scorecard"
      className={cn(
        "bg-card text-card-foreground rounded-xl border shadow-sm p-5",
        className,
      )}
    >
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-3xl font-bold text-foreground tabular-nums tracking-tight mt-1">
        {value}
      </p>
      {sublabel !== undefined && sublabel !== null && (
        <p className={cn("text-xs mt-2 flex items-center gap-1", tone ?? "text-muted-foreground")}>
          {Icon && <Icon className="w-3 h-3" />}
          {sublabel}
        </p>
      )}
    </div>
  );
}
