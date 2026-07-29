import './css/styles.css';
import { getPopularMovies, searchMovies } from './js/MovieAPI.mjs';
import { renderMovies } from './js/MovieList.mjs';

document.querySelector('#app').innerHTML = `
    <header class="site-header">
        <div class="logo">
            <h1>Movie Finder</h1>
        </div>

        <nav class="main-nav">
            <button class="menu-toggle" aria-label="Open navigation menu">
                ☰
            </button>

            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="src/pages/favorites.html">Favorites</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="search-section">
            <h2>Find your next movie</h2>

            <form id="search-form">
                <label for="movie-search">Search movies</label>

                <input
                    id="movie-search"
                    type="search"
                    placeholder="Search movies..."
                >

                <button type="submit">Search</button>
            </form>
        </section>

        <section class="popular-section">
            <h2>Popular Movies</h2>

            <div id="movie-list" class="movie-grid">
                <!-- Movies will be displayed here -->
            </div>
        </section>
    </main>

    <footer class="site-footer">
        <p>&copy; 2026 Movie Finder. All rights reserved.</p>
    </footer>
`;

getPopularMovies().then((data) => {
    renderMovies(data.results);
});

const searchForm = document.querySelector('#search-form');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const searchInput = document.querySelector('#movie-search');
    const query = searchInput.value;

    const data = await searchMovies(query);

    renderMovies(data.results);

});

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
