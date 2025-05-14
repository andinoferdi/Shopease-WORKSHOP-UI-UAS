import { type NextRequest, NextResponse } from "next/server";
import {
  getArticles,
  searchArticles,
  getArticlesByCategory,
} from "@/lib/data/articles";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get("category") || undefined;
  const limit = searchParams.get("limit")
    ? Number.parseInt(searchParams.get("limit")!)
    : undefined;
  const query = searchParams.get("query") || undefined;

  try {
    if (query) {
      const articles = searchArticles(query);
      return NextResponse.json({ articles });
    } else {
      let articles = category ? getArticlesByCategory(category) : getArticles();

      if (limit) {
        articles = articles.slice(0, limit);
      }

      return NextResponse.json({ articles });
    }
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}
