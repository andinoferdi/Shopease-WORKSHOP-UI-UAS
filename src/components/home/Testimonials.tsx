import Image from "next/image";
import { Star } from "lucide-react";
import ParticlesBackground from "../effects/ParticlesBackground";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Verified Customer",
      content:
        "I've been shopping with ShopEase for over a year now, and I'm consistently impressed by their product quality and customer service. Highly recommended!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
      delay: 100,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Verified Customer",
      content:
        "The delivery was super fast, and the product exceeded my expectations. Will definitely be ordering from ShopEase again!",
      rating: 5,
      image: "/placeholder.svg?height=60&width=60",
      delay: 200,
    },
    {
      id: 3,
      name: "Robert Johnson",
      role: "Verified Customer",
      content:
        "Great selection of products at competitive prices. The website is easy to navigate, and checkout is a breeze.",
      rating: 4,
      image: "/placeholder.svg?height=60&width=60",
      delay: 300,
    },
  ];

  return (
    <div className="relative py-16">
      <ParticlesBackground color={["#0D9488", "#14B8A6", "#2DD4BF"]} />

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className="mb-12 text-center text-2xl font-bold text-gray-900 md:text-3xl neon-text"
          data-animate="fade-up"
        >
          What Our Customers Say
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-lg bg-white/90 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              data-animate="fade-up"
              data-animate-delay={testimonial.delay}
            >
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "fill-orange-400 text-orange-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <p className="mb-6 text-gray-600">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-teal-500">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
