import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import moduleFederation from "@originjs/vite-plugin-federation";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    moduleFederation({

      // รับ Host app มาใช้งาน
      remotes: {
        HostApp: 'http://localhost:5001/assets/HostApp.js',
      },

      // แชร์ออกไปให้ Host
      name: 'Rework',
      filename: 'Rework.js',
      exposes: {
        // ส่งออกไปทั้ง app
        './Rework': './src/App',
        // ส่งออก menu
        './ReworkMenu': './src/layout/menu.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom']
      
    }),

  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },

  // ตั้งค่าที่ Router ของ Host ให้ถูกต้องด้วย
  base: "/App/Rework",
});
