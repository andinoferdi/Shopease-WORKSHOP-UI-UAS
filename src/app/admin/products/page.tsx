import Image from "next/image"
import { Search, Plus, Edit, Trash2, MoreHorizontal } from "lucide-react"

export default function AdminProducts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Manage Products</h1>
        <button className="flex items-center gap-2 rounded-md bg-teal-700 px-4 py-2 text-sm font-medium text-white hover:bg-teal-800">
          <Plus className="h-4 w-4" />
          Add Product
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <select className="rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Home & Kitchen</option>
          </select>
          <select className="rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500">
            <option>All Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
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
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                  />
                </div>
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Product
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
              >
                Stock
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((product) => (
              <tr key={product} className="hover:bg-gray-50">
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    />
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <div className="flex items-center">
                    <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
                      <Image src="/placeholder.svg?height=40&width=40" alt="Product" fill className="object-cover" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {
                          [
                            "Premium Wireless Headphones",
                            "Smart Watch",
                            "Bluetooth Speaker",
                            "Laptop Backpack",
                            "Wireless Earbuds",
                            "Fitness Tracker",
                            "Portable Charger",
                            "Wireless Mouse",
                          ][product - 1]
                        }
                      </div>
                      <div className="text-sm text-gray-500">SKU: PRD-{1000 + product}</div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  {
                    [
                      "Electronics",
                      "Electronics",
                      "Electronics",
                      "Accessories",
                      "Electronics",
                      "Electronics",
                      "Electronics",
                      "Electronics",
                    ][product - 1]
                  }
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                  ${(99.99 + product * 10).toFixed(2)}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{50 - product * 5}</td>
                <td className="whitespace-nowrap px-6 py-4 text-sm">
                  <span
                    className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                      product % 3 === 0
                        ? "bg-yellow-100 text-yellow-800"
                        : product % 3 === 1
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {product % 3 === 0 ? "Low Stock" : product % 3 === 1 ? "In Stock" : "Out of Stock"}
                  </span>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                  <div className="flex space-x-2">
                    <button className="text-teal-600 hover:text-teal-900">
                      <Edit className="h-5 w-5" />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 className="h-5 w-5" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{" "}
          <span className="font-medium">24</span> products
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
          <button className="rounded-md border border-gray-300 bg-white px-3 py-1 text-sm text-gray-500 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
