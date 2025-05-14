// app/articles/[id]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import {
  getArticleById,
  getRelatedArticles,
  getArticles,
} from "@/lib/data/articles";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import type { Article as BaseArticle } from "@/types";

// Optional: Pre-render articles at build time
export async function generateStaticParams() {
  const articles = getArticles();
  return articles.map((article: BaseArticle) => ({ id: article.id }));
}

// Extended article interface that matches the actual data structure
interface ExtendedArticle extends Omit<BaseArticle, "author" | "image"> {
  author: {
    name: string;
    avatar: string;
  };
  coverImage: string;
  publishedAt: string;
  readTime: number;
}

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const article = getArticleById(id) as unknown as ExtendedArticle;

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(
    id,
    3
  ) as unknown as ExtendedArticle[];
  const publishDate = new Date(article.publishedAt);

  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      <Link
        href="/articles"
        className="mb-8 inline-flex items-center text-sm font-medium text-teal-700 hover:text-teal-900"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Articles
      </Link>

      <article>
        <div className="mb-8">
          <span className="mb-2 inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800">
            {article.category}
          </span>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            {article.title}
          </h1>
          <div className="flex items-center text-sm text-gray-600">
            <div className="mr-6 flex items-center">
              <div className="relative mr-3 h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={article.author.avatar || "/placeholder.svg"}
                  alt={article.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span>{article.author.name}</span>
            </div>
            <div className="mr-6 flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              <span>{format(publishDate, "MMMM d, yyyy")}</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{article.readTime} min read</span>
            </div>
          </div>
        </div>

        <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={article.coverImage || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-8 flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 hover:bg-gray-200"
            >
              #{tag}
            </span>
          ))}
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Related Articles</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.id}
                href={`/articles/${relatedArticle.id}`}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={relatedArticle.coverImage || "/placeholder.svg"}
                    alt={relatedArticle.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <span className="mb-1 inline-block text-xs font-medium text-teal-700">
                    {relatedArticle.category}
                  </span>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-teal-700">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {relatedArticle.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
