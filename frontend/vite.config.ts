import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/binders': {
        target: 'http://localhost:3001/',
        changeOrigin: true,
        secure: false
      },
      '/listener': {
        target: 'http://localhost:3001/',
        changeOrigin: true, 
        secure: false
      }
    }

  },
})
