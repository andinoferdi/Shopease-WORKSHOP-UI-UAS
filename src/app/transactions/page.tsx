"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { getOrders } from "@/lib/actions/order-actions"
import { type Order, OrderStatus } from "@/types"
import { formatDistanceToNow } from "date-fns"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"

export default function TransactionsPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersData = await getOrders()
        setOrders(ordersData)
      } catch (error) {
        console.error("Error fetching orders:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [])

  // Function to get status badge color
  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.DELIVERED:
        return "bg-green-100 text-green-800"
      case OrderStatus.SHIPPED:
        return "bg-blue-100 text-blue-800"
      case OrderStatus.PROCESSING:
        return "bg-yellow-100 text-yellow-800"
      case OrderStatus.CANCELLED:
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Function to format date
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return `${date.toLocaleDateString()} (about ${formatDistanceToNow(date, { addSuffix: true })})`
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return dateString
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Order History</h1>
        <Link
          href="/products"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Continue Shopping
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : orders.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="flex justify-center mb-4">
            <ShoppingBag className="h-16 w-16 text-gray-400" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">No orders yet</h2>
          <p className="text-gray-600 mb-6">
            You haven&apos;t placed any orders yet. Start shopping to see your order history.
          </p>
          <Link
            href="/products"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-gray-500">Order placed</p>
                    <p className="font-medium">{formatDate(order.createdAt)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Order ID</p>
                    <p className="font-medium text-blue-600">{order.orderNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total</p>
                    <p className="font-medium">${order.totalAmount.toFixed(2)}</p>
                  </div>
                  <div className="flex md:justify-end items-start">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Link
                    href={`/order-details/${order.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-medium mb-4">Items in this order</h3>
                <div className="space-y-6">
                  {order.items.map((item) => (
                    <div
                      key={`${order.id}-${item.id}`}
                      className="flex flex-col md:flex-row md:items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-500">
                            Qty: {item.quantity}{" "}
                            {item.discountPrice ? (
                              <span className="ml-2">
                                <span className="line-through text-gray-400">${item.price.toFixed(2)}</span>
                                <span className="ml-1">${item.discountPrice.toFixed(2)}</span>
                              </span>
                            ) : (
                              <span className="ml-2">${item.price.toFixed(2)}</span>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4 md:mt-0">
                        <div className="md:text-right">
                          <p className="font-medium">
                            ${((item.discountPrice || item.price) * item.quantity).toFixed(2)}
                          </p>
                          <Link
                            href={`/products/${item.id}`}
                            className="text-teal-600 hover:text-teal-800 text-sm font-medium"
                          >
                            Buy Again
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="px-6 py-4 bg-gray-50 flex flex-col md:flex-row justify-between text-sm">
                <p>
                  Shipped to: <span className="font-medium">{order.shippingAddress.split(",")[0]}</span>
                </p>
                <p>
                  Payment Method: <span className="font-medium">{order.paymentMethod}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
