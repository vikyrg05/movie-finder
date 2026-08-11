import { defineConfig } from 'vite';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: '/movie-finder/',

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                favorites: resolve(__dirname, 'favorites.html'),
                movieDetails: resolve(__dirname, 'movie-details.html'),
            },
        },
    },
});