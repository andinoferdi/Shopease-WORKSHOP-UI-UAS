"use server"

import { revalidatePath } from "next/cache"
import { createOrder as createOrderData, updateOrderStatus as updateOrderStatusData } from "../data/orders"
import { clearCart } from "../data/cart"
import type { Order } from "@/types"

export async function createOrder(orderData: Omit<Order, "id" | "createdAt" | "updatedAt">) {
  try {
    const newOrder = createOrderData(orderData)

    // Clear the cart after successful order creation
    clearCart()

    revalidatePath("/orders")
    revalidatePath("/admin/orders")
    revalidatePath("/admin/dashboard")

    return { success: true, data: newOrder }
  } catch (error) {
    console.error("Error creating order:", error)
    return { success: false, error: "Failed to create order" }
  }
}

export async function updateOrderStatus(orderId: string, status: Order["status"]) {
  try {
    const updatedOrder = updateOrderStatusData(orderId, status)

    if (!updatedOrder) {
      return { success: false, error: "Order not found" }
    }

    revalidatePath("/orders")
    revalidatePath("/admin/orders")
    revalidatePath("/admin/dashboard")

    return { success: true, data: updatedOrder }
  } catch (error) {
    console.error("Error updating order status:", error)
    return { success: false, error: "Failed to update order status" }
  }
}
