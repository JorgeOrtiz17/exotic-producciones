import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// Definimos valores por defecto para que no explote en local
const port = Number(process.env.PORT) || 5173;
const basePath = process.env.BASE_PATH || "/";

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    // Eliminamos los plugins de Replit que causan errores en local
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "localhost", // Cambiado de 0.0.0.0 a localhost para evitar problemas de permisos
    allowedHosts: true,
    fs: {
      strict: false, // Cambiado a false para que encuentre las carpetas de assets
    },
  },
  preview: {
    port,
    host: "localhost",
    allowedHosts: true,
  },
});