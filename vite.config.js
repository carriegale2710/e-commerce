import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, //- get rid of imports in every file
    environment: "jsdom",
    setupFiles: "./config/setup.js",
  },
});
