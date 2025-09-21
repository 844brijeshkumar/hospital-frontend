import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    proxy: {
      '/api/medlineplus': {
        target: 'https://connect.medlineplus.gov',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/medlineplus/, ''),
        secure: false,
        timeout: 10000,
        followRedirects: true,
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})

