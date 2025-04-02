import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: true, 
  //   port: 3000, 
  //   strictPort: true, 
  //   cors: true,
  //   allowedHosts:["91f1-2401-4900-1c65-4f4a-b8ef-64f3-bc89-bcfc.ngrok-free.app"],
  // }
})

