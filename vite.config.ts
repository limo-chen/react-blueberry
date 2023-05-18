import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Uncos from 'unocss/vite'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  define: {
    isDev: command === 'serve'
  },
  plugins: [
    Uncos(),
    react(),  
    viteMockServe()
  ],
}))
