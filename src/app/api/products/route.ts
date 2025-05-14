import { type NextRequest, NextResponse } from "next/server"
import { getProducts, searchProducts } from "@/lib/data/products"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const category = searchParams.get("category") || undefined
  const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")!) : undefined
  const query = searchParams.get("query") || undefined

  try {
    if (query) {
      const products = searchProducts(query)
      return NextResponse.json({ products })
    } else {
      const products = getProducts(limit, category)
      return NextResponse.json({ products })
    }
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}
