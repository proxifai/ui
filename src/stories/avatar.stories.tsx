import type { Story } from "@ladle/react"
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "../components/avatar"

export default { title: "Components/Avatar" }

export const Default: Story = () => (
  <Avatar>
    <AvatarImage src="https://i.pravatar.cc/150?u=a" alt="User" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
)

export const Fallback: Story = () => (
  <Avatar>
    <AvatarImage src="" alt="User" />
    <AvatarFallback>AB</AvatarFallback>
  </Avatar>
)

export const Sizes: Story = () => (
  <div className="flex items-center gap-3">
    <Avatar size="sm">
      <AvatarFallback>SM</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarFallback>DF</AvatarFallback>
    </Avatar>
    <Avatar size="lg">
      <AvatarFallback>LG</AvatarFallback>
    </Avatar>
  </div>
)

export const Group: Story = () => (
  <AvatarGroup>
    <Avatar>
      <AvatarImage src="https://i.pravatar.cc/150?u=1" />
      <AvatarFallback>A</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="https://i.pravatar.cc/150?u=2" />
      <AvatarFallback>B</AvatarFallback>
    </Avatar>
    <Avatar>
      <AvatarImage src="https://i.pravatar.cc/150?u=3" />
      <AvatarFallback>C</AvatarFallback>
    </Avatar>
    <AvatarGroupCount count={5} />
  </AvatarGroup>
)
