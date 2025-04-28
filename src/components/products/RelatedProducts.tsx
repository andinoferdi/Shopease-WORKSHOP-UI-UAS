import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";

export default function RelatedProducts() {
  const products = [
    {
      id: 2,
      name: "Wireless Earbuds",
      price: 79.99,
      rating: 4.3,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 99.99,
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      name: "Noise-Cancelling Headphones",
      price: 149.99,
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      name: "Portable Charger",
      price: 49.99,
      rating: 4.2,
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <div className="mt-16">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        You May Also Like
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
          >
            <Link href={`/products/${product.id}`} className="block">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-sm font-medium text-gray-900">
                  {product.name}
                </h3>
                <div className="mb-2 flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(product.rating)
                            ? "fill-orange-400 text-orange-400"
                            : i < product.rating
                            ? "fill-orange-400 text-orange-400"
                            : "fill-gray-200 text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-1 text-xs text-gray-500">
                    {product.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-teal-700">
                    ${product.price.toFixed(2)}
                  </span>
                  <button className="rounded-full bg-gray-100 p-1.5 text-gray-600 transition-colors hover:bg-teal-700 hover:text-white">
                    <ShoppingCart className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
