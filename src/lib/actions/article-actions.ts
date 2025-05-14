"use server"
import {
  getArticles,
  getArticleById,
  getArticleBySlug,
  searchArticles,
  getArticlesByCategory,
  getRecentArticles,
  getRelatedArticles,
} from "../data/articles"

export async function fetchArticles() {
  try {
    const articles = getArticles()
    return { success: true, data: articles }
  } catch (error) {
    console.error("Error fetching articles:", error)
    return { success: false, error: "Failed to fetch articles" }
  }
}

export async function fetchArticleById(id: string) {
  try {
    const article = getArticleById(id)

    if (!article) {
      return { success: false, error: "Article not found" }
    }

    return { success: true, data: article }
  } catch (error) {
    console.error("Error fetching article:", error)
    return { success: false, error: "Failed to fetch article" }
  }
}

export async function fetchArticleBySlug(slug: string) {
  try {
    const article = getArticleBySlug(slug)

    if (!article) {
      return { success: false, error: "Article not found" }
    }

    return { success: true, data: article }
  } catch (error) {
    console.error("Error fetching article by slug:", error)
    return { success: false, error: "Failed to fetch article by slug" }
  }
}

export async function fetchArticlesByCategory(category: string) {
  try {
    const articles = getArticlesByCategory(category)
    return { success: true, data: articles }
  } catch (error) {
    console.error("Error fetching articles by category:", error)
    return { success: false, error: "Failed to fetch articles by category" }
  }
}

export async function fetchRecentArticles(limit = 3) {
  try {
    const articles = getRecentArticles(limit)
    return { success: true, data: articles }
  } catch (error) {
    console.error("Error fetching recent articles:", error)
    return { success: false, error: "Failed to fetch recent articles" }
  }
}

export async function fetchRelatedArticles(articleId: string, limit = 3) {
  try {
    const articles = getRelatedArticles(articleId, limit)
    return { success: true, data: articles }
  } catch (error) {
    console.error("Error fetching related articles:", error)
    return { success: false, error: "Failed to fetch related articles" }
  }
}

export async function searchArticlesAction(query: string) {
  try {
    const articles = searchArticles(query)
    return { success: true, data: articles }
  } catch (error) {
    console.error("Error searching articles:", error)
    return { success: false, error: "Failed to search articles" }
  }
}
