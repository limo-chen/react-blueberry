import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Uncos from 'unocss/vite'
import { viteMockServe } from 'vite-plugin-mock'
import { svgsprites } from './vite_plugins/svgsprites'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  base: "/",
  define: {
    isDev: command === 'serve'
  },
  plugins: [
    Uncos(),
    react(),  
    viteMockServe(),
    svgsprites({ noOptimizeList: ['logo', 'chart', 'category', 'export', 'noty'] })
  ],
}))
