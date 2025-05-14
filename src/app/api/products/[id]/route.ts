import { NextResponse } from "next/server";
import { getProductById, getRelatedProducts } from "@/lib/data/products";

// ✅ Sesuai standar Next.js 15 — params harus berupa Promise dan di-`await`
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Karena getProductById() dan getRelatedProducts() adalah sinkron, kita bisa panggil langsung
    const product = getProductById(id);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const relatedProducts = getRelatedProducts(id);

    return NextResponse.json({ product, relatedProducts });
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
