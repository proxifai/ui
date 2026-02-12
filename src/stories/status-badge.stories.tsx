import type { Story } from "@ladle/react"
import { StatusBadge, type StatusConfig } from "../components/status-badge"
import { Loader2, CheckCircle, XCircle, Clock, Ban } from "lucide-react"

export default { title: "Components/StatusBadge" }

const agentConfig: Record<string, StatusConfig> = {
  running: { label: "Running", icon: Loader2, className: "bg-info/10 text-info border-info/20" },
  completed: { label: "Completed", icon: CheckCircle, className: "bg-success/10 text-success border-success/20" },
  failed: { label: "Failed", icon: XCircle, className: "bg-error/10 text-error border-error/20" },
  queued: { label: "Queued", icon: Clock, className: "bg-warning/10 text-warning border-warning/20" },
  cancelled: { label: "Cancelled", icon: Ban, className: "bg-muted text-muted-foreground border-border" },
}

export const AllStatuses: Story = () => (
  <div className="flex gap-2 flex-wrap">
    {Object.keys(agentConfig).map((status) => (
      <StatusBadge
        key={status}
        status={status}
        config={agentConfig}
        animateStatus="running"
      />
    ))}
  </div>
)

export const NoIcon: Story = () => (
  <div className="flex gap-2 flex-wrap">
    {Object.keys(agentConfig).map((status) => (
      <StatusBadge
        key={status}
        status={status}
        config={agentConfig}
        showIcon={false}
      />
    ))}
  </div>
)

export const SingleStatus: Story = () => (
  <StatusBadge status="running" config={agentConfig} animateStatus="running" />
)
