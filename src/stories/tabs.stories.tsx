import type { Story } from "@ladle/react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/tabs"

export default { title: "Components/Tabs" }

export const Default: Story = () => (
  <Tabs defaultValue="account" className="max-w-md">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="team">Team</TabsTrigger>
    </TabsList>
    <TabsContent value="account" className="p-4">
      <p className="text-sm text-muted-foreground">
        Update your account settings and preferences.
      </p>
    </TabsContent>
    <TabsContent value="password" className="p-4">
      <p className="text-sm text-muted-foreground">
        Change your password and security settings.
      </p>
    </TabsContent>
    <TabsContent value="team" className="p-4">
      <p className="text-sm text-muted-foreground">
        Manage your team members and roles.
      </p>
    </TabsContent>
  </Tabs>
)

export const LineVariant: Story = () => (
  <Tabs defaultValue="overview" className="max-w-md">
    <TabsList variant="line">
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="analytics">Analytics</TabsTrigger>
      <TabsTrigger value="reports">Reports</TabsTrigger>
    </TabsList>
    <TabsContent value="overview" className="p-4">Overview content</TabsContent>
    <TabsContent value="analytics" className="p-4">Analytics content</TabsContent>
    <TabsContent value="reports" className="p-4">Reports content</TabsContent>
  </Tabs>
)
