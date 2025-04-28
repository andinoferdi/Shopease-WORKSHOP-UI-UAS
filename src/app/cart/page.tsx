import Link from "next/link";
import Image from "next/image";
import { Trash2 } from "lucide-react";

export default function Cart() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Your Cart</h1>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-gray-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
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
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                    >
                      Total
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
                  {[1, 2].map((item) => (
                    <tr key={item}>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                            <Image
                              src="/placeholder.svg?height=64&width=64"
                              alt="Product"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Premium Wireless Headphones
                            </div>
                            <div className="text-sm text-gray-500">Black</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        $129.99
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        <div className="flex h-8 w-24">
                          <button className="flex h-full w-8 items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-gray-100">
                            -
                          </button>
                          <input
                            type="number"
                            min="1"
                            defaultValue="1"
                            className="h-full w-8 border border-gray-300 text-center"
                          />
                          <button className="flex h-full w-8 items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-gray-100">
                            +
                          </button>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        $129.99
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        <button className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 flex justify-between">
            <Link
              href="/products"
              className="rounded-md border border-teal-700 px-4 py-2 text-sm font-medium text-teal-700 hover:bg-teal-50"
            >
              Continue Shopping
            </Link>
            <button className="rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
              Update Cart
            </button>
          </div>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-medium text-gray-900">
            Order Summary
          </h2>

          <div className="space-y-4 border-b border-gray-200 pb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium">$259.98</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium">$9.99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="font-medium">$26.00</span>
            </div>
          </div>

          <div className="mt-4 flex justify-between">
            <span className="text-lg font-medium text-gray-900">Total</span>
            <span className="text-lg font-bold text-teal-700">$295.97</span>
          </div>

          <div className="mt-6">
            <Link
              href="/payment"
              className="block w-full rounded-md bg-teal-700 py-3 text-center font-medium text-white hover:bg-teal-800"
            >
              Proceed to Checkout
            </Link>
          </div>

          <div className="mt-6">
            <div className="mb-2 text-sm font-medium text-gray-700">
              We Accept
            </div>
            <div className="flex gap-2">
              {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((payment) => (
                <div
                  key={payment}
                  className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600"
                >
                  {payment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
