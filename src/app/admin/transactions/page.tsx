"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, FileText, Eye, Download } from "lucide-react"

interface Transaction {
  id: number
  orderId: string
  customer: string
  date: string
  amount: number
  paymentMethod: string
  status: 'Processing' | 'Completed' | 'Cancelled'
}

export default function AdminTransactions() {
  // State for filters
  const [statusFilter, setStatusFilter] = useState<string>("All Status")
  const [timeFilter, setTimeFilter] = useState<string>("Last 30 days")
  const [searchQuery, setSearchQuery] = useState<string>("")
  
  // State for pagination
  const [currentPage, setCurrentPage] = useState<number>(1)
  const totalPages = 5
  
  // Generate sample transaction data
  const transactions: Transaction[] = Array.from({ length: 10 }, (_, i) => {
    const order = i + 1
    return {
      id: order,
      orderId: `#ORD-${2023000 + order}`,
      customer: [
        "John Doe",
        "Jane Smith",
        "Robert Johnson",
        "Emily Davis",
        "Michael Wilson",
        "Sarah Brown",
        "David Miller",
        "Lisa Taylor",
        "James Anderson",
        "Patricia Thomas",
      ][order - 1],
      date: `Nov ${order + 10}, 2023`,
      amount: 129.99 * order,
      paymentMethod: order % 3 === 0 ? "PayPal" : order % 3 === 1 ? "Credit Card" : "Apple Pay",
      status: order % 3 === 0 ? "Processing" : order % 3 === 1 ? "Completed" : "Cancelled",
    }
  })
  
  // Function handlers
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value)
  }
  
  const handleTimeFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeFilter(e.target.value)
  }
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }
  
  const handleExport = () => {
    // Implement export functionality
    alert("Export functionality will be implemented")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Manage Transactions</h1>
        <button 
          onClick={handleExport}
          className="flex items-center gap-2 rounded-md bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800"
        >
          <Download className="h-4 w-4" />
          Export
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <select 
            value={statusFilter}
            onChange={handleStatusChange}
            className="rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          >
            <option>All Status</option>
            <option>Completed</option>
            <option>Processing</option>
            <option>Cancelled</option>
          </select>
          <select 
            value={timeFilter}
            onChange={handleTimeFilterChange}
            className="rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          >
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last year</option>
            <option>All time</option>
          </select>
        </div>

        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search transactions..."
            className="w-full rounded-md border border-gray-300 pl-10 pr-4 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Order ID
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Customer
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Amount
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Payment Method
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-teal-700">
                  {transaction.orderId}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                  {transaction.customer}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{transaction.date}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">${transaction.amount.toFixed(2)}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {transaction.paymentMethod}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      transaction.status === "Processing"
                        ? "bg-yellow-100 text-yellow-800"
                        : transaction.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <Link href={`/admin/transactions/${transaction.orderId.substring(1)}`} className="text-teal-600 hover:text-teal-900">
                      <Eye className="h-5 w-5" />
                    </Link>
                    <Link
                      href={`/admin/transactions/${transaction.orderId.substring(1)}/invoice`}
                      className="text-teal-600 hover:text-teal-900"
                    >
                      <FileText className="h-5 w-5" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{" "}
          <span className="font-medium">50</span> transactions
        </div>

        <div className="flex space-x-1">
          <button 
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-500 hover:bg-gray-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`rounded-md border px-3 py-1 text-sm font-medium ${
                currentPage === page
                  ? "border-teal-700 bg-teal-700 text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
          <button 
            onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
            className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-500 hover:bg-gray-50"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
