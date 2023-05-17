import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Uncos from 'unocss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Uncos(),
    react(),
  ],
})
