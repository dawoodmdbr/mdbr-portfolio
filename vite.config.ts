import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      jpg: { quality: 75 },
      jpeg: { quality: 75 },
      png: { quality: 75 },
      webp: { quality: 75 },
      avif: { quality: 60 },
    }),
  ],
  build: {
    target: 'esnext',
    // minify: 'terser' would need terser installed; default oxc minifier works in Vite 6+
    // when deploying to Vercel, the platform runs this build command — no extra config needed
  },
})