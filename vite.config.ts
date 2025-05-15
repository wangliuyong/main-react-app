import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // // 路径别名
    // alias: {
    //   "@": path.resolve(__dirnameNew, "./src"),
    // },
  },
});
