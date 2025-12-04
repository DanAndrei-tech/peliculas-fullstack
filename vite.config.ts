import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
  build: {
    outDir: "dist", // generar directamente en dist
    emptyOutDir: true,
  },
});
