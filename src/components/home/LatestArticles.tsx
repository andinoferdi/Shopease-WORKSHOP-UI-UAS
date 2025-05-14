import Link from "next/link"
import Image from "next/image"
import { Calendar, User } from "lucide-react"

export default function LatestArticles() {
  const articles = [
    {
      id: 1,
      title: "The Future of E-commerce",
      excerpt: "Discover the latest trends and technologies shaping the future of online shopping.",
      category: "Technology",
      date: "Nov 15, 2023",
      author: "Admin",
      image: "/placeholder.svg?height=200&width=400",
      delay: 100,
    },
    {
      id: 2,
      title: "Top 10 Fashion Trends",
      excerpt: "Stay ahead of the curve with these top fashion trends for the upcoming season.",
      category: "Fashion",
      date: "Nov 12, 2023",
      author: "Admin",
      image: "/placeholder.svg?height=200&width=400",
      delay: 200,
    },
    {
      id: 3,
      title: "How to Choose the Perfect Headphones",
      excerpt: "A comprehensive guide to selecting the right headphones for your needs and preferences.",
      category: "Technology",
      date: "Nov 10, 2023",
      author: "Admin",
      image: "/placeholder.svg?height=200&width=400",
      delay: 300,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8 flex items-center justify-between" data-animate="fade-up">
        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Latest Articles</h2>
        <Link
          href="/articles"
          className="text-sm font-medium text-teal-700 hover:text-teal-900 transition-colors duration-300"
        >
          View All Articles
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.id}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
            data-animate="fade-up"
            data-animate-delay={article.delay}
          >
            <Link href={`/articles/${article.id}`} className="block">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center space-x-4 text-xs text-gray-500">
                  <span className="rounded-full bg-teal-100 px-2 py-1 text-xs font-medium text-teal-800">
                    {article.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="mr-1 h-3 w-3" />
                    <span>{article.author}</span>
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{article.title}</h3>
                <p className="mb-4 text-gray-600">{article.excerpt}</p>
                <div className="flex items-center text-teal-700">
                  <span className="font-medium">Read More</span>
                  <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
