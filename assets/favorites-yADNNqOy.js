import"./styles-44WQKs1o.js";import{n as e,r as t}from"./utils-BKqcSTl2.js";var n=e(),r=document.querySelector(`#favorites-list`);n.length===0?r.innerHTML=`
        <p>You haven't added any favorite movies yet.</p>
    `:r.innerHTML=n.map(e=>`
        <article class="movie-card">
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

            <button
                class="remove-button"
                data-id="${e.id}">
                Remove
            </button>
        </article>
    `).join(``),document.querySelectorAll(`.remove-button`).forEach(e=>{e.addEventListener(`click`,()=>{t(Number(e.dataset.id)),location.reload()})}),console.log(n);