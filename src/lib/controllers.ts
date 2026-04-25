import "server-only"

import type { CatalogItem } from "@/types/catalog"

import { getPublicControllers } from "@/lib/admin-store"
import { fetchBackendCollection } from "@/lib/backend-fetch"
import { buildBackendUrl, getBackendBaseUrl } from "@/lib/backend-url"

const configuredControllersPath =
  process.env.API_CONTROLLERS_PATH?.trim().replace(/^\/+|\/+$/g, "") ||
  process.env.NEXT_PUBLIC_API_CONTROLLERS_PATH?.trim().replace(/^\/+|\/+$/g, "") ||
  ""

const CONTROLLERS_PATH = configuredControllersPath || "api/admin/controllers"
const CONTROLLERS_PATH_CANDIDATES = [
  CONTROLLERS_PATH,
  CONTROLLERS_PATH.startsWith("api/admin/")
    ? CONTROLLERS_PATH.replace(/^api\/admin\//, "api/")
    : "api/controllers",
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

function resolveImageSource(value: string | null) {
  if (!value) {
    return "/images/products/1.png"
  }

  if (value.startsWith("http://") || value.startsWith("https://") || value.startsWith("/images/")) {
    return value
  }

  if (value.startsWith("/")) {
    const backendBaseUrl = getBackendBaseUrl()
    return backendBaseUrl ? `${backendBaseUrl}${value}` : value
  }

  return buildBackendUrl(value)
}

function extractCollection(payload: unknown, depth = 0): unknown[] {
  if (Array.isArray(payload)) {
    return payload
  }

  if (!isRecord(payload) || depth > 2) {
    return []
  }

  const keys = ["items", "data", "controllers", "products", "results", "rows"]

  for (const key of keys) {
    const nested = payload[key]
    const collection = extractCollection(nested, depth + 1)

    if (collection.length > 0) {
      return collection
    }
  }

  return []
}

function normalizeControllerItem(item: unknown, index: number): CatalogItem | null {
  if (!isRecord(item)) {
    return null
  }

  const title = firstString(item, ["cap", "title", "name", "model"])
  const description = firstString(item, ["descr", "description", "summary", "content"]) ?? ""
  const imageSource = firstString(item, ["image_url", "image", "imageUrl"])
  const link = firstString(item, ["link", "href", "url"]) ?? "#"

  if (!title) {
    return null
  }

  const fallbackImages = ["/images/products/1.png", "/images/products/2.png", "/images/products/3.png"]

  return {
    image: {
      src: resolveImageSource(imageSource) || fallbackImages[index % fallbackImages.length],
      width: 197,
      height: 266,
    },
    cap: title,
    descr: description,
    link,
  }
}

async function getBackendControllers(): Promise<CatalogItem[] | null> {
  return fetchBackendCollection<CatalogItem>({
    label: "controllers",
    paths: CONTROLLERS_PATH_CANDIDATES,
    extract: extractCollection,
    normalize: normalizeControllerItem,
  })
}

export async function getControllerCatalogItems(): Promise<CatalogItem[]> {
  const backendItems = await getBackendControllers()

  if (backendItems) {
    return backendItems
  }

  const items = await getPublicControllers()

  return items.map(
    ({ id: _id, status: _status, createdAt: _createdAt, updatedAt: _updatedAt, ...item }) => item
  )
}
