"use server"
import { getDashboardStats } from "../data/stats"
import { getUsers, getUserById, searchUsers } from "../data/users"
import { getOrders, getOrdersByStatus } from "../data/orders"
import { getProducts } from "../data/products"
import { getArticles } from "../data/articles"

export async function fetchDashboardStats() {
  try {
    const stats = getDashboardStats()
    return { success: true, data: stats }
  } catch (error) {
    console.error("Error fetching dashboard stats:", error)
    return { success: false, error: "Failed to fetch dashboard statistics" }
  }
}

export async function fetchUsers() {
  try {
    const users = getUsers()
    return { success: true, data: users }
  } catch (error) {
    console.error("Error fetching users:", error)
    return { success: false, error: "Failed to fetch users" }
  }
}

export async function fetchUserById(id: string) {
  try {
    const user = getUserById(id)

    if (!user) {
      return { success: false, error: "User not found" }
    }

    return { success: true, data: user }
  } catch (error) {
    console.error("Error fetching user:", error)
    return { success: false, error: "Failed to fetch user" }
  }
}

export async function searchUsersAction(query: string) {
  try {
    const users = searchUsers(query)
    return { success: true, data: users }
  } catch (error) {
    console.error("Error searching users:", error)
    return { success: false, error: "Failed to search users" }
  }
}

export async function fetchAdminOrders() {
  try {
    const orders = getOrders()
    return { success: true, data: orders }
  } catch (error) {
    console.error("Error fetching orders:", error)
    return { success: false, error: "Failed to fetch orders" }
  }
}

export async function fetchOrdersByStatus(status: string) {
  try {
    const orders = getOrdersByStatus(status as any)
    return { success: true, data: orders }
  } catch (error) {
    console.error("Error fetching orders by status:", error)
    return { success: false, error: "Failed to fetch orders by status" }
  }
}

export async function fetchAdminProducts() {
  try {
    const products = getProducts()
    return { success: true, data: products }
  } catch (error) {
    console.error("Error fetching products:", error)
    return { success: false, error: "Failed to fetch products" }
  }
}

export async function fetchAdminArticles() {
  try {
    const articles = getArticles()
    return { success: true, data: articles }
  } catch (error) {
    console.error("Error fetching articles:", error)
    return { success: false, error: "Failed to fetch articles" }
  }
}
