import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages serves this repo as static files. index.html on disk points at
// the last production bundle. Dev and build both rewrite that back to the
// source entry before Vite compiles it.
function sourceEntry() {
  return {
    name: 'source-entry',
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return html
          .replace(
            /\s*<link rel="stylesheet"[^>]*href="\/assets\/[^"]+\.css"[^>]*>/g,
            '',
          )
          .replace(
            /<script type="module"[^>]*src="[^"]+"[^>]*><\/script>/,
            '<script type="module" src="/src/main.jsx"></script>',
          )
      },
    },
  }
}

export default defineConfig({
  plugins: [sourceEntry(), react()],
})
