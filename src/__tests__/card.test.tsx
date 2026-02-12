import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "../components/card"

describe("Card", () => {
  it("renders all sub-components", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Description</CardDescription>
          <CardAction>Action</CardAction>
        </CardHeader>
        <CardContent>Content</CardContent>
        <CardFooter>Footer</CardFooter>
      </Card>
    )

    expect(screen.getByText("Title")).toBeInTheDocument()
    expect(screen.getByText("Description")).toBeInTheDocument()
    expect(screen.getByText("Action")).toBeInTheDocument()
    expect(screen.getByText("Content")).toBeInTheDocument()
    expect(screen.getByText("Footer")).toBeInTheDocument()
  })

  it("applies custom className to Card", () => {
    const { container } = render(<Card className="custom-card">Content</Card>)
    expect(container.firstChild).toHaveClass("custom-card")
  })

  it("has correct data-slot attributes", () => {
    const { container } = render(
      <Card>
        <CardHeader>
          <CardTitle>T</CardTitle>
        </CardHeader>
        <CardContent>C</CardContent>
      </Card>
    )
    expect(container.querySelector('[data-slot="card"]')).toBeInTheDocument()
    expect(
      container.querySelector('[data-slot="card-header"]')
    ).toBeInTheDocument()
    expect(
      container.querySelector('[data-slot="card-title"]')
    ).toBeInTheDocument()
    expect(
      container.querySelector('[data-slot="card-content"]')
    ).toBeInTheDocument()
  })
})
