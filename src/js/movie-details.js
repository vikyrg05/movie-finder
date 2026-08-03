import { getMovieDetails } from "./MovieAPI.mjs";

const urlParams = new URLSearchParams(window.location.search);

const movieId = urlParams.get('id');

async function displayMovieDetails() {
    const movie = await getMovieDetails(movieId);

    const movieDetails = document.querySelector('#movie-details');

    movieDetails.innerHTML = `
        <h1>${movie.title}</h1>

        <img
            src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
            alt="${movie.title}"
        >
        
        <p>${movie.overview}</p>

        <p>Release date: ${movie.release_date}</p>
    `;
}

displayMovieDetails();