import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import pkg from "./package.json";

const version = pkg.version;

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
  },
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "Chatbot",
      formats: ["es"],
      fileName: () => `chatbot-${version}.js`,
    },
    minify: "terser", // MINIFY
    sourcemap: false,
    terserOptions: {
      format: {
        comments: false,
      },
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      external: [],
    },
  },
});
