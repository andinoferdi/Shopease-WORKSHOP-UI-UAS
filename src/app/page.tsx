import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Categories from "@/components/home/Categories";
import LatestArticles from "@/components/home/LatestArticles";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import ParticlesBackground from "@/components/effects/ParticlesBackground";

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero />

      <Categories />

      <FeaturedProducts />

      <div className="relative py-16">
        <ParticlesBackground color={["#0F766E", "#115E59", "#0D9488"]} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2
            className="text-3xl font-bold text-white mb-4 neon-text"
            data-animate="fade-up"
          >
            Premium Quality Products
          </h2>
          <p
            className="text-white text-lg max-w-2xl mx-auto"
            data-animate="fade-up"
            data-animate-delay="100"
          >
            We source only the finest materials and work with trusted
            manufacturers to ensure exceptional quality.
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <Testimonials />
        </div>
      </div>

      <LatestArticles />

      <Newsletter />
    </div>
  );
}
