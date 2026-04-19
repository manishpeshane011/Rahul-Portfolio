import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Rahul-Portfolio/',  // 🔥 MUST MATCH repo name exactly
})