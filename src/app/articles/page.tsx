import Link from "next/link";
import Image from "next/image";
import { Search, Calendar, User } from "lucide-react";

export default function ArticleArchive() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Blog Articles</h1>

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <select className="rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500">
            <option>All Categories</option>
            <option>Technology</option>
            <option>Fashion</option>
            <option>Lifestyle</option>
          </select>
          <select className="rounded-md border border-gray-300 px-3 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500">
            <option>Latest</option>
            <option>Popular</option>
            <option>Oldest</option>
          </select>
        </div>

        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full rounded-md border border-gray-300 pl-10 pr-4 py-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((article) => (
          <article
            key={article}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <Link href={`/articles/${article}`} className="block">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="/placeholder.svg?height=192&width=384"
                  alt="Article thumbnail"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center space-x-4 text-xs text-gray-500">
                  <span className="rounded-full bg-teal-100 px-2 py-1 text-xs font-medium text-teal-800">
                    {["Technology", "Fashion", "Lifestyle"][article % 3]}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>Nov {article + 10}, 2023</span>
                  </div>
                  <div className="flex items-center">
                    <User className="mr-1 h-3 w-3" />
                    <span>Admin</span>
                  </div>
                </div>
                <h2 className="mb-2 text-xl font-bold text-gray-900 line-clamp-2">
                  {
                    [
                      "The Future of E-commerce",
                      "Top 10 Fashion Trends",
                      "How to Choose the Perfect Headphones",
                      "Sustainable Shopping Guide",
                      "Tech Gadgets for 2024",
                      "Home Office Essentials",
                    ][article % 6]
                  }
                </h2>
                <p className="mb-4 text-gray-600 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="flex items-center text-teal-700">
                  <span className="font-medium">Read More</span>
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <div className="flex space-x-1">
          <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-500 hover:bg-gray-50">
            Previous
          </button>
          <button className="rounded-md border border-teal-700 bg-teal-700 px-4 py-2 text-sm font-medium text-white">
            1
          </button>
          <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
            2
          </button>
          <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
            3
          </button>
          <button className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-500 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
