import type { Story } from "@ladle/react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "../components/dialog"
import { Button } from "../components/button"
import { Input } from "../components/input"
import { Label } from "../components/label"

export default { title: "Components/Dialog" }

export const Default: Story = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Open Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when done.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" defaultValue="John Doe" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" defaultValue="@johndoe" />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">Cancel</Button>
        </DialogClose>
        <Button>Save changes</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)

export const NoCloseButton: Story = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button>Open</Button>
    </DialogTrigger>
    <DialogContent showCloseButton={false}>
      <DialogHeader>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogDescription>Are you sure?</DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline">No</Button>
        </DialogClose>
        <Button variant="destructive">Yes, delete</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
)
