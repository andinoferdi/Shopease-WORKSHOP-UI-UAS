"use server";

import { revalidatePath } from "next/cache";
import { clearCart, createCart } from "../data/cart";
import type { Order } from "@/types";
import { OrderStatus, type CartItem } from "@/types";
import { orders } from "@/lib/data/orders";

// Get all orders
export async function getOrders(): Promise<Order[]> {
  return orders;
}

export async function getAllOrders() {
  // Ganti dengan real logic ambil semua order ID
  return [{ id: "order-1" }, { id: "order-2" }, { id: "order-3" }];
}

// Get order by ID
export async function getOrderById(id: string): Promise<Order | null> {
  const order = orders.find((order) => order.id === id);
  return order || null;
}

// Create a new order
export async function createOrder(
  items: CartItem[],
  totalAmount: number,
  shippingAddress: string,
  paymentMethod: string
): Promise<Order> {
  const newOrder: Order = {
    id: `ORD-${orders.length + 1}`.padStart(7, "0"),
    orderNumber: `#ORD-${(orders.length + 1).toString().padStart(3, "0")}`,
    userId: "user-1", // In a real app, this would be the actual user ID
    items: items.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      discountPrice: item.discountPrice,
      quantity: item.quantity,
      image: item.image,
    })),
    totalAmount,
    status: OrderStatus.PROCESSING,
    shippingAddress,
    paymentMethod,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  // In a real app, this would save to a database
  orders.unshift(newOrder); // Add to the beginning of the array

  // Clear the cart after successful order creation
  clearCart(createCart());

  revalidatePath("/orders");
  revalidatePath("/admin/orders");
  revalidatePath("/admin/dashboard");
  revalidatePath("/transactions");

  return newOrder;
}

// Update order status
export async function updateOrderStatus(
  id: string,
  status: OrderStatus
): Promise<Order | null> {
  const orderIndex = orders.findIndex((order) => order.id === id);
  if (orderIndex === -1) return null;

  orders[orderIndex].status = status;
  orders[orderIndex].updatedAt = new Date().toISOString();

  revalidatePath("/orders");
  revalidatePath("/admin/orders");
  revalidatePath("/admin/dashboard");

  return orders[orderIndex];
}
