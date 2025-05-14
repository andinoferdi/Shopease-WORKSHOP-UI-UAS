"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { getProductById } from "@/lib/data/products";

interface AddToCartButtonProps {
  productId: string;
  className?: string;
  showIcon?: boolean;
}

export default function AddToCartButton({
  productId,
  className,
  showIcon = true,
}: AddToCartButtonProps) {
  const [isAdding, setIsAdding] = useState(false);
  const { addItem } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = async () => {
    setIsAdding(true);

    try {
      const product = getProductById(productId);

      if (!product) {
        throw new Error("Product not found");
      }

      // Create cart item from product
      const cartItem = {
        id: product.id,
        productId: product.id,
        name: product.name,
        price: product.price,
        discountPrice: product.discountPrice,
        quantity: 1,
        image: product.images[0] || "/placeholder.svg?height=100&width=100",
      };

      // Add to cart
      addItem(cartItem);

      // Show success toast
      showToast(`${product.name} added to cart`, "success");
    } catch (error) {
      console.error("Error adding to cart:", error);
      showToast("Failed to add item to cart", "error");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={isAdding}
      className={`flex items-center justify-center ${className}`}
    >
      {isAdding ? (
        <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" />
      ) : (
        <>
          {showIcon && <ShoppingCart className="mr-2 h-5 w-5" />}
          Add to Cart
        </>
      )}
    </button>
  );
}
