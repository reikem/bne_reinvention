import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/bne_reinvention/",   // ← EXACTO al path que usas en GitHub Pages
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});