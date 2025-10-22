import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
    plugins: [
        react(),
        tailwindcss(),
    ],
    base: command === 'build' ? '/my-3d-portfolio/' : '/',
}))