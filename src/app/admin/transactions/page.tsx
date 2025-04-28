import Link from "next/link";
import { Search, FileText, Eye, Download } from "lucide-react";

export default function AdminTransactions() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Manage Transactions
        </h1>
        <button className="flex items-center gap-2 rounded-md bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800">
          <Download className="h-4 w-4" />
          Export
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <select className="rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500">
            <option>All Status</option>
            <option>Completed</option>
            <option>Processing</option>
            <option>Cancelled</option>
          </select>
          <select className="rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Last year</option>
            <option>All time</option>
          </select>
        </div>

        <div className="relative">
          <input
            type="text"
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
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((order) => (
              <tr key={order} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-teal-700">
                  #ORD-{2023000 + order}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                  {
                    [
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
                    ][order - 1]
                  }
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  Nov {order + 10}, 2023
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                  ${(129.99 * order).toFixed(2)}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {order % 3 === 0
                    ? "PayPal"
                    : order % 3 === 1
                    ? "Credit Card"
                    : "Apple Pay"}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      order % 3 === 0
                        ? "bg-yellow-100 text-yellow-800"
                        : order % 3 === 1
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {order % 3 === 0
                      ? "Processing"
                      : order % 3 === 1
                      ? "Completed"
                      : "Cancelled"}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <Link
                      href={`/admin/transactions/${2023000 + order}`}
                      className="text-teal-600 hover:text-teal-900"
                    >
                      <Eye className="h-5 w-5" />
                    </Link>
                    <Link
                      href={`/admin/transactions/${2023000 + order}/invoice`}
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
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">10</span> of{" "}
          <span className="font-medium">50</span> transactions
        </div>

        <div className="flex space-x-1">
          <button className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-500 hover:bg-gray-50">
            Previous
          </button>
          <button className="rounded-md border border-teal-700 bg-teal-700 px-3 py-1 text-sm font-medium text-white">
            1
          </button>
          <button className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 hover:bg-gray-50">
            3
          </button>
          <button className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 hover:bg-gray-50">
            4
          </button>
          <button className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 hover:bg-gray-50">
            5
          </button>
          <button className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-500 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
