import './css/styles.css';
import { getPopularMovies, searchMovies, getGenres, getMoviesByGenre } from './js/MovieAPI.mjs';
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
                <li><a href="favorites.html">Favorites</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="search-section">
            <h2>Find your next movie</h2>

            <div class="search-controls">
                <form id="search-form">
                    <label for="movie-search">Search movies</label>

                    <input
                        id="movie-search"
                        type="search"
                        placeholder="Search movies..."
                    >

                    <button type="submit">Search</button>
                </form>
            
                <button id="random-movie-btn" type="button">
                    Surprise Me!
                </button>

                <div class="genre-control">
                    <label for="genre-filter">
                        Filter by genre:
                    </label>

                    <select id="genre-filter">
                        <option value="">All Genres</option>
                    </select>
                </div>
            </div>
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

const genreFilter = document.querySelector('#genre-filter');

const randomMovieButton = document.querySelector('#random-movie-btn');

async function loadGenres() {
    const genres = await getGenres();

    genres.forEach((genre) => {
        const option = document.createElement('option');

        option.value = genre.id;
        option.textContent = genre.name;

        genreFilter.appendChild(option);
    });
}

loadGenres();

randomMovieButton.addEventListener('click', async () => {
    const data = await getPopularMovies();

    const movies = data.results;

    if (movies.length === 0) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * movies.length);
    const randomMovie = movies[randomIndex];

    window.location.href = `movie-details.html?id=${randomMovie.id}`;
});

genreFilter.addEventListener('change', async () => {
    const genreId = genreFilter.value;

    if (genreId === "") {
        const data = await getPopularMovies();

        renderMovies(data.results);
        return;
    }

    const data = await getMoviesByGenre(genreId);

    renderMovies(data.results);
});

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
