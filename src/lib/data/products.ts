import type { Product } from "@/types"

// Dummy product data
export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear sound with our premium wireless headphones. Features noise cancellation, 30-hour battery life, and comfortable over-ear design.",
    price: 249.99,
    discountPrice: 199.99,
    images: [
      "/images/products/headphones-1.jpg",
      "/images/products/headphones-2.jpg",
      "/images/products/headphones-3.jpg",
    ],
    category: "Electronics",
    tags: ["headphones", "wireless", "audio", "premium"],
    stock: 45,
    rating: 4.8,
    reviews: 124,
    featured: true,
    createdAt: "2023-09-15T10:30:00Z",
    updatedAt: "2024-04-20T14:15:00Z",
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    description:
      "Track your fitness goals with our advanced smart watch. Monitors heart rate, sleep patterns, and activity levels. Water-resistant and includes GPS tracking.",
    price: 179.99,
    discountPrice: 149.99,
    images: ["/images/products/watch-1.jpg", "/images/products/watch-2.jpg"],
    category: "Wearables",
    tags: ["fitness", "smartwatch", "health", "wearable"],
    stock: 78,
    rating: 4.6,
    reviews: 89,
    featured: true,
    createdAt: "2023-10-05T09:45:00Z",
    updatedAt: "2024-04-18T11:20:00Z",
  },
  {
    id: "3",
    name: "Ultra-Slim Laptop",
    description:
      "Powerful performance in an ultra-slim design. Features the latest processor, 16GB RAM, 512GB SSD, and a stunning 4K display. Perfect for professionals on the go.",
    price: 1299.99,
    discountPrice: 1199.99,
    images: ["/images/products/laptop-1.jpg", "/images/products/laptop-2.jpg", "/images/products/laptop-3.jpg"],
    category: "Computers",
    tags: ["laptop", "ultrabook", "professional", "computing"],
    stock: 32,
    rating: 4.9,
    reviews: 156,
    featured: true,
    createdAt: "2023-08-20T14:10:00Z",
    updatedAt: "2024-04-15T16:30:00Z",
  },
  {
    id: "4",
    name: "Professional Camera Kit",
    description:
      "Capture stunning photos and videos with our professional camera kit. Includes a 24MP camera body, two premium lenses, tripod, and carrying case.",
    price: 1899.99,
    discountPrice: 1699.99,
    images: ["/images/products/camera-1.jpg", "/images/products/camera-2.jpg"],
    category: "Photography",
    tags: ["camera", "professional", "photography", "kit"],
    stock: 18,
    rating: 4.7,
    reviews: 72,
    featured: false,
    createdAt: "2023-11-12T08:20:00Z",
    updatedAt: "2024-04-10T09:45:00Z",
  },
  {
    id: "5",
    name: "Wireless Earbuds",
    description:
      "Compact and powerful wireless earbuds with exceptional sound quality. Features active noise cancellation, water resistance, and 24-hour battery life with the charging case.",
    price: 129.99,
    discountPrice: 99.99,
    images: ["/images/products/earbuds-1.jpg", "/images/products/earbuds-2.jpg"],
    category: "Electronics",
    tags: ["earbuds", "wireless", "audio", "portable"],
    stock: 120,
    rating: 4.5,
    reviews: 210,
    featured: true,
    createdAt: "2023-12-01T11:30:00Z",
    updatedAt: "2024-04-05T13:15:00Z",
  },
  {
    id: "6",
    name: "Smart Home Hub",
    description:
      "Control your entire smart home with our intuitive hub. Compatible with all major smart home devices and voice assistants. Includes advanced automation features.",
    price: 199.99,
    discountPrice: 169.99,
    images: ["/images/products/smarthome-1.jpg", "/images/products/smarthome-2.jpg"],
    category: "Smart Home",
    tags: ["smart home", "automation", "hub", "connected"],
    stock: 55,
    rating: 4.4,
    reviews: 68,
    featured: false,
    createdAt: "2024-01-15T15:45:00Z",
    updatedAt: "2024-04-02T10:30:00Z",
  },
  {
    id: "7",
    name: "Gaming Console",
    description:
      "Next-generation gaming console with stunning graphics and lightning-fast performance. Includes one controller and three popular game titles.",
    price: 499.99,
    discountPrice: 479.99,
    images: ["/images/products/console-1.jpg", "/images/products/console-2.jpg"],
    category: "Gaming",
    tags: ["gaming", "console", "entertainment", "next-gen"],
    stock: 25,
    rating: 4.9,
    reviews: 187,
    featured: true,
    createdAt: "2023-11-25T09:15:00Z",
    updatedAt: "2024-03-28T14:20:00Z",
  },
  {
    id: "8",
    name: "Portable Bluetooth Speaker",
    description:
      "Powerful sound in a compact, portable design. Features 20-hour battery life, water resistance, and multi-speaker pairing capability.",
    price: 89.99,
    discountPrice: 69.99,
    images: ["/images/products/speaker-1.jpg", "/images/products/speaker-2.jpg"],
    category: "Electronics",
    tags: ["speaker", "bluetooth", "portable", "audio"],
    stock: 92,
    rating: 4.3,
    reviews: 145,
    featured: false,
    createdAt: "2024-02-10T13:40:00Z",
    updatedAt: "2024-03-25T11:10:00Z",
  },
  {
    id: "9",
    name: "4K Smart TV",
    description:
      "Immersive viewing experience with our 55-inch 4K smart TV. Features HDR, built-in streaming apps, and voice control. Slim design with minimal bezels.",
    price: 799.99,
    discountPrice: 699.99,
    images: ["/images/products/tv-1.jpg", "/images/products/tv-2.jpg"],
    category: "Electronics",
    tags: ["tv", "4k", "smart tv", "entertainment"],
    stock: 40,
    rating: 4.7,
    reviews: 112,
    featured: true,
    createdAt: "2023-10-30T10:20:00Z",
    updatedAt: "2024-03-20T15:30:00Z",
  },
  {
    id: "10",
    name: "Ergonomic Office Chair",
    description:
      "Work in comfort with our ergonomic office chair. Features adjustable height, lumbar support, breathable mesh back, and smooth-rolling casters.",
    price: 249.99,
    discountPrice: 199.99,
    images: ["/images/products/chair-1.jpg", "/images/products/chair-2.jpg"],
    category: "Furniture",
    tags: ["chair", "office", "ergonomic", "furniture"],
    stock: 65,
    rating: 4.5,
    reviews: 78,
    featured: false,
    createdAt: "2024-01-05T08:30:00Z",
    updatedAt: "2024-03-15T09:45:00Z",
  },
  {
    id: "11",
    name: "Smartphone Gimbal Stabilizer",
    description:
      "Create professional-quality videos with our smartphone gimbal stabilizer. Features 3-axis stabilization, tracking modes, and 12-hour battery life.",
    price: 119.99,
    discountPrice: 99.99,
    images: ["/images/products/gimbal-1.jpg", "/images/products/gimbal-2.jpg"],
    category: "Photography",
    tags: ["gimbal", "smartphone", "video", "stabilizer"],
    stock: 48,
    rating: 4.4,
    reviews: 56,
    featured: false,
    createdAt: "2024-02-20T14:15:00Z",
    updatedAt: "2024-03-10T16:20:00Z",
  },
  {
    id: "12",
    name: "Mechanical Keyboard",
    description:
      "Enhance your typing experience with our mechanical keyboard. Features customizable RGB lighting, programmable keys, and durable construction.",
    price: 149.99,
    discountPrice: 129.99,
    images: ["/images/products/keyboard-1.jpg", "/images/products/keyboard-2.jpg"],
    category: "Computers",
    tags: ["keyboard", "mechanical", "gaming", "accessories"],
    stock: 85,
    rating: 4.6,
    reviews: 94,
    featured: false,
    createdAt: "2023-12-15T11:10:00Z",
    updatedAt: "2024-03-05T13:25:00Z",
  },
]

// Helper functions for product data
export const getProducts = () => {
  return products
}

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id)
}

export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured)
}

export const getProductsByCategory = (category: string) => {
  return products.filter((product) => product.category === category)
}

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}

export const getRelatedProducts = (productId: string, limit = 4) => {
  const product = getProductById(productId)
  if (!product) return []

  return products
    .filter(
      (p) =>
        p.id !== productId && (p.category === product.category || p.tags.some((tag) => product.tags.includes(tag))),
    )
    .slice(0, limit)
}
