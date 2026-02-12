import type { Story } from "@ladle/react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "../components/card"
import { Button } from "../components/button"
import { Input } from "../components/input"
import { Label } from "../components/label"

export default { title: "Components/Card" }

export const Default: Story = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="My Project" />
        </div>
      </div>
    </CardContent>
    <CardFooter className="justify-end gap-2">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
)

export const WithAction: Story = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Notifications</CardTitle>
      <CardDescription>You have 3 unread messages.</CardDescription>
      <CardAction>
        <Button variant="outline" size="sm">View all</Button>
      </CardAction>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground">
        Your recent notifications will appear here.
      </p>
    </CardContent>
  </Card>
)

export const Simple: Story = () => (
  <Card className="max-w-sm">
    <CardHeader>
      <CardTitle>Team Members</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold">12</p>
      <p className="text-xs text-muted-foreground">+2 from last month</p>
    </CardContent>
  </Card>
)
