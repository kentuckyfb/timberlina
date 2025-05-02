import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: './', // Use relative paths
  publicDir: 'public', // Explicitly set public directory
  
  // Add build options for better asset handling
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096, // Files smaller than this (in bytes) will be inlined as base64
  },
  
  server: {
    host: "::",
    port: 8080,
  },
  
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Add an alias for public directory
      "public": path.resolve(__dirname, "./public")
    },
  },
}));