import "server-only"

import type { Article } from "@/types/article"

import { getPublicArticles } from "@/lib/admin-store"

const API_BASE_URL =
  process.env.API_BASE_URL?.trim().replace(/\/+$/, "") ??
  process.env.NEXT_PUBLIC_API_BASE_URL?.trim().replace(/\/+$/, "") ??
  ""

const configuredArticlesPath =
  process.env.API_ARTICLES_PATH?.trim().replace(/^\/+|\/+$/g, "") ||
  process.env.NEXT_PUBLIC_API_ARTICLES_PATH?.trim().replace(/^\/+|\/+$/g, "") ||
  ""

const ARTICLES_PATH = configuredArticlesPath || "api/articles"

const ARTICLE_IMAGE_FALLBACKS = [
  "/images/articles/1.jpg",
  "/images/articles/2.jpg",
  "/images/articles/3.jpg",
]

type UnknownRecord = Record<string, unknown>

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function firstString(source: UnknownRecord, keys: string[]): string | null {
  for (const key of keys) {
    const value = source[key]

    if (typeof value === "string" && value.trim()) {
      return value.trim()
    }
  }

  return null
}

function resolveAssetUrl(value: string | null, fallback: string) {
  if (!value) {
    return fallback
  }

  if (value.startsWith("http://") || value.startsWith("https://") || value.startsWith("/images/")) {
    return value
  }

  if (value.startsWith("/")) {
    return API_BASE_URL ? `${API_BASE_URL}${value}` : value
  }

  return API_BASE_URL ? `${API_BASE_URL}/${value.replace(/^\/+/, "")}` : value
}

function extractCollection(payload: unknown, depth = 0): unknown[] {
  if (Array.isArray(payload)) {
    return payload
  }

  if (!isRecord(payload) || depth > 2) {
    return []
  }

  const keys = ["items", "data", "articles", "results", "rows"]

  for (const key of keys) {
    const nested = payload[key]
    const collection = extractCollection(nested, depth + 1)

    if (collection.length > 0) {
      return collection
    }
  }

  return []
}

function normalizeArticleItem(item: unknown, index: number): Article | null {
  if (!isRecord(item)) {
    return null
  }

  const status = firstString(item, ["status"])

  if (status && status !== "published") {
    return null
  }

  const title = firstString(item, ["title", "name"])
  const tag = firstString(item, ["tag", "category", "type"]) ?? "Новости"
  const description = firstString(item, ["description", "descr", "summary", "content"]) ?? ""
  const imageSource = firstString(item, ["image", "image_url", "imageUrl", "photo", "coverImage"])
  const date =
    firstString(item, ["date", "published_at", "publishedAt", "created_at", "createdAt"]) ??
    new Date().toISOString().slice(0, 10)

  if (!title) {
    return null
  }

  const rawId = item.id
  const id =
    typeof rawId === "number"
      ? rawId
      : typeof rawId === "string" && rawId.trim()
        ? rawId.trim()
        : firstString(item, ["slug"]) ?? `article-${index + 1}`

  return {
    id,
    tag,
    title,
    description,
    image: resolveAssetUrl(imageSource, ARTICLE_IMAGE_FALLBACKS[index % ARTICLE_IMAGE_FALLBACKS.length]),
    date,
    isWide: typeof item.isWide === "boolean" ? item.isWide : undefined,
  }
}

async function getBackendArticles(): Promise<Article[] | null> {
  if (!API_BASE_URL) {
    return null
  }

  try {
    const response = await fetch(`${API_BASE_URL}/${ARTICLES_PATH}`, {
      cache: "no-store",
    })

    if (!response.ok) {
      console.warn(`Failed to load articles from backend: ${response.status}`)
      return null
    }

    const payload = (await response.json()) as unknown
    const items = extractCollection(payload)
      .map(normalizeArticleItem)
      .filter((item): item is Article => item !== null)

    return items.length > 0 ? items : null
  } catch (error) {
    console.warn("Failed to load articles from backend:", error)
    return null
  }
}

export async function getArticles(): Promise<Article[]> {
  const backendItems = await getBackendArticles()

  if (backendItems) {
    return backendItems
  }

  const items = await getPublicArticles()

  return items.map(
    ({ slug: _slug, author: _author, category: _category, status: _status, createdAt: _createdAt, updatedAt: _updatedAt, ...article }) =>
      article
  )
}
