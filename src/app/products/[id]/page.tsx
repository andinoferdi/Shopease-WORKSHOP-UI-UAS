import Image from "next/image";
import { Star, ShoppingCart, Heart, Share2 } from "lucide-react";
import ProductTabs from "@/components/products/ProductTabs";
import RelatedProducts from "@/components/products/RelatedProducts";

export default function ProductDetail({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-16 grid gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
          <Image
            src="/placeholder.svg?height=600&width=600"
            alt="Product Image"
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
              In Stock
            </span>
            <span className="text-sm text-gray-500">SKU: {params.id}</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900">
            Premium Wireless Headphones
          </h1>

          <div className="flex items-center space-x-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-5 w-5 fill-orange-400 text-orange-400"
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">(121 reviews)</span>
          </div>

          <div className="text-2xl font-bold text-teal-700">$129.99</div>

          <p className="text-gray-600">
            Experience premium sound quality with our wireless headphones.
            Featuring noise cancellation, long battery life, and comfortable
            design for all-day wear.
          </p>

          <div className="space-y-4 pt-6">
            <div className="flex flex-col space-y-2">
              <span className="font-medium text-gray-700">Color</span>
              <div className="flex space-x-2">
                {[
                  "bg-black",
                  "bg-white border border-gray-300",
                  "bg-teal-600",
                  "bg-orange-500",
                ].map((color, i) => (
                  <button key={i} className={`h-8 w-8 rounded-full ${color}`} />
                ))}
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <span className="font-medium text-gray-700">Quantity</span>
              <div className="flex h-10 w-32">
                <button className="flex h-full w-10 items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-gray-100">
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value="1"
                  className="h-full w-12 border border-gray-300 text-center"
                />
                <button className="flex h-full w-10 items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-gray-100">
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-6">
            <button className="flex items-center justify-center gap-2 rounded-md bg-teal-700 px-8 py-3 font-medium text-white hover:bg-teal-800">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
            <button className="flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-3 font-medium text-gray-700 hover:bg-gray-50">
              <Heart className="h-5 w-5" />
              Wishlist
            </button>
            <button className="flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-3 font-medium text-gray-700 hover:bg-gray-50">
              <Share2 className="h-5 w-5" />
              Share
            </button>
          </div>
        </div>
      </div>

      <ProductTabs />
      <RelatedProducts />
    </div>
  );
}
