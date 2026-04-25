import { type NextConfig } from 'next'
import type { RemotePattern } from 'next/dist/shared/lib/image-config'

function toRemotePattern(url: string): RemotePattern | null {
  try {
    const parsedUrl = new URL(url)
    const protocol =
      parsedUrl.protocol === "https:"
        ? "https"
        : parsedUrl.protocol === "http:"
          ? "http"
          : null

    if (!protocol) {
      return null
    }

    return {
      protocol,
      hostname: parsedUrl.hostname,
      port: parsedUrl.port,
      pathname: "/**",
    }
  } catch {
    return null
  }
}

const configuredApiBaseUrl =
  process.env.API_BASE_URL ?? process.env.NEXT_PUBLIC_API_BASE_URL

const configuredApiRemotePattern = configuredApiBaseUrl
  ? toRemotePattern(configuredApiBaseUrl)
  : null

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [85, 95],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '4000',
        pathname: '/**',
      },
      ...(configuredApiRemotePattern ? [configuredApiRemotePattern] : []),
    ],
  },
}

export default nextConfig
