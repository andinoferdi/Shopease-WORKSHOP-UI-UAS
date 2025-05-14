import { type NextRequest, NextResponse } from "next/server"
import { getArticleById, getRelatedArticles } from "@/lib/data/articles"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)

  if (isNaN(id)) {
    return NextResponse.json({ error: "Invalid article ID" }, { status: 400 })
  }

  try {
    const article = getArticleById(id)

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    const relatedArticles = getRelatedArticles(id)

    return NextResponse.json({ article, relatedArticles })
  } catch (error) {
    console.error("Error fetching article:", error)
    return NextResponse.json({ error: "Failed to fetch article" }, { status: 500 })
  }
}
