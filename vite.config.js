// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // or vue or svelte, etc.

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase from default 500kB to 1000kB

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'vendor-react'; // Or vue, svelte, etc.
            if (id.includes('lodash')) return 'vendor-lodash'; // Example
            return 'vendor'; // Default vendor chunk
          }
        }
      }
    }
  }
});
