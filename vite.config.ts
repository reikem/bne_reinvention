import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


export default defineConfig({
  base: "/bne-redesign/",
  build: { outDir: "docs" },
  plugins: [react()],
  resolve:{
    alias:{
      "@":path.resolve(__dirname, './src'),
    }
  },
})
