import Link from "next/link";
import ScrollReveal from "../effects/ScrollReveal";
import Product3DCard from "../effects/3DProductCard";

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
      <ScrollReveal>
        <div className="mb-8 flex items-center justify-between">
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
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <ScrollReveal
            key={product.id}
            delay={index * 100}
            direction={index % 2 === 0 ? "up" : "down"}
          >
            <Product3DCard {...product} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
