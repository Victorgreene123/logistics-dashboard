import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

  ]
  ,
  server: {
    host: true, // This makes the server accessible on the local network
    port: 5173, // You can change the port if needed
  },
})
