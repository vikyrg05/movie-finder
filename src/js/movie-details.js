import { getMovieDetails } from "./MovieAPI.mjs";
import { addFavorite, getFavorites, removeFavorite } from "./utils.mjs";
import { getMovieTrailer } from "./YouTubeAPI.mjs";

const urlParams = new URLSearchParams(window.location.search);

const movieId = urlParams.get('id');

async function displayMovieDetails() {
    const movie = await getMovieDetails(movieId);


    const trailer = await getMovieTrailer(movie.title);

    const genres = movie.genres
        .map((genre) => genre.name)
        .join(', ');

    const stars = Math.round(movie.vote_average / 2);
    const starDisplay = '⭐'.repeat(stars) + '✩'.repeat(5 - stars);

    const movieDetails = document.querySelector('#movie-details');

    const favorites = getFavorites();

    const isFavorite = favorites.some(
        (favorite) => favorite.id === movie.id
    );

    movieDetails.innerHTML = `
        <section class="movie-detail-card">

            <img
                src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                alt="${movie.title}"
            >

            <div class="movie-detail-info">

                <h1>${movie.title}</h1>

                <button id="favorite-button">
                    ${isFavorite ? "Remove from Favorites" : "Add to Favorites"} 
                </button>

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

            <div class="trailer-section">
                <h2>Trailer</h2>

                ${
                    trailer
                    ? `
                    <iframe
                        src="https://www.youtube.com/embed/${trailer.id.videoId}"
                        title="Movie trailer"
                        allowfullscreen>
                    </iframe>            
                    `
                    :
                    `
                    <p>Trailer not available.</p>
                    `
                }
            </div>
        </section>
    `;

    const favoriteButton = document.querySelector('#favorite-button');

    favoriteButton.addEventListener('click', () => {
        
        const favorites = getFavorites();

        const exists = favorites.some(
            (favorite) => favorite.id === movie.id
        );

        if (exists) {
            
            removeFavorite(movie.id);

            favoriteButton.textContent = "Add to Favorites";

            alert("Movie removed from favorites!");
        } else {
            
            addFavorite(movie);

            favoriteButton.textContent = "Remove from Favorites";

            alert("Movie added to favorites!");
        }
    });
}

displayMovieDetails();