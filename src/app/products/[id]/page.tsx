import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/lib/data/products"
import AddToCartButton from "@/components/products/AddToCartButton"
import { notFound } from "next/navigation"

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(params.id, 4)

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 py-8">
      <Link
        href="/products"
        className="mb-6 inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-900"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.images[0] || "/placeholder.svg?height=600&width=600"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="mb-4 text-3xl font-bold text-gray-900">{product.name}</h1>

          <div className="mb-4">
            <div className="mb-2 flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">{product.reviews} reviews</span>
            </div>
          </div>

          <div className="mb-6">
            {product.discountPrice ? (
              <div className="flex items-center">
                <p className="text-3xl font-bold text-gray-900">${product.discountPrice.toFixed(2)}</p>
                <p className="ml-2 text-lg text-gray-500 line-through">${product.price.toFixed(2)}</p>
              </div>
            ) : (
              <p className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
            )}
            <p className="text-green-600">In stock and ready to ship</p>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-lg font-semibold text-gray-900">Description</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>

          <div className="mb-6">
            <h2 className="mb-2 text-lg font-semibold text-gray-900">Features</h2>
            <ul className="list-inside list-disc space-y-2 text-gray-700">
              <li>Premium quality materials</li>
              <li>Innovative design for maximum comfort</li>
              <li>Built-in advanced technology</li>
              <li>Long-lasting durability</li>
              <li>90-day warranty</li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <AddToCartButton
              productId={product.id}
              className="flex-1 rounded-md bg-teal-700 px-6 py-3 text-white hover:bg-teal-800"
            />
            <button className="rounded-md border border-gray-300 bg-white px-6 py-3 text-gray-700 hover:bg-gray-50">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Related Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((relatedProduct) => (
            <Link
              key={relatedProduct.id}
              href={`/products/${relatedProduct.id}`}
              className="group rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative mb-4 aspect-square overflow-hidden rounded-md bg-gray-100">
                <Image
                  src={relatedProduct.images[0] || "/placeholder.svg?height=300&width=300"}
                  alt={relatedProduct.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900">{relatedProduct.name}</h3>
              <p className="mt-2 text-lg font-bold text-gray-900">
                ${(relatedProduct.discountPrice || relatedProduct.price).toFixed(2)}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
