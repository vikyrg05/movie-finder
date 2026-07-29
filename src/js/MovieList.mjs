export function renderMovies(movies) {
    const movieList = document.querySelector('#movie-list');

    movieList.innerHTML = movies.map((movie) => `
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
    `).join('');
}