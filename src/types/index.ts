// Define core data types for the application
export interface Product {
  id: string
  name: string
  description: string
  price: number
  discountPrice?: number
  images: string[]
  category: string
  tags: string[]
  stock: number
  rating: number
  reviews: number
  featured: boolean
  createdAt: string
  updatedAt: string
}

export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  author: {
    name: string
    avatar: string
  }
  category: string
  tags: string[]
  publishedAt: string
  readTime: number
}

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  role: "admin" | "customer"
  createdAt: string
  lastLogin: string
  status: "active" | "inactive"
}

export interface CartItem {
  id: string
  productId: string
  name: string
  price: number
  discountPrice?: number
  quantity: number
  image: string
}

export interface Order {
  id: string
  userId: string
  items: {
    id: string
    productId: string
    name: string
    price: number
    discountPrice?: number
    quantity: number
    image: string
  }[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  paymentMethod: "credit_card" | "paypal" | "bank_transfer"
  shippingAddress: {
    name: string
    address: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  createdAt: string
  updatedAt: string
}

export interface DashboardStats {
  totalSales: number
  totalOrders: number
  totalCustomers: number
  totalProducts: number
  recentOrders: Order[]
  topSellingProducts: {
    id: string
    name: string
    sales: number
    revenue: number
  }[]
  salesByCategory: {
    category: string
    sales: number
  }[]
  revenueByMonth: {
    month: string
    revenue: number
  }[]
}
