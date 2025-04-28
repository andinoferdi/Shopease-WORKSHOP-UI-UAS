import Link from "next/link";
import {
  ShoppingBag,
  Users,
  DollarSign,
  TrendingUp,
  Package,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <select className="rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>All time</option>
          </select>
          <button className="rounded-md bg-teal-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-teal-800">
            Export
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="rounded-full bg-teal-100 p-3 text-teal-700">
              <DollarSign className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Total Revenue
              </h3>
              <div className="text-2xl font-bold text-gray-900">$24,780</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                <span>+12.5% from last month</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="rounded-full bg-orange-100 p-3 text-orange-700">
              <ShoppingBag className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Total Orders
              </h3>
              <div className="text-2xl font-bold text-gray-900">156</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                <span>+8.2% from last month</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="rounded-full bg-blue-100 p-3 text-blue-700">
              <Users className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Total Customers
              </h3>
              <div className="text-2xl font-bold text-gray-900">1,245</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                <span>+5.3% from last month</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center">
            <div className="rounded-full bg-purple-100 p-3 text-purple-700">
              <Package className="h-6 w-6" />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">
                Total Products
              </h3>
              <div className="text-2xl font-bold text-gray-900">84</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                <span>+2.7% from last month</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">
              Sales Overview
            </h3>
            <select className="rounded-md border border-gray-300 px-2 py-1 text-sm focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-64">
            <div className="flex h-full items-end">
              {[35, 45, 30, 60, 75, 50, 40].map((value, index) => (
                <div key={index} className="mx-1 flex-1">
                  <div
                    className="rounded-t bg-teal-600"
                    style={{ height: `${value}%` }}
                  ></div>
                  <div className="mt-2 text-center text-xs text-gray-500">
                    {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Recent Orders</h3>
            <Link
              href="/admin/transactions"
              className="text-sm font-medium text-teal-700 hover:text-teal-900"
            >
              View All
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Order ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Customer
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Amount
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[1, 2, 3, 4, 5].map((order) => (
                  <tr key={order}>
                    <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-teal-700">
                      #ORD-{2023000 + order}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-900">
                      John Doe
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm text-gray-900">
                      ${(129.99 * order).toFixed(2)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3 text-sm">
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Top Products</h3>
            <Link
              href="/admin/products"
              className="text-sm font-medium text-teal-700 hover:text-teal-900"
            >
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((product) => (
              <div key={product} className="flex items-center">
                <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-md bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <Package className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-900">
                      {
                        [
                          "Premium Wireless Headphones",
                          "Smart Watch",
                          "Bluetooth Speaker",
                          "Laptop Backpack",
                        ][product - 1]
                      }
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      ${(99.99 + product * 10).toFixed(2)}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    {20 - product * 2} sold
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">
              Recent Activities
            </h3>
            <button className="text-sm font-medium text-teal-700 hover:text-teal-900">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {[
              {
                icon: ShoppingBag,
                text: "New order placed",
                time: "5 minutes ago",
              },
              {
                icon: Users,
                text: "New customer registered",
                time: "1 hour ago",
              },
              {
                icon: Package,
                text: "Product stock updated",
                time: "3 hours ago",
              },
              {
                icon: DollarSign,
                text: "Payment received",
                time: "5 hours ago",
              },
            ].map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className="rounded-full bg-gray-100 p-2 text-gray-600">
                  <activity.icon className="h-4 w-4" />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">
                    {activity.text}
                  </div>
                  <div className="text-xs text-gray-500">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">Pending Tasks</h3>
            <button className="text-sm font-medium text-teal-700 hover:text-teal-900">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {[
              {
                text: "Update product inventory",
                priority: "High",
                due: "Today",
              },
              {
                text: "Respond to customer inquiries",
                priority: "Medium",
                due: "Today",
              },
              {
                text: "Prepare monthly sales report",
                priority: "High",
                due: "Tomorrow",
              },
              {
                text: "Review new product submissions",
                priority: "Low",
                due: "3 days",
              },
            ].map((task, index) => (
              <div key={index} className="flex items-start">
                <div
                  className={`rounded-full p-2 ${
                    task.priority === "High"
                      ? "bg-red-100 text-red-600"
                      : task.priority === "Medium"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-green-100 text-green-600"
                  }`}
                >
                  {task.priority === "High" ? (
                    <AlertCircle className="h-4 w-4" />
                  ) : task.priority === "Medium" ? (
                    <Clock className="h-4 w-4" />
                  ) : (
                    <Clock className="h-4 w-4" />
                  )}
                </div>
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-900">
                      {task.text}
                    </div>
                    <div className="text-xs font-medium text-gray-500">
                      Due: {task.due}
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">
                    Priority: {task.priority}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
