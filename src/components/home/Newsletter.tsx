export default function Newsletter() {
  return (
    <div className="gradient-bg py-16">
      <div className="container mx-auto px-4 text-center">
        <div data-animate="fade-up">
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl neon-text">
            Subscribe to Our Newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white">
            Stay updated with our latest products, exclusive offers, and helpful
            shopping tips.
          </p>
          <form className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border-0 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-300"
              required
            />
            <button
              type="submit"
              className="neon-button"
              data-animate="zoom-in"
              data-animate-delay="200"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-sm text-white">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>
      </div>
    </div>
  );
}
