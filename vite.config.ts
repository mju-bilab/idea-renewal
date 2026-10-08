import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Multi-page build: each sub-page keeps the original site's URL (about.html, …) so existing links survive.
const pages = ['index', 'about', 'people', 'programs', 'career', 'news']

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the same build works at the site root or under a preview sub-path.
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map((p) => [p, resolve(import.meta.dirname, `${p}.html`)])),
    },
  },
})
