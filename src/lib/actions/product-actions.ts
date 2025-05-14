"use server"
import {
  getProducts,
  getProductById,
  searchProducts,
  getProductsByCategory,
  getFeaturedProducts,
  getRelatedProducts,
} from "../data/products"

export async function fetchProducts() {
  try {
    const products = getProducts()
    return { success: true, data: products }
  } catch (error) {
    console.error("Error fetching products:", error)
    return { success: false, error: "Failed to fetch products" }
  }
}

export async function fetchProductById(id: string) {
  try {
    const product = getProductById(id)

    if (!product) {
      return { success: false, error: "Product not found" }
    }

    return { success: true, data: product }
  } catch (error) {
    console.error("Error fetching product:", error)
    return { success: false, error: "Failed to fetch product" }
  }
}

export async function fetchProductsByCategory(category: string) {
  try {
    const products = getProductsByCategory(category)
    return { success: true, data: products }
  } catch (error) {
    console.error("Error fetching products by category:", error)
    return { success: false, error: "Failed to fetch products by category" }
  }
}

export async function fetchFeaturedProducts() {
  try {
    const products = getFeaturedProducts()
    return { success: true, data: products }
  } catch (error) {
    console.error("Error fetching featured products:", error)
    return { success: false, error: "Failed to fetch featured products" }
  }
}

export async function fetchRelatedProducts(productId: string, limit = 4) {
  try {
    const products = getRelatedProducts(productId, limit)
    return { success: true, data: products }
  } catch (error) {
    console.error("Error fetching related products:", error)
    return { success: false, error: "Failed to fetch related products" }
  }
}

export async function searchProductsAction(query: string) {
  try {
    const products = searchProducts(query)
    return { success: true, data: products }
  } catch (error) {
    console.error("Error searching products:", error)
    return { success: false, error: "Failed to search products" }
  }
}
