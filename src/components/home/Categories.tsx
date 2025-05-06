import Link from "next/link";
import { Smartphone, Shirt, Home, ShoppingBag } from "lucide-react";
import ScrollReveal from "../effects/ScrollReveal";

export default function Categories() {
  const categories = [
    {
      name: "Electronics",
      icon: Smartphone,
      href: "/products?category=electronics",
      color: "bg-blue-100 text-blue-700",
      delay: 100,
    },
    {
      name: "Clothing",
      icon: Shirt,
      href: "/products?category=clothing",
      color: "bg-orange-100 text-orange-700",
      delay: 200,
    },
    {
      name: "Home & Kitchen",
      icon: Home,
      href: "/products?category=home",
      color: "bg-green-100 text-green-700",
      delay: 300,
    },
    {
      name: "Accessories",
      icon: ShoppingBag,
      href: "/products?category=accessories",
      color: "bg-purple-100 text-purple-700",
      delay: 400,
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <ScrollReveal>
        <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
          Shop by Category
        </h2>
      </ScrollReveal>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {categories.map((category, index) => (
          <ScrollReveal
            key={category.name}
            delay={index * 100}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <Link
              href={category.href}
              className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md hover:-translate-y-1 duration-300"
            >
              <div className={`mb-4 rounded-full ${category.color} p-4`}>
                <category.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                {category.name}
              </h3>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
