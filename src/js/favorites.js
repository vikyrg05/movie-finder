import { getFavorites, removeFavorite } from "./utils.mjs";

const favorites = getFavorites();

const favoritesList = document.querySelector('#favorites-list');

if (favorites.length === 0) {
    favoritesList.innerHTML = `
        <p>You haven't added any favorite movies yet.</p>
    `;
} else {
    favoritesList.innerHTML = favorites.map((movie) => `
        <article class="movie-card">
            <a href="movie-details.html?id=${movie.id}" class="movie-link">
                <article class="movie-card">
                    <img
                        src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                        alt="${movie.title}"
                    >

                    <div class="movie-info">
                        <h3>${movie.title}</h3>
                        <p>${movie.release_date}</p>
                    </div>
                </article>
            </a>

            <button
                class="remove-button"
                data-id="${movie.id}">
                Remove
            </button>
        </article>
    `).join("");
}

const removeButtons = document.querySelectorAll('.remove-button');

removeButtons.forEach((button) => {
    button.addEventListener('click', () => {

        const movieId = Number(button.dataset.id);

        removeFavorite(movieId);

        location.reload();
    });
});

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
