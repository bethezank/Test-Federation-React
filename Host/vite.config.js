import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import moduleFederation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    moduleFederation({
      // แชร์ไฟล์ไปให้ remote ใช้งานร่วมกัน
      name: "Host App Shared Components",
      filename: "HostApp.js",
      exposes: {
        // ชื่อ component ที่ให้ remote app เรียกใช้ : path ของไฟล์
        "./useAuth": "./src/hooks/useAuth",
        "./bethezank": "./src/share/Bethezank",
      },

      // เอา Remote App ใส่ใน Folder public
      remotes: {
        Remote1: "http://localhost:5001/remotes/Remote1/assets/Remote1.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
