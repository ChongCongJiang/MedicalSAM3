import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is crucial for GitHub Pages. 
  // It ensures assets are linked relatively (e.g. "./assets/...") 
  // so the app works on https://username.github.io/repo-name/
  base: './', 
})
