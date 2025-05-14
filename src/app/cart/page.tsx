"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { useToast } from "@/context/ToastContext"

export default function CartPage() {
  const { items, updateQuantity, removeItem, total, itemCount, isLoading } = useCart()
  const { showToast } = useToast()
  const [processingItemId, setProcessingItemId] = useState<string | null>(null)

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return

    setProcessingItemId(id)
    updateQuantity(id, newQuantity)
    setProcessingItemId(null)
  }

  const handleRemoveItem = (id: string, name: string) => {
    setProcessingItemId(id)
    removeItem(id)
    showToast(`${name} removed from cart`, "info")
    setProcessingItemId(null)
  }

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-teal-500 border-t-transparent"></div>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-16 text-center">
        <ShoppingBag className="mx-auto mb-4 h-16 w-16 text-gray-300" />
        <h1 className="mb-4 text-2xl font-bold">Your cart is empty</h1>
        <p className="mb-8 text-gray-600">Looks like you haven't added any products to your cart yet.</p>
        <Link
          href="/products"
          className="inline-flex items-center rounded-md bg-teal-700 px-6 py-3 text-white hover:bg-teal-800"
        >
          Continue Shopping
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold">Shopping Cart</h1>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="p-6">
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200">
                  {items.map((item) => (
                    <li key={item.id} className="flex py-6">
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={item.image || "/placeholder.svg?height=100&width=100"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <Link href={`/products/${item.productId}`}>{item.name}</Link>
                            </h3>
                            <p className="ml-4">${((item.discountPrice || item.price) * item.quantity).toFixed(2)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            ${(item.discountPrice || item.price).toFixed(2)} each
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="flex items-center">
                            <label htmlFor={`quantity-${item.id}`} className="mr-2 text-gray-500">
                              Qty
                            </label>
                            <div className="flex items-center rounded-md border border-gray-300">
                              <button
                                type="button"
                                className="h-8 w-8 text-gray-600 hover:bg-gray-100"
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                disabled={processingItemId === item.id}
                              >
                                -
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button
                                type="button"
                                className="h-8 w-8 text-gray-600 hover:bg-gray-100"
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                disabled={processingItemId === item.id}
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <button
                            type="button"
                            className="inline-flex items-center text-sm font-medium text-red-600 hover:text-red-800"
                            onClick={() => handleRemoveItem(item.id, item.name)}
                            disabled={processingItemId === item.id}
                          >
                            <Trash2 className="mr-1 h-4 w-4" />
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">Order Summary</h2>
            <div className="mb-4 flex justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-sm text-gray-600">Items ({itemCount})</p>
              </div>
              <p className="text-sm font-medium">${total.toFixed(2)}</p>
            </div>
            <div className="mb-4 flex justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-sm text-gray-600">Shipping</p>
                <p className="text-xs text-gray-500">Free shipping on orders over $100</p>
              </div>
              <p className="text-sm font-medium">${total > 100 ? "0.00" : "9.99"}</p>
            </div>
            <div className="mb-4 flex justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-sm text-gray-600">Tax</p>
              </div>
              <p className="text-sm font-medium">${(total * 0.1).toFixed(2)}</p>
            </div>
            <div className="mb-6 flex justify-between">
              <p className="text-base font-medium">Total</p>
              <p className="text-base font-medium">${(total + (total > 100 ? 0 : 9.99) + total * 0.1).toFixed(2)}</p>
            </div>
            <Link
              href="/checkout"
              className="block w-full rounded-md bg-teal-700 px-6 py-3 text-center text-white hover:bg-teal-800"
            >
              Proceed to Checkout
            </Link>
          </div>
          <div className="mt-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-sm font-medium">We Accept</h3>
            <div className="flex space-x-2">
              <div className="rounded-md bg-gray-100 p-2">
                <svg className="h-6 w-10" viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="#016FD0" />
                  <path d="M20 18.5H10V5.5H20V18.5Z" fill="white" />
                  <path
                    d="M11 12C11 9.5 12.5 7.5 14.5 7.5C16 7.5 17 8.5 17 10C17 12.5 15.5 14.5 13.5 14.5C12 14.5 11 13.5 11 12Z"
                    fill="#016FD0"
                  />
                  <path
                    d="M26.5 7.5H23L19 18.5H22.5L23 17H26.5L27 18.5H30.5L26.5 7.5ZM24 14.5L25 11L26 14.5H24Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="rounded-md bg-gray-100 p-2">
                <svg className="h-6 w-10" viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="#EB001B" />
                  <circle cx="15" cy="12" r="7" fill="#EB001B" />
                  <circle cx="25" cy="12" r="7" fill="#F79E1B" />
                  <path d="M20 17C22.2 15.2 22.2 8.8 20 7C17.8 8.8 17.8 15.2 20 17Z" fill="#FF5F00" />
                </svg>
              </div>
              <div className="rounded-md bg-gray-100 p-2">
                <svg className="h-6 w-10" viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="#003087" />
                  <path
                    d="M11 7H14C15.7 7 16.5 7.8 16.3 9.3C16.1 11.1 14.8 12 13 12H12L11.3 17H8.7L11 7ZM12.2 10H13C13.7 10 14.1 9.7 14.2 9C14.3 8.4 14 8 13.2 8H12.5L12.2 10Z"
                    fill="white"
                  />
                  <path d="M16.5 12L18 7H20.5L19 12H16.5Z" fill="white" />
                  <path d="M21 7H23.5L22.7 12H20.2L21 7Z" fill="white" />
                  <path
                    d="M24 7H27.5C28.8 7 29.5 7.8 29.2 9C28.9 10.5 27.7 11 26 11H25L24.5 14H22L24 7ZM25.2 10H26C26.7 10 27 9.7 27.1 9.2C27.2 8.6 26.9 8.2 26.2 8.2H25.5L25.2 10Z"
                    fill="white"
                  />
                  <path d="M29 14L30 9H32.5L31.5 14H29Z" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
