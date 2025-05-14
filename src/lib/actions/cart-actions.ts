"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import {
  addToCart as addToCartData,
  updateCartItemQuantity as updateCartItemQuantityData,
  removeFromCart as removeFromCartData,
  clearCart as clearCartData,
  createCart,
  type Cart,
} from "../data/cart";

export async function addToCart(productId: string, quantity: number) {
  try {
    const cookieStore = await cookies();
    const cartCookie = cookieStore.get("cart");

    let cart: Cart;
    if (!cartCookie) {
      cart = createCart();
    } else {
      cart = JSON.parse(cartCookie.value) as Cart;
    }

    const result = addToCartData(cart, Number(productId), quantity);

    cookieStore.set("cart", JSON.stringify(result), {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      httpOnly: true,
      sameSite: "strict",
    });

    revalidatePath("/cart");
    revalidatePath("/products/[id]");
    return { success: true, data: result };
  } catch (error) {
    console.error("Error adding to cart:", error);
    return { success: false, error: "Failed to add item to cart" };
  }
}

export async function updateCartItemQuantity(itemId: string, quantity: number) {
  try {
    const cookieStore = await cookies();
    const cartCookie = cookieStore.get("cart");

    if (!cartCookie) {
      return { success: false, error: "Cart not found" };
    }

    const cart = JSON.parse(cartCookie.value) as Cart;
    const result = updateCartItemQuantityData(cart, Number(itemId), quantity);

    cookieStore.set("cart", JSON.stringify(result), {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      httpOnly: true,
      sameSite: "strict",
    });

    revalidatePath("/cart");
    return { success: true, data: result };
  } catch (error) {
    console.error("Error updating cart item:", error);
    return { success: false, error: "Failed to update cart item" };
  }
}

export async function removeFromCart(itemId: string) {
  try {
    const cookieStore = await cookies();
    const cartCookie = cookieStore.get("cart");

    if (!cartCookie) {
      return { success: false, error: "Cart not found" };
    }

    const cart = JSON.parse(cartCookie.value) as Cart;
    const result = removeFromCartData(cart, Number(itemId));

    cookieStore.set("cart", JSON.stringify(result), {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      httpOnly: true,
      sameSite: "strict",
    });

    revalidatePath("/cart");
    return { success: true, data: result };
  } catch (error) {
    console.error("Error removing from cart:", error);
    return { success: false, error: "Failed to remove item from cart" };
  }
}

export async function clearCart() {
  try {
    const cookieStore = await cookies();
    const cartCookie = cookieStore.get("cart");

    if (!cartCookie) {
      return { success: false, error: "Cart not found" };
    }

    const cart = JSON.parse(cartCookie.value) as Cart;
    const result = clearCartData(cart);

    cookieStore.set("cart", JSON.stringify(result), {
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      httpOnly: true,
      sameSite: "strict",
    });

    revalidatePath("/cart");
    return { success: true, data: result };
  } catch (error) {
    console.error("Error clearing cart:", error);
    return { success: false, error: "Failed to clear cart" };
  }
}
