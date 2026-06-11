import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/pourcast/',
  server: {
    watch: {
      // Browser-automation artifacts; watching them causes an HMR feedback loop
      ignored: ['**/.playwright-mcp/**'],
    },
  },
})
