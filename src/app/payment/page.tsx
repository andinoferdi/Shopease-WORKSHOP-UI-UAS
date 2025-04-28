import Link from "next/link";
import { CreditCard, ShieldCheck, Truck } from "lucide-react";

export default function Payment() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Checkout</h1>

      <div className="mb-8">
        <div className="flex justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-700 text-white">
              1
            </div>
            <span className="font-medium text-gray-900">Shipping</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-700 text-white">
              2
            </div>
            <span className="font-medium text-gray-900">Payment</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
              3
            </div>
            <span className="font-medium text-gray-500">Confirmation</span>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-6 text-xl font-medium text-gray-900">
              Payment Method
            </h2>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 rounded-md border border-gray-300 p-4">
                <input
                  type="radio"
                  id="credit-card"
                  name="payment-method"
                  className="h-4 w-4 text-teal-700"
                  defaultChecked
                />
                <label
                  htmlFor="credit-card"
                  className="flex flex-1 items-center"
                >
                  <CreditCard className="mr-2 h-5 w-5 text-gray-600" />
                  <span>Credit / Debit Card</span>
                </label>
              </div>

              <div className="rounded-md border border-gray-200 p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label
                      htmlFor="card-number"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      id="card-number"
                      placeholder="1234 5678 9012 3456"
                      className="w-full rounded-md border border-gray-300 p-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="expiry"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      placeholder="MM/YY"
                      className="w-full rounded-md border border-gray-300 p-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cvv"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      placeholder="123"
                      className="w-full rounded-md border border-gray-300 p-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="name"
                      className="mb-1 block text-sm font-medium text-gray-700"
                    >
                      Name on Card
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="w-full rounded-md border border-gray-300 p-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 rounded-md border border-gray-300 p-4">
                <input
                  type="radio"
                  id="paypal"
                  name="payment-method"
                  className="h-4 w-4 text-teal-700"
                />
                <label htmlFor="paypal" className="flex-1">
                  PayPal
                </label>
              </div>
            </div>

            <h2 className="mb-6 mt-8 text-xl font-medium text-gray-900">
              Billing Address
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div>
                <label
                  htmlFor="last-name"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="address"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div>
                <label
                  htmlFor="postal-code"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postal-code"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <select
                  id="country"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-lg font-medium text-gray-900">
              Order Summary
            </h2>

            <div className="mb-4 space-y-3">
              {[1, 2].map((item) => (
                <div key={item} className="flex justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      Premium Wireless Headphones
                    </div>
                    <div className="text-xs text-gray-500">Qty: 1</div>
                  </div>
                  <div className="text-sm font-medium text-gray-900">
                    $129.99
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-2 border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Subtotal</span>
                <span className="text-sm font-medium">$259.98</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Shipping</span>
                <span className="text-sm font-medium">$9.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Tax</span>
                <span className="text-sm font-medium">$26.00</span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-2">
                <span className="text-base font-medium text-gray-900">
                  Total
                </span>
                <span className="text-base font-bold text-teal-700">
                  $295.97
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                href="/transactions"
                className="block w-full rounded-md bg-teal-700 py-3 text-center font-medium text-white hover:bg-teal-800"
              >
                Complete Order
              </Link>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center text-sm text-gray-600">
                <ShieldCheck className="mr-2 h-5 w-5 text-teal-700" />
                <span>Secure payment processing</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Truck className="mr-2 h-5 w-5 text-teal-700" />
                <span>Free shipping on orders over $50</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
