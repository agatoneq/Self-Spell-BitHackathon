import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import url from 'url'
import path from 'path';

const __filename = url.fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'src/components'),
            '@utils': path.resolve(__dirname, 'src/utils'),
        },
    },
  },
)