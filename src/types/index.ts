import { ReactNode } from "react";

// Product types
export interface Product {
  reviews: ReactNode;
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: string;
  tags: string[];
  images: string[];
  rating: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
  featured?: boolean;
}

// Article types
export interface ArticleAuthor {
  name: string;
  avatar: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: ArticleAuthor;
  category: string;
  tags: string[];
  coverImage: string;
  publishedAt: string;
  readTime: number;
}

// User types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export enum UserRole {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
}

// Cart types
export interface CartItem {
  id: string;
  name: string;
  price: number;
  discountPrice?: number;
  quantity: number;
  image: string;
}

// Order types
export interface Order {
  id: string;
  orderNumber: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: OrderStatus;
  shippingAddress: string;
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
}

export enum OrderStatus {
  PROCESSING = "Processing",
  SHIPPED = "Shipped",
  DELIVERED = "Delivered",
  CANCELLED = "Cancelled",
}

// Dashboard stats
export interface DashboardStats {
  totalSales: number;
  totalOrders: number;
  totalCustomers: number;
  totalProducts: number;
  recentOrders: Order[];
  topProducts: {
    id: string;
    name: string;
    sales: number;
    revenue: number;
  }[];
  salesByCategory: {
    category: string;
    sales: number;
  }[];
  revenueByMonth: {
    month: string;
    revenue: number;
  }[];
}
