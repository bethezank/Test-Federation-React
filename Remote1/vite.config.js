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
      name: 'Remote1',
      filename: 'Remote1.js',
      exposes: {
        // สั่ง shear ออกไปทั้ง app
        './Remote1': './src/App',
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
  base: "/App/Remote1",
});
