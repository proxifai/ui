import type { Story } from "@ladle/react"
import {
  AreaChart,
  BarChart,
  LineChart,
  DonutChart,
  Sparkline,
  Scorecard,
} from "../components/chart"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/card"
import { CheckCircle2, Clock, TrendingUp, Users } from "lucide-react"

export default { title: "Components/Chart" }

// ── Sample data ─────────────────────────────────────────────────────────────

const throughput = Array.from({ length: 14 }, (_, i) => ({
  day: `${i + 1}`,
  Created: Math.round(8 + Math.sin(i / 2) * 4 + Math.random() * 3),
  Completed: Math.round(6 + Math.cos(i / 2) * 4 + Math.random() * 3),
}))

const burndown = Array.from({ length: 14 }, (_, i) => ({
  day: `D${i}`,
  Ideal: Math.max(0, 20 - i * (20 / 13)),
  Actual: Math.max(0, 20 - i * (20 / 13) + Math.sin(i) * 2),
}))

const workload = [
  { name: "Alice", Done: 12, Active: 4, Remaining: 3 },
  { name: "Bob", Done: 8, Active: 6, Remaining: 5 },
  { name: "Carol", Done: 14, Active: 2, Remaining: 1 },
  { name: "Dan", Done: 6, Active: 5, Remaining: 7 },
  { name: "Eve", Done: 10, Active: 3, Remaining: 4 },
]

const latency = Array.from({ length: 30 }, (_, i) => ({
  t: `${i}m`,
  p50: 120 + Math.sin(i / 3) * 20,
  p95: 280 + Math.cos(i / 4) * 40,
  p99: 420 + Math.sin(i / 5) * 60,
}))

const statusDist = [
  { name: "Backlog", value: 8, color: "zinc" as const },
  { name: "To Do", value: 5, color: "muted" as const },
  { name: "In Progress", value: 6, color: "blue" as const },
  { name: "In Review", value: 3, color: "violet" as const },
  { name: "Done", value: 18, color: "emerald" as const },
]

const sparklineData = Array.from({ length: 30 }, (_, i) => ({
  value: 50 + Math.sin(i / 3) * 15 + Math.random() * 10,
}))

// ── Stories ─────────────────────────────────────────────────────────────────

export const AreaStacked: Story = () => (
  <Card className="max-w-2xl py-0">
    <CardHeader className="p-5 pb-0">
      <CardTitle className="text-sm font-medium">Throughput (14 days)</CardTitle>
      <CardDescription>Issues created vs completed per day</CardDescription>
    </CardHeader>
    <CardContent className="p-5 pt-4">
      <AreaChart
        data={throughput}
        xKey="day"
        series={[
          { key: "Created", color: "blue" },
          { key: "Completed", color: "emerald" },
        ]}
        stacked
        legend
      />
    </CardContent>
  </Card>
)

export const AreaIdealVsActual: Story = () => (
  <Card className="max-w-2xl py-0">
    <CardHeader className="p-5 pb-0">
      <CardTitle className="text-sm font-medium">Burndown</CardTitle>
      <CardDescription>Ideal vs actual remaining tasks</CardDescription>
    </CardHeader>
    <CardContent className="p-5 pt-4">
      <AreaChart
        data={burndown}
        xKey="day"
        series={[
          { key: "Ideal", label: "Ideal", color: "zinc", variant: "dashed", fill: "none", strokeWidth: 1.5 },
          { key: "Actual", label: "Actual", color: "blue", strokeWidth: 2 },
        ]}
        legend
      />
    </CardContent>
  </Card>
)

export const BarStacked: Story = () => (
  <Card className="max-w-2xl py-0">
    <CardHeader className="p-5 pb-0">
      <CardTitle className="text-sm font-medium">Workload by Member</CardTitle>
      <CardDescription>Task distribution across the team</CardDescription>
    </CardHeader>
    <CardContent className="p-5 pt-4">
      <BarChart
        data={workload}
        xKey="name"
        series={[
          { key: "Done", color: "emerald" },
          { key: "Active", color: "blue" },
          { key: "Remaining", color: "muted" },
        ]}
        stacked
        legend
      />
    </CardContent>
  </Card>
)

export const Lines: Story = () => (
  <Card className="max-w-2xl py-0">
    <CardHeader className="p-5 pb-0">
      <CardTitle className="text-sm font-medium">API Latency</CardTitle>
      <CardDescription>P50 / P95 / P99 (ms)</CardDescription>
    </CardHeader>
    <CardContent className="p-5 pt-4">
      <LineChart
        data={latency}
        xKey="t"
        series={[
          { key: "p50", label: "P50", color: "emerald" },
          { key: "p95", label: "P95", color: "amber" },
          { key: "p99", label: "P99", color: "red" },
        ]}
        legend
        valueFormatter={(v) => `${v}ms`}
      />
    </CardContent>
  </Card>
)

export const Donut: Story = () => {
  const total = statusDist.reduce((a, b) => a + b.value, 0)
  const done = statusDist.find((s) => s.name === "Done")?.value ?? 0
  const pct = Math.round((done / total) * 100)
  return (
    <Card className="max-w-2xl py-0">
      <CardHeader className="p-5 pb-0">
        <CardTitle className="text-sm font-medium">Status Overview</CardTitle>
        <CardDescription>Current distribution</CardDescription>
      </CardHeader>
      <CardContent className="p-5 pt-2">
        <div className="flex items-center gap-8">
          <DonutChart
            data={statusDist}
            centerLabel={`${pct}%`}
            centerSublabel="done"
          />
          <div className="flex-1 space-y-3">
            {statusDist.map((e) => (
              <div key={e.name} className="flex items-center gap-3">
                <span
                  className="w-2.5 h-2.5 rounded-sm shrink-0"
                  style={{ backgroundColor: e.color === "zinc" ? "#71717a" : e.color === "muted" ? "#27272a" : e.color === "blue" ? "#3b82f6" : e.color === "violet" ? "#8b5cf6" : "#10b981" }}
                />
                <span className="text-sm text-foreground flex-1">{e.name}</span>
                <span className="text-sm font-semibold text-foreground tabular-nums">{e.value}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export const SparklineDemo: Story = () => (
  <div className="grid grid-cols-2 gap-3 max-w-2xl">
    {[
      { label: "CPU usage", value: "0.42 cores", color: "blue" as const },
      { label: "Memory", value: "1.2 GiB", color: "violet" as const },
      { label: "Network in", value: "320 KB/s", color: "emerald" as const },
      { label: "Errors", value: "0.03/s", color: "red" as const },
    ].map((m) => (
      <div key={m.label} className="rounded-lg border border-border bg-card overflow-hidden">
        <div className="flex items-center justify-between px-4 pt-3 pb-1">
          <span className="text-xs text-muted-foreground font-medium">{m.label}</span>
          <span className="text-lg font-semibold text-foreground tabular-nums font-mono">{m.value}</span>
        </div>
        <Sparkline data={sparklineData} dataKey="value" color={m.color} />
      </div>
    ))}
  </div>
)

export const Scorecards: Story = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl">
    <Scorecard label="Team Members" value={12} icon={Users} />
    <Scorecard label="Completed" value={84} sublabel="73% of total" icon={CheckCircle2} tone="text-emerald-500" />
    <Scorecard label="In Progress" value={9} icon={Clock} tone="text-blue-500" />
    <Scorecard label="Velocity" value="+14%" sublabel="vs last sprint" icon={TrendingUp} tone="text-emerald-500" />
  </div>
)
