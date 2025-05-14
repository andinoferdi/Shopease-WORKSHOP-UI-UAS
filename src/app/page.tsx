import Hero from "@/components/home/Hero"
import FeaturedProducts from "@/components/home/FeaturedProducts"
import Categories from "@/components/home/Categories"
import LatestArticles from "@/components/home/LatestArticles"
import Testimonials from "@/components/home/Testimonials"
import Newsletter from "@/components/home/Newsletter"

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />

      <div className="max-w-6xl mx-auto px-4">
        <Categories />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <FeaturedProducts />
      </div>

      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Testimonials />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <LatestArticles />
      </div>

      <Newsletter />
    </div>
  )
}
