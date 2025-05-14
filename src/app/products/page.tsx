import ProductFilters from "@/components/products/ProductFilters"
import ProductGrid from "@/components/products/ProductGrid"
import { ProductSorter } from "@/components/products/ProductSorter"

export default function ProductCatalog() {
  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 py-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Product Catalog</h1>

      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="lg:w-1/4">
          <ProductFilters />
        </div>

        <div className="lg:w-3/4">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600">Showing 24 of 156 products</p>
            <ProductSorter />
          </div>

          <ProductGrid />
        </div>
      </div>
    </div>
  )
}
