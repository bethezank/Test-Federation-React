import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import moduleFederation from "@originjs/vite-plugin-federation";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    moduleFederation({
      name: 'ChildApp1',
      filename: 'childApp1.js',
      exposes: {
        './ChildApp1': './src/App',
      },
      shared: ['react','react-dom']
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },

  // ต้องตั้งค่าให้เหมือนกับใน ifreame ของ MainApp
  base: "/App/ChildApp1",
});
