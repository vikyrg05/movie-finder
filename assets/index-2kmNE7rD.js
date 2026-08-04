(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`643589bff02971bf419e597b64fe14ff`,t=`https://api.themoviedb.org/3`;async function n(){return await(await fetch(`${t}/movie/popular?api_key=${e}`)).json()}async function r(n){return await(await fetch(`${t}/search/movie?api_key=${e}&query=${n}`)).json()}async function i(){return(await(await fetch(`${t}/genre/movie/list?api_key=${e}`)).json()).genres}async function a(n){return await(await fetch(`${t}/discover/movie?api_key=${e}&with_genres=${n}`)).json()}function o(e){let t=document.querySelector(`#movie-list`);t.innerHTML=e.map(e=>`
        <a href="src/pages/movie-details.html?id=${e.id}" class="movie-link">
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
`,n().then(e=>{o(e.results)});var s=document.querySelector(`#search-form`),c=document.querySelector(`#genre-filter`);async function l(){(await i()).forEach(e=>{let t=document.createElement(`option`);t.value=e.id,t.textContent=e.name,c.appendChild(t)})}l(),c.addEventListener(`change`,async()=>{let e=c.value;if(e===``){o((await n()).results);return}o((await a(e)).results)}),s.addEventListener(`submit`,async e=>{e.preventDefault();let t=document.querySelector(`#movie-search`).value;o((await r(t)).results)});var u=document.querySelector(`.menu-toggle`),d=document.querySelector(`.nav-links`);u.addEventListener(`click`,()=>{d.classList.toggle(`show`)});