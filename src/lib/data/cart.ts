import { type Product, getProductById } from "./products"

export interface CartItem {
  productId: number
  product?: Product
  quantity: number
}

export interface Cart {
  userId?: number
  items: CartItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
}

// Helper functions to work with cart
export function calculateCartTotals(items: CartItem[]): {
  subtotal: number
  shipping: number
  tax: number
  total: number
} {
  const subtotal = items.reduce((sum, item) => {
    const product = item.product || getProductById(item.productId)
    return sum + (product?.price || 0) * item.quantity
  }, 0)

  // Free shipping for orders over $100
  const shipping = subtotal > 100 ? 0 : 9.99

  // 10% tax
  const tax = subtotal * 0.1

  const total = subtotal + shipping + tax

  return {
    subtotal,
    shipping,
    tax,
    total,
  }
}

// Create an empty cart
export function createCart(userId?: number): Cart {
  return {
    userId,
    items: [],
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  }
}

// Add a product to the cart
export function addToCart(cart: Cart, productId: number, quantity = 1): Cart {
  const product = getProductById(productId)

  if (!product) {
    throw new Error(`Product with ID ${productId} not found`)
  }

  // Check if product is already in cart
  const existingItemIndex = cart.items.findIndex((item) => item.productId === productId)

  const updatedItems = [...cart.items]

  if (existingItemIndex >= 0) {
    // Update quantity if product already exists in cart
    updatedItems[existingItemIndex] = {
      ...updatedItems[existingItemIndex],
      quantity: updatedItems[existingItemIndex].quantity + quantity,
    }
  } else {
    // Add new item to cart
    updatedItems.push({
      productId,
      product,
      quantity,
    })
  }

  // Calculate new totals
  const totals = calculateCartTotals(updatedItems)

  return {
    ...cart,
    items: updatedItems,
    ...totals,
  }
}

// Update quantity of a product in the cart
export function updateCartItemQuantity(cart: Cart, productId: number, quantity: number): Cart {
  if (quantity <= 0) {
    return removeFromCart(cart, productId)
  }

  const existingItemIndex = cart.items.findIndex((item) => item.productId === productId)

  if (existingItemIndex === -1) {
    throw new Error(`Product with ID ${productId} not found in cart`)
  }

  const updatedItems = [...cart.items]
  updatedItems[existingItemIndex] = {
    ...updatedItems[existingItemIndex],
    quantity,
  }

  // Calculate new totals
  const totals = calculateCartTotals(updatedItems)

  return {
    ...cart,
    items: updatedItems,
    ...totals,
  }
}

// Remove a product from the cart
export function removeFromCart(cart: Cart, productId: number): Cart {
  const updatedItems = cart.items.filter((item) => item.productId !== productId)

  // Calculate new totals
  const totals = calculateCartTotals(updatedItems)

  return {
    ...cart,
    items: updatedItems,
    ...totals,
  }
}

// Clear the cart
export function clearCart(cart: Cart): Cart {
  return {
    ...cart,
    items: [],
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  }
}

// Get cart with populated product details
export function getCartWithProducts(cart: Cart): Cart {
  const itemsWithProducts = cart.items.map((item) => {
    return {
      ...item,
      product: getProductById(item.productId),
    }
  })

  return {
    ...cart,
    items: itemsWithProducts,
  }
}
