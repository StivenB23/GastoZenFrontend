import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    port: 3000,
    host: "0.0.0.0",
  },
  plugins: [react()],
  test: {
    globals: true,       // Permite usar los métodos globales de Vitest como `describe`, `it`, `expect`, etc.
    environment: 'jsdom', // Usa jsdom para simular un navegador en las pruebas
  }
})
