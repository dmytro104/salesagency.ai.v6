import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/salesagency.ai.v6/', // 👈 Add this for GitHub Pages (change to match your repo name)
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true,
  }
});