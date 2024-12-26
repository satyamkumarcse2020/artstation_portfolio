import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/artstation_portfolio/',
    build: {
    outDir: 'build',  // This will change the output directory to 'build'
  },
})
