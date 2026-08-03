export function getFavorites() {
    const favorites = localStorage.getItem('favorites');

    return favorites ? JSON.parse(favorites) : [];
}

export function saveFavorites(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function addFavorite(movie) {
    const favorites = getFavorites();

    const exists = favorites.some((favorite) => favorite.id === movie.id);

    if (!exists) {
        favorites.push(movie);
        saveFavorites(favorites);
    }
}

export function removeFavorite(movieId) {
    const favorites = getFavorites().filter(
        (movie) => movie.id !== movieId
    );

    saveFavorites(favorites);
}