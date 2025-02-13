import { resolve } from 'node:path'

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: '@tato30/vue-pdf',
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'vue',
        'pdfjs-dist',
        'pdfjs-dist/web/pdf_viewer.css',
      ],
      output: {
        exports: 'named',
        globals: {
          'vue': 'vue',
          'pdfjs-dist': 'PDFJS',
        },
      },
    },
  },
  plugins: [
    vue(),
  ],
})
