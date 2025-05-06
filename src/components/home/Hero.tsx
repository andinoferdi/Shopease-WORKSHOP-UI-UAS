"use client";

import Link from "next/link";
import Image from "next/image";
import ParticlesBackground from "../effects/ParticlesBackground";
import TextReveal from "../effects/TextReveal";
import TypingText from "../effects/TypingText";
import GlowingButton from "../effects/GlowingButton";
import MagneticButton from "../effects/MagneticButton";
import AnimatedBackground from "../effects/AnimatedBackground";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <ParticlesBackground color={["#0F766E", "#0D9488", "#14B8A6"]} />
      <AnimatedBackground />

      <div className="container mx-auto px-4 py-12 md:py-16 max-w-6xl">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <TextReveal
              text="Discover Amazing Products"
              className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl"
            />
            <div className="h-12">
              <TypingText
                text={[
                  "for Your Lifestyle",
                  "for Your Home",
                  "for Your Business",
                  "for Your Family",
                ]}
                className="text-3xl font-bold leading-tight text-teal-700 md:text-4xl lg:text-5xl"
                typingSpeed={80}
                deletingSpeed={40}
              />
            </div>
            <p className="text-base text-gray-600">
              Shop the latest trends and find everything you need with our
              curated collection of high-quality products.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <GlowingButton className="rounded-md bg-teal-700 px-6 py-3 text-base font-bold text-white relative z-10 hover:bg-teal-600 transition-all duration-300">
                <Link href="/products">Shop Now</Link>
              </GlowingButton>
              <MagneticButton strength={20}>
                <Link
                  href="/articles"
                  className="rounded-md border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300"
                >
                  Read Blog
                </Link>
              </MagneticButton>
            </div>
          </div>
          <div className="relative h-[320px] w-full overflow-hidden rounded-lg neon-box">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Hero image"
              fill
              className="object-cover"
            />

            {/* Animated overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent opacity-70"></div>

            {/* Floating elements */}
            <div className="absolute top-1/4 left-1/4 h-16 w-16 rounded-full bg-teal-500/30 animate-float blur-md"></div>
            <div
              className="absolute bottom-1/4 right-1/4 h-12 w-12 rounded-full bg-teal-600/20 animate-float blur-md"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 right-1/3 h-8 w-8 rounded-full bg-teal-400/30 animate-float blur-md"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
