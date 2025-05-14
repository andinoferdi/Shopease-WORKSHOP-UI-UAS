import type { Order } from "@/types"

// Dummy order data
export const orders: Order[] = [
  {
    id: "ORD-001",
    userId: "2",
    items: [
      {
        id: "item-001",
        productId: "1",
        name: "Premium Wireless Headphones",
        price: 249.99,
        discountPrice: 199.99,
        quantity: 1,
        image: "/images/products/headphones-1.jpg",
      },
      {
        id: "item-002",
        productId: "5",
        name: "Wireless Earbuds",
        price: 129.99,
        discountPrice: 99.99,
        quantity: 1,
        image: "/images/products/earbuds-1.jpg",
      },
    ],
    total: 299.98,
    status: "delivered",
    paymentMethod: "credit_card",
    shippingAddress: {
      name: "John Smith",
      address: "123 Main St",
      city: "Boston",
      state: "MA",
      zipCode: "02108",
      country: "USA",
    },
    createdAt: "2024-04-10T14:30:00Z",
    updatedAt: "2024-04-15T09:45:00Z",
  },
  {
    id: "ORD-002",
    userId: "3",
    items: [
      {
        id: "item-003",
        productId: "3",
        name: "Ultra-Slim Laptop",
        price: 1299.99,
        discountPrice: 1199.99,
        quantity: 1,
        image: "/images/products/laptop-1.jpg",
      },
    ],
    total: 1199.99,
    status: "shipped",
    paymentMethod: "paypal",
    shippingAddress: {
      name: "Emily Johnson",
      address: "456 Oak Ave",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      country: "USA",
    },
    createdAt: "2024-04-12T10:15:00Z",
    updatedAt: "2024-04-14T16:20:00Z",
  },
  {
    id: "ORD-003",
    userId: "4",
    items: [
      {
        id: "item-004",
        productId: "7",
        name: "Gaming Console",
        price: 499.99,
        discountPrice: 479.99,
        quantity: 1,
        image: "/images/products/console-1.jpg",
      },
      {
        id: "item-005",
        productId: "12",
        name: "Mechanical Keyboard",
        price: 149.99,
        discountPrice: 129.99,
        quantity: 1,
        image: "/images/products/keyboard-1.jpg",
      },
    ],
    total: 609.98,
    status: "processing",
    paymentMethod: "credit_card",
    shippingAddress: {
      name: "Michael Brown",
      address: "789 Pine St",
      city: "Seattle",
      state: "WA",
      zipCode: "98101",
      country: "USA",
    },
    createdAt: "2024-04-15T09:30:00Z",
    updatedAt: "2024-04-16T11:45:00Z",
  },
  {
    id: "ORD-004",
    userId: "5",
    items: [
      {
        id: "item-006",
        productId: "9",
        name: "4K Smart TV",
        price: 799.99,
        discountPrice: 699.99,
        quantity: 1,
        image: "/images/products/tv-1.jpg",
      },
    ],
    total: 699.99,
    status: "pending",
    paymentMethod: "bank_transfer",
    shippingAddress: {
      name: "Sarah Davis",
      address: "101 Maple Rd",
      city: "Austin",
      state: "TX",
      zipCode: "78701",
      country: "USA",
    },
    createdAt: "2024-04-17T13:20:00Z",
    updatedAt: "2024-04-17T13:20:00Z",
  },
  {
    id: "ORD-005",
    userId: "7",
    items: [
      {
        id: "item-007",
        productId: "2",
        name: "Smart Fitness Watch",
        price: 179.99,
        discountPrice: 149.99,
        quantity: 1,
        image: "/images/products/watch-1.jpg",
      },
      {
        id: "item-008",
        productId: "8",
        name: "Portable Bluetooth Speaker",
        price: 89.99,
        discountPrice: 69.99,
        quantity: 2,
        image: "/images/products/speaker-1.jpg",
      },
    ],
    total: 289.97,
    status: "delivered",
    paymentMethod: "credit_card",
    shippingAddress: {
      name: "Jennifer Martinez",
      address: "222 Cedar Ln",
      city: "Miami",
      state: "FL",
      zipCode: "33101",
      country: "USA",
    },
    createdAt: "2024-04-05T11:10:00Z",
    updatedAt: "2024-04-10T15:30:00Z",
  },
  {
    id: "ORD-006",
    userId: "8",
    items: [
      {
        id: "item-009",
        productId: "4",
        name: "Professional Camera Kit",
        price: 1899.99,
        discountPrice: 1699.99,
        quantity: 1,
        image: "/images/products/camera-1.jpg",
      },
    ],
    total: 1699.99,
    status: "shipped",
    paymentMethod: "paypal",
    shippingAddress: {
      name: "Robert Taylor",
      address: "333 Birch St",
      city: "Denver",
      state: "CO",
      zipCode: "80201",
      country: "USA",
    },
    createdAt: "2024-04-08T14:45:00Z",
    updatedAt: "2024-04-12T10:20:00Z",
  },
  {
    id: "ORD-007",
    userId: "10",
    items: [
      {
        id: "item-010",
        productId: "6",
        name: "Smart Home Hub",
        price: 199.99,
        discountPrice: 169.99,
        quantity: 1,
        image: "/images/products/smarthome-1.jpg",
      },
      {
        id: "item-011",
        productId: "11",
        name: "Smartphone Gimbal Stabilizer",
        price: 119.99,
        discountPrice: 99.99,
        quantity: 1,
        image: "/images/products/gimbal-1.jpg",
      },
    ],
    total: 269.98,
    status: "processing",
    paymentMethod: "credit_card",
    shippingAddress: {
      name: "James Thomas",
      address: "444 Elm Ct",
      city: "Portland",
      state: "OR",
      zipCode: "97201",
      country: "USA",
    },
    createdAt: "2024-04-14T16:30:00Z",
    updatedAt: "2024-04-16T09:15:00Z",
  },
  {
    id: "ORD-008",
    userId: "3",
    items: [
      {
        id: "item-012",
        productId: "10",
        name: "Ergonomic Office Chair",
        price: 249.99,
        discountPrice: 199.99,
        quantity: 1,
        image: "/images/products/chair-1.jpg",
      },
    ],
    total: 199.99,
    status: "cancelled",
    paymentMethod: "credit_card",
    shippingAddress: {
      name: "Emily Johnson",
      address: "456 Oak Ave",
      city: "Chicago",
      state: "IL",
      zipCode: "60601",
      country: "USA",
    },
    createdAt: "2024-04-02T09:20:00Z",
    updatedAt: "2024-04-03T14:10:00Z",
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

export const getOrdersByStatus = (status: Order["status"]) => {
  return orders.filter((order) => order.status === status)
}

export const createOrder = (orderData: Omit<Order, "id" | "createdAt" | "updatedAt">) => {
  const newOrder: Order = {
    ...orderData,
    id: `ORD-${String(orders.length + 1).padStart(3, "0")}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  orders.push(newOrder)
  return newOrder
}

export const updateOrderStatus = (orderId: string, status: Order["status"]) => {
  const orderIndex = orders.findIndex((order) => order.id === orderId)
  if (orderIndex === -1) return null

  orders[orderIndex] = {
    ...orders[orderIndex],
    status,
    updatedAt: new Date().toISOString(),
  }

  return orders[orderIndex]
}
