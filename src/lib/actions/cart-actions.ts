"use server"

import { revalidatePath } from "next/cache"
import {
  addToCart as addToCartData,
  updateCartItemQuantity as updateCartItemQuantityData,
  removeFromCart as removeFromCartData,
  clearCart as clearCartData,
} from "../data/cart"

export async function addToCart(productId: string, quantity: number) {
  try {
    const result = addToCartData(productId, quantity)
    revalidatePath("/cart")
    revalidatePath("/products/[id]")
    return { success: true, data: result }
  } catch (error) {
    console.error("Error adding to cart:", error)
    return { success: false, error: "Failed to add item to cart" }
  }
}

export async function updateCartItemQuantity(itemId: string, quantity: number) {
  try {
    const result = updateCartItemQuantityData(itemId, quantity)
    revalidatePath("/cart")
    return { success: true, data: result }
  } catch (error) {
    console.error("Error updating cart item:", error)
    return { success: false, error: "Failed to update cart item" }
  }
}

export async function removeFromCart(itemId: string) {
  try {
    const result = removeFromCartData(itemId)
    revalidatePath("/cart")
    return { success: true, data: result }
  } catch (error) {
    console.error("Error removing from cart:", error)
    return { success: false, error: "Failed to remove item from cart" }
  }
}

export async function clearCart() {
  try {
    const result = clearCartData()
    revalidatePath("/cart")
    return { success: true, data: result }
  } catch (error) {
    console.error("Error clearing cart:", error)
    return { success: false, error: "Failed to clear cart" }
  }
}
