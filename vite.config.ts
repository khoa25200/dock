import { defineConfig } from 'vite'
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
      public: `${path.resolve(__dirname, "./public/")}`,
      pages: path.resolve(__dirname, "./src/pages"),
      configs: `${path.resolve(__dirname, "./src/configs")}`,
      constants: `${path.resolve(__dirname, "./src/configs/constants")}`,
      libs: `${path.resolve(__dirname, "./src/libs")}`,
    },
  }
})
