import type { CatalogItem } from "@/types/catalog"

const API_BASE = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000/api"

export async function getControllerById(id: string | number): Promise<CatalogItem | null> {
  try {
    const res = await fetch(`${API_BASE}/controllers/${id}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      console.error(`Failed to fetch controller ${id}:`, res.status)
      return null
    }

    const data = await res.json()
    return normalizeController(data)
  } catch (error) {
    console.error(`Error fetching controller ${id}:`, error)
    return null
  }
}

export async function getAllControllers(limit = 100, offset = 0): Promise<{
  data: CatalogItem[]
  total: number
}> {
  try {
    const res = await fetch(`${API_BASE}/controllers?limit=${limit}&offset=${offset}`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      console.error("Failed to fetch controllers:", res.status)
      return { data: [], total: 0 }
    }

    const response = await res.json()
    const data = Array.isArray(response.data) ? response.data : [response.data]
    
    return {
      data: data.map(normalizeController).filter((item): item is CatalogItem => item !== null),
      total: response.total || data.length,
    }
  } catch (error) {
    console.error("Error fetching controllers:", error)
    return { data: [], total: 0 }
  }
}

export async function createController(
  data: Partial<CatalogItem>,
  token: string
): Promise<CatalogItem | null> {
  try {
    const res = await fetch(`${API_BASE}/controllers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      throw new Error(`Failed to create controller: ${res.statusText}`)
    }

    const response = await res.json()
    return normalizeController(response)
  } catch (error) {
    console.error("Error creating controller:", error)
    throw error
  }
}

export async function updateController(
  id: string | number,
  data: Partial<CatalogItem>,
  token: string
): Promise<CatalogItem | null> {
  try {
    const res = await fetch(`${API_BASE}/controllers/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      throw new Error(`Failed to update controller: ${res.statusText}`)
    }

    const response = await res.json()
    return normalizeController(response)
  } catch (error) {
    console.error(`Error updating controller ${id}:`, error)
    throw error
  }
}

export async function deleteController(id: string | number, token: string): Promise<boolean> {
  try {
    const res = await fetch(`${API_BASE}/controllers/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!res.ok) {
      throw new Error(`Failed to delete controller: ${res.statusText}`)
    }

    return true
  } catch (error) {
    console.error(`Error deleting controller ${id}:`, error)
    throw error
  }
}

function normalizeController(item: unknown): CatalogItem | null {
  if (!item || typeof item !== "object") {
    return null
  }

  const record = item as Record<string, unknown>

  const cap = getString(record, ["cap", "title", "name", "model"])
  const descr = getString(record, ["descr", "description", "summary", "content"]) ?? ""
  const imageUrl = getString(record, ["image", "image_url", "imageUrl", "src"]) ?? "/images/products/1.png"
  const link = getString(record, ["link", "href", "url"]) ?? "#"
  const specifications = Array.isArray(record.specifications) ? record.specifications : []

  if (!cap) {
    return null
  }

  return {
    cap,
    descr,
    link,
    image: {
      src: imageUrl,
      width: 197,
      height: 266,
    },
    specifications: specifications as Array<{
      name: string
      unit: string
      value: string
    }>,
  }
}

function getString(obj: Record<string, unknown>, keys: string[]): string | null {
  for (const key of keys) {
    const value = obj[key]
    if (typeof value === "string" && value.trim()) {
      return value.trim()
    }
  }
  return null
}
