import type { Story } from "@ladle/react"

export default { title: "Design Tokens" }

/* ── Color swatches ─────────────────────────────────────── */

const semanticColors = [
  { name: "background", var: "--background" },
  { name: "foreground", var: "--foreground" },
  { name: "primary", var: "--primary" },
  { name: "primary-foreground", var: "--primary-foreground" },
  { name: "secondary", var: "--secondary" },
  { name: "secondary-foreground", var: "--secondary-foreground" },
  { name: "muted", var: "--muted" },
  { name: "muted-foreground", var: "--muted-foreground" },
  { name: "accent", var: "--accent" },
  { name: "accent-foreground", var: "--accent-foreground" },
  { name: "destructive", var: "--destructive" },
  { name: "border", var: "--border" },
  { name: "input", var: "--input" },
  { name: "ring", var: "--ring" },
  { name: "card", var: "--card" },
  { name: "popover", var: "--popover" },
  { name: "surface", var: "--surface" },
  { name: "surface-hover", var: "--surface-hover" },
]

const statusColors = [
  { name: "success", var: "--status-success" },
  { name: "warning", var: "--status-warning" },
  { name: "error", var: "--status-error" },
  { name: "info", var: "--status-info" },
]

const zincScale = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950].map(
  (n) => ({ name: `zinc-${n}`, var: `--color-zinc-${n}` })
)

function Swatch({ name, cssVar }: { name: string; cssVar: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-10 h-10 rounded-md border border-border shrink-0"
        style={{ backgroundColor: `var(${cssVar})` }}
      />
      <div>
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-muted-foreground font-mono">{cssVar}</p>
      </div>
    </div>
  )
}

export const SemanticColors: Story = () => (
  <div className="space-y-6 max-w-2xl">
    <div>
      <h2 className="text-lg font-semibold mb-4">Semantic Colors</h2>
      <p className="text-sm text-muted-foreground mb-6">
        These colors adapt automatically between light and dark themes.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {semanticColors.map((c) => (
          <Swatch key={c.name} name={c.name} cssVar={c.var} />
        ))}
      </div>
    </div>
  </div>
)

export const StatusColors: Story = () => (
  <div className="space-y-6 max-w-2xl">
    <h2 className="text-lg font-semibold mb-4">Status Colors</h2>
    <div className="grid grid-cols-2 gap-4">
      {statusColors.map((c) => (
        <Swatch key={c.name} name={c.name} cssVar={c.var} />
      ))}
    </div>
  </div>
)

export const ZincScale: Story = () => (
  <div className="space-y-6 max-w-2xl">
    <h2 className="text-lg font-semibold mb-4">Zinc Scale</h2>
    <p className="text-sm text-muted-foreground mb-4">
      Primary gray scale used throughout the design system.
    </p>
    <div className="flex gap-1">
      {zincScale.map((c) => (
        <div key={c.name} className="flex-1 text-center">
          <div
            className="h-16 rounded-md border border-border mb-2"
            style={{ backgroundColor: `var(${c.var})` }}
          />
          <p className="text-[10px] text-muted-foreground">{c.name.replace("zinc-", "")}</p>
        </div>
      ))}
    </div>
  </div>
)

export const BrandColors: Story = () => (
  <div className="space-y-6 max-w-2xl">
    <h2 className="text-lg font-semibold mb-4">Brand Colors</h2>
    <div className="grid grid-cols-2 gap-4">
      <Swatch name="brand-primary" cssVar="--color-brand-primary" />
      <Swatch name="brand-primary-hover" cssVar="--color-brand-primary-hover" />
      <Swatch name="brand-primary-light" cssVar="--color-brand-primary-light" />
      <Swatch name="brand-secondary" cssVar="--color-brand-secondary" />
      <Swatch name="brand-secondary-hover" cssVar="--color-brand-secondary-hover" />
    </div>
  </div>
)

/* ── Radius ─────────────────────────────────────────────── */

const radii = [
  { name: "sm", var: "--radius-sm" },
  { name: "md", var: "--radius-md" },
  { name: "lg", var: "--radius-lg" },
  { name: "xl", var: "--radius-xl" },
  { name: "2xl", var: "--radius-2xl" },
  { name: "full", var: "--radius-full" },
]

export const BorderRadius: Story = () => (
  <div className="space-y-6 max-w-2xl">
    <h2 className="text-lg font-semibold mb-4">Border Radius</h2>
    <div className="flex gap-6 flex-wrap">
      {radii.map((r) => (
        <div key={r.name} className="text-center">
          <div
            className="w-20 h-20 bg-primary mb-2"
            style={{ borderRadius: `var(${r.var})` }}
          />
          <p className="text-xs font-medium">{r.name}</p>
          <p className="text-[10px] text-muted-foreground font-mono">{r.var}</p>
        </div>
      ))}
    </div>
  </div>
)

/* ── Spacing reference ──────────────────────────────────── */

const spacings = [0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10, 12, 16]

export const Spacing: Story = () => (
  <div className="space-y-6 max-w-2xl">
    <h2 className="text-lg font-semibold mb-4">Spacing Scale</h2>
    <p className="text-sm text-muted-foreground mb-4">
      Tailwind default spacing scale (in rem units).
    </p>
    <div className="space-y-2">
      {spacings.map((s) => (
        <div key={s} className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground w-8 text-right font-mono">
            {s}
          </span>
          <div
            className="h-4 bg-primary rounded-sm"
            style={{ width: `${s * 0.25}rem` }}
          />
          <span className="text-xs text-muted-foreground font-mono">
            {s * 0.25}rem / {s * 4}px
          </span>
        </div>
      ))}
    </div>
  </div>
)
