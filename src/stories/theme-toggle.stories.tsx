import type { Story } from "@ladle/react"
import { ThemeProvider } from "../components/theme-provider"
import { ThemeToggle } from "../components/theme-toggle"

export default { title: "Components/ThemeToggle" }

export const Default: Story = () => (
  <ThemeProvider storageKey="ladle-demo-theme">
    <div className="flex items-center gap-4">
      <ThemeToggle />
      <span className="text-sm text-muted-foreground">
        Click to toggle dark/light mode
      </span>
    </div>
  </ThemeProvider>
)

export const Styled: Story = () => (
  <ThemeProvider storageKey="ladle-demo-theme-2">
    <div className="flex items-center gap-4">
      <ThemeToggle className="border border-border rounded-md" />
      <span className="text-sm text-muted-foreground">
        With border styling
      </span>
    </div>
  </ThemeProvider>
)
