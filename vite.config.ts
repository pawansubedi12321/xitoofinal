import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Expose the server to the local network
    port: 5173, // You can change this port if needed
  },
})
