import "server-only"

import { NextRequest, NextResponse } from "next/server"

const ADMIN_BACKEND_BASE_URL =
  process.env.API_BASE_URL?.trim().replace(/\/+$/, "") ??
  process.env.NEXT_PUBLIC_API_BASE_URL?.trim().replace(/\/+$/, "") ??
  ""

const HOP_BY_HOP_HEADERS = new Set([
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailers",
  "transfer-encoding",
  "upgrade",
])

function joinPaths(basePath: string, requestPath: string) {
  const normalizedBase = basePath.replace(/\/+$/, "")
  const normalizedRequest = requestPath.replace(/^\/+/, "")

  if (!normalizedBase) {
    return `/${normalizedRequest}`
  }

  return `${normalizedBase}/${normalizedRequest}`.replace(/\/{2,}/g, "/")
}

function sanitizeSetCookie(value: string) {
  return value.replace(/;\s*Domain=[^;]+/i, "")
}

function appendForwardedHeaders(source: Headers, target: NextResponse) {
  const headersWithCookies = source as Headers & { getSetCookie?: () => string[] }
  const setCookies =
    typeof headersWithCookies.getSetCookie === "function"
      ? headersWithCookies.getSetCookie()
      : source.get("set-cookie")
        ? [source.get("set-cookie") as string]
        : []

  for (const cookie of setCookies) {
    target.headers.append("set-cookie", sanitizeSetCookie(cookie))
  }

  source.forEach((value, key) => {
    const lowerKey = key.toLowerCase()

    if (
      lowerKey === "set-cookie" ||
      lowerKey === "content-encoding" ||
      lowerKey === "content-length" ||
      HOP_BY_HOP_HEADERS.has(lowerKey)
    ) {
      return
    }

    target.headers.append(key, value)
  })
}

export function getAdminBackendBaseUrl() {
  return ADMIN_BACKEND_BASE_URL
}

export function shouldProxyAdminBackend() {
  return Boolean(ADMIN_BACKEND_BASE_URL)
}

function buildTargetUrl(request: NextRequest) {
  const baseUrl = new URL(ADMIN_BACKEND_BASE_URL)
  baseUrl.pathname = joinPaths(baseUrl.pathname, request.nextUrl.pathname)
  baseUrl.search = request.nextUrl.search
  return baseUrl
}

export async function proxyAdminRequest(request: NextRequest) {
  if (!shouldProxyAdminBackend()) {
    throw new Error("Admin backend proxy is not configured.")
  }

  const targetUrl = buildTargetUrl(request)
  const headers = new Headers(request.headers)

  headers.delete("host")
  headers.delete("content-length")
  headers.delete("origin")
  headers.delete("referer")
  headers.delete("sec-fetch-site")
  headers.delete("sec-fetch-mode")
  headers.delete("sec-fetch-dest")
  headers.delete("sec-fetch-user")

  const init: RequestInit & { duplex?: "half" } = {
    method: request.method,
    headers,
    cache: "no-store",
    redirect: "manual",
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    init.body = request.body
    init.duplex = "half"
  }

  try {
    const response = await fetch(targetUrl, init)
    const nextResponse = new NextResponse(response.body, { status: response.status })

    appendForwardedHeaders(response.headers, nextResponse)
    return nextResponse
  } catch (error) {
    console.error(
      `[admin-backend] Failed to proxy ${request.method} ${request.nextUrl.pathname}:`,
      error
    )

    return NextResponse.json(
      { error: "Не удалось подключиться к backend." },
      { status: 503 }
    )
  }
}
