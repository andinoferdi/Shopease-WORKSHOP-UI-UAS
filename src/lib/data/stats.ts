import type { DashboardStats } from "@/types"
import { getRecentOrders } from "./orders"
import { getProducts } from "./products"
import { getCustomerUsers } from "./users"

// Generate dashboard statistics
export const getDashboardStats = (): DashboardStats => {
  const recentOrders = getRecentOrders(5)
  const products = getProducts()
  const customers = getCustomerUsers()

  // Calculate total sales
  const totalSales = recentOrders.reduce((sum, order) => sum + order.totalAmount, 0)

  // Generate top selling products
  const topSellingProducts = [
    {
      id: "1",
      name: "Premium Wireless Headphones",
      sales: 124,
      revenue: 24798.76,
    },
    {
      id: "3",
      name: "Ultra-Slim Laptop",
      sales: 89,
      revenue: 106799.11,
    },
    {
      id: "5",
      name: "Wireless Earbuds",
      sales: 210,
      revenue: 20997.9,
    },
    {
      id: "7",
      name: "Gaming Console",
      sales: 76,
      revenue: 36479.24,
    },
  ]

  // Generate sales by category
  const salesByCategory = [
    { category: "Electronics", sales: 456 },
    { category: "Computers", sales: 210 },
    { category: "Wearables", sales: 180 },
    { category: "Gaming", sales: 120 },
    { category: "Photography", sales: 90 },
  ]

  // Generate revenue by month
  const revenueByMonth = [
    { month: "Jan", revenue: 45000 },
    { month: "Feb", revenue: 52000 },
    { month: "Mar", revenue: 49000 },
    { month: "Apr", revenue: 62000 },
    { month: "May", revenue: 56000 },
    { month: "Jun", revenue: 64000 },
    { month: "Jul", revenue: 58000 },
    { month: "Aug", revenue: 70000 },
    { month: "Sep", revenue: 66000 },
    { month: "Oct", revenue: 74000 },
    { month: "Nov", revenue: 80000 },
    { month: "Dec", revenue: 95000 },
  ]

  return {
    totalSales,
    totalOrders: recentOrders.length,
    totalCustomers: customers.length,
    totalProducts: products.length,
    recentOrders,
    topProducts: topSellingProducts,
    salesByCategory,
    revenueByMonth,
  }
}
