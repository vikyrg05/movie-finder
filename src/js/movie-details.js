import { getMovieDetails } from "./MovieAPI.mjs";

const urlParams = new URLSearchParams(window.location.search);

const movieId = urlParams.get('id');

async function displayMovieDetails() {
    const movie = await getMovieDetails(movieId);

    const genres = movie.genres
        .map((genre) => genre.name)
        .join(', ');

    const stars = Math.round(movie.vote_average / 2);
    const starDisplay = '⭐'.repeat(stars) + '✩'.repeat(5 - stars);

    console.log(movie);

    const movieDetails = document.querySelector('#movie-details');

    movieDetails.innerHTML = `
        <section class="movie-detail-card">

            <img
                src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                alt="${movie.title}"
            >

            <div class="movie-detail-info">

                <h1>${movie.title}</h1>

                <p>
                    <strong>Rating:</strong>
                    <span class="rating-stars">${starDisplay}</span>
                    ${movie.vote_average.toFixed(1)}/10
                </p>

                <p><strong>Genres:</strong> ${genres}</p>

                <p><strong>Runtime:</strong> ${movie.runtime} minutes</p>

                <p><strong>Language:</strong> ${movie.original_language}</p>

                <p class="movie-description">${movie.overview}</p>

                <p><strong>Release date:</strong> ${movie.release_date}</p>
            </div>
        </section>
    `;
}

displayMovieDetails();