import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.glb"],
  server: {
    watch: {
      ignored: ["**/public/frames/**"],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (
            id.includes("node_modules/three") ||
            id.includes("node_modules/meshline")
          ) {
            return "three";
          }
          if (
            id.includes("node_modules/@react-three") ||
            id.includes("node_modules/@dimforge")
          ) {
            return "react-three";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
