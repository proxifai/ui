import type { Story } from "@ladle/react"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "../components/sheet"
import { Button } from "../components/button"
import { Input } from "../components/input"
import { Label } from "../components/label"

export default { title: "Components/Sheet" }

export const Right: Story = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open Right</Button>
    </SheetTrigger>
    <SheetContent side="right">
      <div className="p-6 space-y-4">
        <h2 className="text-lg font-semibold">Edit Profile</h2>
        <div className="space-y-2">
          <Label htmlFor="s-name">Name</Label>
          <Input id="s-name" defaultValue="John Doe" />
        </div>
        <div className="flex justify-end gap-2">
          <SheetClose asChild>
            <Button variant="outline">Cancel</Button>
          </SheetClose>
          <Button>Save</Button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
)

export const Left: Story = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open Left</Button>
    </SheetTrigger>
    <SheetContent side="left">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-4">Navigation</h2>
        <nav className="space-y-2">
          <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">Home</a>
          <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">Projects</a>
          <a href="#" className="block text-sm text-muted-foreground hover:text-foreground">Settings</a>
        </nav>
      </div>
    </SheetContent>
  </Sheet>
)
