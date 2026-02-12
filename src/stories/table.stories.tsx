import type { Story } from "@ladle/react"
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "../components/table"

export default { title: "Components/Table" }

const invoices = [
  { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { id: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
  { id: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  { id: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
]

export const Default: Story = () => (
  <Table>
    <TableCaption>A list of recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {invoices.map((inv) => (
        <TableRow key={inv.id}>
          <TableCell className="font-medium">{inv.id}</TableCell>
          <TableCell>{inv.status}</TableCell>
          <TableCell>{inv.method}</TableCell>
          <TableCell className="text-right">{inv.amount}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)
