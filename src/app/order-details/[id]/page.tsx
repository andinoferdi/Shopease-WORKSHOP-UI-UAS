import React from "react";
import { getAllOrders, getOrderById } from "@/lib/actions/order-actions";
import { type Order } from "@/types";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import OrderDetailsClient from "@/components/order/OrderDetailsClient";

// For static generation (SSG)
export async function generateStaticParams() {
  const orders = await getAllOrders();
  return orders.map((order) => ({
    id: order.id,
  }));
}

// Correctly handle async `params` (Next.js 15)
export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let order: Order | null = null;

  try {
    order = await getOrderById(id);
  } catch (error) {
    console.error("Error fetching order:", error);
  }

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Order Not Found</h2>
          <p className="text-gray-600 mb-6">
            The order you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Link
            href="/transactions"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-200"
          >
            Back to Orders
          </Link>
        </div>
      </div>
    );
  }

  return <OrderDetailsClient order={order} />;
}
