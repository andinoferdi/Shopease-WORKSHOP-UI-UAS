"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import type { CartItem } from "@/types"

interface CartContextType {
  items: CartItem[]
  itemCount: number
  total: number
  addItem: (item: CartItem) => void
  updateQuantity: (id: string, quantity: number) => void
  removeItem: (id: string) => void
  clearCart: () => void
  isLoading: boolean
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Calculate derived values
  const itemCount = items.reduce((count, item) => count + item.quantity, 0)
  const total = items.reduce((sum, item) => {
    const price = item.discountPrice || item.price
    return sum + price * item.quantity
  }, 0)

  // Load cart from localStorage on initial render
  useEffect(() => {
    const loadCart = () => {
      try {
        const savedCart = localStorage.getItem("cart")
        if (savedCart) {
          setItems(JSON.parse(savedCart))
        }
      } catch (error) {
        console.error("Failed to load cart from localStorage:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadCart()
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("cart", JSON.stringify(items))
    }
  }, [items, isLoading])

  // Add an item to the cart
  const addItem = (item: CartItem) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id)

      if (existingItemIndex >= 0) {
        // Update quantity if item already exists
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + item.quantity,
        }
        return updatedItems
      } else {
        // Add new item
        return [...prevItems, item]
      }
    })
  }

  // Update quantity of an item
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  // Remove an item from the cart
  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  // Clear the entire cart
  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider
      value={{
        items,
        itemCount,
        total,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }

  return context
}
