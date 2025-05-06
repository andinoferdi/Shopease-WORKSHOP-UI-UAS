"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-500 to-emerald-600 opacity-90">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-center opacity-5"></div>
      </div>

      {/* Animated glow effects */}
      <div className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-teal-300 opacity-20 blur-[100px] animate-pulse"></div>
      <div
        className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full bg-emerald-300 opacity-20 blur-[100px] animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container relative mx-auto px-4 text-center">
        <div className="animate-fade-up">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl tracking-tight drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]">
            Subscribe to Our Newsletter
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-white/90 text-lg">
            Stay updated with our latest products, exclusive offers, and helpful
            shopping tips.
          </p>

          <div className="mx-auto max-w-xl">
            <div className="relative rounded-2xl bg-gray-900/90 backdrop-blur-sm p-8 shadow-[0_0_15px_rgba(20,184,166,0.3)] border border-teal-500/30">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <CheckCircle className="mb-4 h-16 w-16 text-teal-400 animate-bounce" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-300">
                    Your message has been sent successfully.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="group relative">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full rounded-lg border border-teal-700/50 bg-gray-800/90 px-4 py-3 text-gray-100 transition-all focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 group-hover:border-teal-600"
                      required
                    />
                  </div>

                  <div className="group relative">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full rounded-lg border border-teal-700/50 bg-gray-800/90 px-4 py-3 text-gray-100 transition-all focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 group-hover:border-teal-600"
                      required
                    />
                  </div>

                  <div className="group relative">
                    <input
                      type="text"
                      placeholder="Subject"
                      className="w-full rounded-lg border border-teal-700/50 bg-gray-800/90 px-4 py-3 text-gray-100 transition-all focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 group-hover:border-teal-600"
                    />
                  </div>

                  <div className="group relative">
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full rounded-lg border border-teal-700/50 bg-gray-800/90 px-4 py-3 text-gray-100 transition-all focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 group-hover:border-teal-600 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 px-6 py-3 font-medium text-white shadow-lg transition-all hover:from-teal-600 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-0 h-full w-full bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 transition-opacity group-hover:opacity-20"></span>
                    <span className="relative flex items-center justify-center gap-2">
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>

          <p className="mt-6 text-sm text-white/80">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
      </div>
    </div>
  );
}
