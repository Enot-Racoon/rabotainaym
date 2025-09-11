import path from 'path'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      'next/image': path.resolve(__dirname, '.ladle/components/image.tsx'),
      'next/link': path.resolve(__dirname, '.ladle/components/link.tsx'),
    },
  },
  define: {
    'process.env': loadEnv(mode, process.cwd(), 'NEXT_PUBLIC_'),
  },
}))
