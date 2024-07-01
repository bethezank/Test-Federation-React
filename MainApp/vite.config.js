import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import moduleFederation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    moduleFederation({
      name: 'MainApp', 
      remotes: {
        // เรียกใช้จาก url
        remoteApp: 'http://localhost:5001/App/ChildApp1/assets/childApp1.js',

        // เรียกใช้จาก folder public
        // remoteApp: 'http://localhost:5000/App/ChildApp1/assets/childApp1.js',
      },
      shared: ['react','react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
