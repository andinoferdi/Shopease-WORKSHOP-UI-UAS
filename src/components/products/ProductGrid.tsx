import Link from "next/link"
import Image from "next/image"
import { Star, ShoppingCart, Heart } from "lucide-react"

export default function ProductGrid() {
  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: [
      "Premium Wireless Headphones",
      "Smart Watch",
      "Bluetooth Speaker",
      "Laptop Backpack",
      "Wireless Earbuds",
      "Fitness Tracker",
      "Portable Charger",
      "Wireless Mouse",
      "Mechanical Keyboard",
      "USB-C Hub",
      "Smartphone Gimbal",
      "Noise-Cancelling Headphones",
    ][i % 12],
    price: 49.99 + i * 10,
    rating: 3.5 + (i % 2),
    image: "/placeholder.svg?height=300&width=300",
  }))

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
        >
          <div className="relative">
            <Link href={`/products/${product.id}`} className="block">
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
            <button className="absolute right-2 top-2 rounded-full bg-white p-2 text-gray-600 shadow-sm transition-colors hover:bg-teal-700 hover:text-white">
              <Heart className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4">
            <Link href={`/products/${product.id}`} className="block">
              <h3 className="mb-2 text-lg font-medium text-gray-900">{product.name}</h3>
              <div className="mb-2 flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-orange-400 text-orange-400"
                          : i < product.rating
                            ? "fill-orange-400 text-orange-400"
                            : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-xs text-gray-500">{product.rating}</span>
              </div>
            </Link>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-teal-700">${product.price.toFixed(2)}</span>
              <button className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-teal-700 hover:text-white">
                <ShoppingCart className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
