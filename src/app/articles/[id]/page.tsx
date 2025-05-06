import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  User,
  MessageSquare,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  ArrowLeft,
} from "lucide-react";

interface ParamsType {
  id: string;
}

export default async function ArticleDetail({
  params,
}: {
  params: ParamsType;
}) {
  const { id } = params;

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-10 py-8">
      <Link
        href="/articles"
        className="mb-6 inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-900"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Articles
      </Link>

      <article>
        <header className="mb-8">
          <div className="mb-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
              {["Technology", "Fashion", "Lifestyle"][Number(id) % 3]}
            </span>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              <span>Nov {10 + Number(id)}, 2023</span>
            </div>
            <div className="flex items-center">
              <User className="mr-1 h-4 w-4" />
              <span>By Admin</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="mr-1 h-4 w-4" />
              <span>5 Comments</span>
            </div>
          </div>

          <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {
              [
                "The Future of E-commerce",
                "Top 10 Fashion Trends",
                "How to Choose the Perfect Headphones",
                "Sustainable Shopping Guide",
                "Tech Gadgets for 2024",
                "Home Office Essentials",
              ][Number(id) % 6]
            }
          </h1>
        </header>

        <div className="relative mb-8 h-96 w-full overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=384&width=768"
            alt="Article featured image"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>

          <h2>Key Insights</h2>

          <p>
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </p>

          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </li>
            <li>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum
            </li>
          </ul>

          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>

          <blockquote>
            &ldquo;The future of e-commerce is not just about selling products
            online, but creating immersive and personalized shopping experiences
            that bridge the gap between digital and physical retail.&rdquo;
          </blockquote>

          <p>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere possimus, omnis voluptas
            assumenda est, omnis dolor repellendus.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-b border-gray-200 py-6">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Tags:</span>
            <div className="flex flex-wrap gap-2">
              {["E-commerce", "Technology", "Retail", "Digital"].map((tag) => (
                <Link
                  key={tag}
                  href="#"
                  className="rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-700 hover:bg-gray-200"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Share:</span>
            <div className="flex space-x-2">
              <button className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200">
                <Linkedin className="h-4 w-4" />
              </button>
              <button className="rounded-full bg-gray-100 p-2 text-gray-600 hover:bg-gray-200">
                <Share2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-6 text-xl font-bold text-gray-900">Comments (5)</h3>

          <div className="space-y-6">
            {[1, 2, 3].map((comment) => (
              <div
                key={comment}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <div className="mb-4 flex items-start space-x-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="User avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-gray-900">John Doe</h4>
                      <span className="text-xs text-gray-500">
                        Nov {comment + 15}, 2023
                      </span>
                    </div>
                    <p className="mt-2 text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button className="mt-2 text-sm font-medium text-teal-700 hover:text-teal-900">
                      Reply
                    </button>
                  </div>
                </div>

                {comment === 1 && (
                  <div className="ml-14 mt-4 rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <div className="flex items-start space-x-4">
                      <div className="relative h-8 w-8 overflow-hidden rounded-full">
                        <Image
                          src="/placeholder.svg?height=32&width=32"
                          alt="User avatar"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-gray-900">Admin</h4>
                          <span className="text-xs text-gray-500">
                            Nov 18, 2023
                          </span>
                        </div>
                        <p className="mt-2 text-gray-600">
                          Thank you for your comment! We appreciate your
                          feedback.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              Leave a Comment
            </h3>

            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="comment"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Comment
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  className="w-full rounded-md border border-gray-300 p-2 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="rounded-md bg-teal-700 px-4 py-2 font-medium text-white hover:bg-teal-800"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </article>
    </div>
  );
}
