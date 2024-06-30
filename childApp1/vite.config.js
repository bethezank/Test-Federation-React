import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    
    plugins: [react()],

    // ต้องตั้งค่าให้เหมือนกับใน ifreame ของ MainApp
    base: "/App/ChildApp1"
})