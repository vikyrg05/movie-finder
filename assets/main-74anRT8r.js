import"./styles-44WQKs1o.js";import{a as e,i as t,r as n,t as r}from"./MovieAPI-b16TYHji.js";function i(e){let t=document.querySelector(`#movie-list`);t.innerHTML=e.map(e=>`
        <a href="movie-details.html?id=${e.id}" class="movie-link">
            <article class="movie-card">
                <img
                    src="https://image.tmdb.org/t/p/w500${e.poster_path}" 
                    alt="${e.title}"
                >

                <div class="movie-info">
                    <h3>${e.title}</h3>
                    <p>${e.release_date}</p>
                </div>
            </article>
        </a>
    `).join(``)}document.querySelector(`#app`).innerHTML=`
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

            <label for="genre-filter">
                Filter by genre:
            </label>

            <select id="genre-filter">
                <option value="">All Genres</option>
            </select>

            <div id="movie-list" class="movie-grid">
                <!-- Movies will be displayed here -->
            </div>
        </section>
    </main>

    <footer class="site-footer">
        <p>&copy; 2026 Movie Finder. All rights reserved.</p>
    </footer>
`,t().then(e=>{i(e.results)});var a=document.querySelector(`#search-form`),o=document.querySelector(`#genre-filter`);async function s(){(await r()).forEach(e=>{let t=document.createElement(`option`);t.value=e.id,t.textContent=e.name,o.appendChild(t)})}s(),o.addEventListener(`change`,async()=>{let e=o.value;if(e===``){i((await t()).results);return}i((await n(e)).results)}),a.addEventListener(`submit`,async t=>{t.preventDefault();let n=document.querySelector(`#movie-search`).value;i((await e(n)).results)});var c=document.querySelector(`.menu-toggle`),l=document.querySelector(`.nav-links`);c.addEventListener(`click`,()=>{l.classList.toggle(`show`)});