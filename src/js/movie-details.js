import { getMovieDetails } from "./MovieAPI.mjs";

const urlParams = new URLSearchParams(window.location.search);

const movieId = urlParams.get('id');

async function displayMovieDetails() {
    const movie = await getMovieDetails(movieId);

    const genres = movie.genres
        .map((genre) => genre.name)
        .join(', ');

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

                <p>Rating: ${movie.vote_average}/10</p>

                <p>Genres: ${genres}</p>

                <p>Runtime: ${movie.runtime} minutes</p>

                <p>Language: ${movie.original_language}</p>

                <p>${movie.overview}</p>

                <p>Release date: ${movie.release_date}</p>
            </div>
        </section>
    `;
}

displayMovieDetails();