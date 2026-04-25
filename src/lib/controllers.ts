import "server-only"

import type { CatalogItem } from "@/types/catalog"

import { getPublicControllers } from "@/lib/admin-store"

const API_BASE_URL =
  process.env.API_BASE_URL?.trim().replace(/\/+$/, "") ??
  process.env.NEXT_PUBLIC_API_BASE_URL?.trim().replace(/\/+$/, "") ??
  ""

const configuredControllersPath =
  process.env.API_CONTROLLERS_PATH?.trim().replace(/^\/+|\/+$/g, "") ||
  process.env.NEXT_PUBLIC_API_CONTROLLERS_PATH?.trim().replace(/^\/+|\/+$/g, "") ||
  ""

const CONTROLLERS_PATH = configuredControllersPath || "api/admin/controllers"

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
  if (!API_BASE_URL) {
    return null
  }

  try {
    const response = await fetch(`${API_BASE_URL}/${CONTROLLERS_PATH}`, {
      cache: "no-store",
    })

    if (!response.ok) {
      console.warn(`Failed to load controllers from backend: ${response.status}`)
      return null
    }

    const payload = (await response.json()) as unknown
    const items = extractCollection(payload)
      .map(normalizeControllerItem)
      .filter((item): item is CatalogItem => item !== null)

    return items.length > 0 ? items : null
  } catch (error) {
    console.warn("Failed to load controllers from backend:", error)
    return null
  }
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
