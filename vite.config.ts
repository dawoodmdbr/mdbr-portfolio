import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    // minify: 'terser' would need terser installed; default oxc minifier works in Vite 6+
    // when deploying to Vercel, the platform runs this build command — no extra config needed
  },
})
