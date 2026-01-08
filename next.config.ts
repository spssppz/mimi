import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',

  images: {
    unoptimized: true
  },

  // Убираем весь кастомный webpack
}

export default nextConfig
