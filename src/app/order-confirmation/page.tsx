"use client"

import Link from "next/link"
import { CheckCircle, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function OrderConfirmationPage() {
  const router = useRouter()
  const [orderId] = useState(`ORD-${Math.floor(100000 + Math.random() * 900000)}`)
  const [estimatedDelivery] = useState(() => {
    const date = new Date()
    date.setDate(date.getDate() + 5)
    return date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })
  })

  // Redirect if accessed directly without checkout
  useEffect(() => {
    const hasCompletedCheckout = localStorage.getItem("hasCompletedCheckout")

    if (hasCompletedCheckout !== "true") {
      router.push("/")
    } else {
      // Clear the flag after successful access
      localStorage.removeItem("hasCompletedCheckout")
    }
  }, [router])

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <CheckCircle className="mx-auto mb-6 h-16 w-16 text-green-500" />
      <h1 className="mb-4 text-3xl font-bold">Thank You for Your Order!</h1>
      <p className="mb-8 text-lg text-gray-600">Your order has been received and is now being processed.</p>

      <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6 text-left shadow-sm">
        <div className="mb-4 grid gap-4 sm:grid-cols-2">
          <div>
            <h2 className="mb-1 text-sm font-medium text-gray-700">Order Number</h2>
            <p className="text-lg font-semibold">{orderId}</p>
          </div>
          <div>
            <h2 className="mb-1 text-sm font-medium text-gray-700">Estimated Delivery</h2>
            <p className="text-lg font-semibold">{estimatedDelivery}</p>
          </div>
        </div>

        <div>
          <h2 className="mb-2 text-sm font-medium text-gray-700">Order Updates</h2>
          <p className="text-gray-600">
            We&apos;ll send you shipping confirmation and tracking information to your email address.
          </p>
        </div>
      </div>

      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Link
          href="/products"
          className="inline-flex items-center justify-center rounded-md bg-teal-700 px-6 py-3 text-white hover:bg-teal-800"
        >
          Continue Shopping
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        <Link
          href="/account/orders"
          className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-700 hover:bg-gray-50"
        >
          View Order History
        </Link>
      </div>
    </div>
  )
}
