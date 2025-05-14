import { type Order, OrderStatus } from "@/types"

// Initial orders data
export const orders: Order[] = [
  {
    id: "order-1",
    orderNumber: "#ORD-001",
    userId: "user-1",
    items: [
      {
        id: "product-1",
        name: "Premium Wireless Headphones",
        price: 249.99,
        discountPrice: 199.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
      {
        id: "product-2",
        name: "Wireless Earbuds",
        price: 129.99,
        discountPrice: 99.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    totalAmount: 299.98,
    status: OrderStatus.DELIVERED,
    shippingAddress: "John Smith, 123 Main St, New York, 10001, USA",
    paymentMethod: "Credit Card",
    createdAt: "2024-04-10T10:30:00Z",
    updatedAt: "2024-04-15T14:20:00Z",
  },
  {
    id: "order-2",
    orderNumber: "#ORD-002",
    userId: "user-1",
    items: [
      {
        id: "product-5",
        name: "Ultra-Slim Laptop",
        price: 1299.99,
        discountPrice: 1199.99,
        quantity: 1,
        image: "/placeholder.svg?height=80&width=80",
      },
    ],
    totalAmount: 1199.99,
    status: OrderStatus.SHIPPED,
    shippingAddress: "John Smith, 123 Main St, New York, 10001, USA",
    paymentMethod: "Credit Card",
    createdAt: "2024-04-12T15:45:00Z",
    updatedAt: "2024-04-14T09:10:00Z",
  },
]

// Helper functions for order data
export const getOrders = () => {
  return orders
}

export const getOrderById = (id: string) => {
  return orders.find((order) => order.id === id)
}

export const getOrdersByUserId = (userId: string) => {
  return orders.filter((order) => order.userId === userId)
}

export const getRecentOrders = (limit = 5) => {
  return [...orders].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, limit)
}

export const getOrdersByStatus = (status: OrderStatus) => {
  return orders.filter((order) => order.status === status)
}

export const createOrder = (orderData: Omit<Order, "id" | "createdAt" | "updatedAt">) => {
  const newOrder: Order = {
    ...orderData,
    id: `ORD-${String(orders.length + 1).padStart(3, "0")}`,
    orderNumber: `#ORD-${String(orders.length + 1).padStart(3, "0")}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  orders.push(newOrder)
  return newOrder
}

export const updateOrderStatus = (orderId: string, status: OrderStatus) => {
  const orderIndex = orders.findIndex((order) => order.id === orderId)
  if (orderIndex === -1) return null

  orders[orderIndex] = {
    ...orders[orderIndex],
    status,
    updatedAt: new Date().toISOString(),
  }

  return orders[orderIndex]
}
