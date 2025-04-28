import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 129.99,
      rating: 4.5,
      image: "/placeholder.svg?height=300&width=300",
      delay: 100,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      rating: 4.8,
      image: "/placeholder.svg?height=300&width=300",
      delay: 200,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      rating: 4.2,
      image: "/placeholder.svg?height=300&width=300",
      delay: 300,
    },
    {
      id: 4,
      name: "Laptop Backpack",
      price: 59.99,
      rating: 4.7,
      image: "/placeholder.svg?height=300&width=300",
      delay: 400,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div
        className="mb-8 flex items-center justify-between"
        data-animate="fade-up"
      >
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
          Featured Products
        </h2>
        <Link
          href="/products"
          className="text-sm font-medium text-teal-700 hover:text-teal-900 transition-colors duration-300"
        >
          View All Products
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            data-animate="fade-up"
            data-animate-delay={product.delay}
          >
            <Link href={`/products/${product.id}`} className="block">
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 text-lg font-medium text-gray-900">
                  {product.name}
                </h3>
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
                  <span className="ml-2 text-xs text-gray-500">
                    {product.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-teal-700">
                    ${product.price.toFixed(2)}
                  </span>
                  <button className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors duration-300 hover:bg-teal-700 hover:text-white">
                    <ShoppingCart className="h-4 w-4" />
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
