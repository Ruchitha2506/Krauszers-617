import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/krauszers-617/',  // 👈 add this line
})

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      fs: 'browserify-fs'
    }
  }
});
