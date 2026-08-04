import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    base: '/movie-finder/',

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                favorites: resolve(__dirname, 'favorites.html'),
                movieDetails: resolve(__dirname, 'movie-details.html'),
                searchResults: resolve(__dirname, 'search-results.html'),
            },
        },
    },
});