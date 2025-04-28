"use client";

import Link from "next/link";
import Image from "next/image";
import ParticlesBackground from "../effects/ParticlesBackground";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <ParticlesBackground color={["#0F766E", "#0D9488", "#14B8A6"]} />

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-6" data-animate="fade-right">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Discover <span className="neon-text">Amazing</span> Products for
              Your Lifestyle
            </h1>
            <p className="text-lg text-gray-600">
              Shop the latest trends and find everything you need with our
              curated collection of high-quality products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/products"
                className="neon-button bg-teal-700 text-white font-bold px-8 py-4 text-lg relative z-10 hover:bg-teal-600 transition-all duration-300"
                data-animate="zoom-in"
                data-animate-delay="300"
                style={{
                  boxShadow:
                    "0 0 10px #0F766E, 0 0 20px rgba(15, 118, 110, 0.5)",
                  textShadow: "0 0 5px rgba(255, 255, 255, 0.7)",
                }}
              >
                Shop Now
              </Link>
              <Link
                href="/articles"
                className="rounded-md border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300"
                data-animate="zoom-in"
                data-animate-delay="400"
              >
                Read Blog
              </Link>
            </div>
          </div>
          <div
            className="relative h-[400px] w-full overflow-hidden rounded-lg neon-box"
            data-animate="fade-left"
            data-animate-delay="200"
          >
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Hero image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
