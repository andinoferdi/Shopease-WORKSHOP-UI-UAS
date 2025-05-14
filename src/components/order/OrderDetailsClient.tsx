"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { type Order, OrderStatus } from "@/types"
import { ArrowLeft, Package, CheckCircle, Clock } from "lucide-react"
import Image from "next/image"

interface OrderDetailsClientProps {
  order: Order
}

export default function OrderDetailsClient({ order }: OrderDetailsClientProps) {
  const router = useRouter()

  // Function to format date
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return dateString
    }
  }

  // Function to get status step
  const getStatusStep = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.PROCESSING:
        return 1
      case OrderStatus.SHIPPED:
        return 2
      case OrderStatus.DELIVERED:
        return 3
      case OrderStatus.CANCELLED:
        return -1
      default:
        return 0
    }
  }

  const statusStep = getStatusStep(order.status)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <button onClick={() => router.back()} className="flex items-center text-gray-600 hover:text-gray-900">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Orders
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2">Order {order.orderNumber}</h1>
              <p className="text-gray-600">Placed on {formatDate(order.createdAt)}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  order.status === OrderStatus.DELIVERED
                    ? "bg-green-100 text-green-800"
                    : order.status === OrderStatus.SHIPPED
                      ? "bg-blue-100 text-blue-800"
                      : order.status === OrderStatus.PROCESSING
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                }`}
              >
                {order.status}
              </span>
            </div>
          </div>
        </div>

        {statusStep >= 0 && (
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold mb-6">Order Status</h2>
            <div className="relative">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200">
                <div
                  className={`h-full bg-blue-500 transition-all duration-500 ${
                    statusStep === 1 ? "w-1/3" : statusStep === 2 ? "w-2/3" : statusStep === 3 ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>

              <div className="relative flex justify-between">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                      statusStep >= 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <Clock className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-sm font-medium">Processing</p>
                </div>

                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                      statusStep >= 2 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <Package className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-sm font-medium">Shipped</p>
                </div>

                <div className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                      statusStep >= 3 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <p className="mt-2 text-sm font-medium">Delivered</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold mb-4">Items in Your Order</h2>
          <div className="space-y-6">
            {order.items.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                    <p className="text-sm">
                      {item.discountPrice ? (
                        <>
                          <span className="line-through text-gray-400">${item.price.toFixed(2)}</span>
                          <span className="ml-1 text-red-600">${item.discountPrice.toFixed(2)}</span>
                        </>
                      ) : (
                        <span>${item.price.toFixed(2)}</span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:text-right">
                  <p className="font-medium">${((item.discountPrice || item.price) * item.quantity).toFixed(2)}</p>
                  <Link
                    href={`/products/${item.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-block mt-1"
                  >
                    Buy Again
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-3">Shipping Information</h2>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-700 whitespace-pre-line">{order.shippingAddress}</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-3">Payment Information</h2>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-700">{order.paymentMethod}</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50">
          <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span>${order.totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200 mt-2">
              <span className="font-semibold">Total</span>
              <span className="font-semibold">${order.totalAmount.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
        <Link
          href="/transactions"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-md transition duration-200 text-center"
        >
          Back to Orders
        </Link>
        <Link
          href="/products"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200 text-center"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  )
} 