import"./styles-44WQKs1o.js";import{n as e}from"./MovieAPI-b16TYHji.js";import{n as t,r as n,t as r}from"./utils-BKqcSTl2.js";var i=`AIzaSyCJryAE3LLaJvwvBeYEPsYuENRimS6gpGc`,a=`https://www.googleapis.com/youtube/v3`;async function o(e){let t=await(await fetch(`${a}/search?part=snippet&q=${e} official trailer&type=video&key=${i}`)).json();return t.items?t.items.length>0?t.items[0]:null:(console.error(`Youtube API error:`,t.error.message,t.error.errors),null)}var s=new URLSearchParams(window.location.search).get(`id`);async function c(){let i=await e(s),a=null;try{a=await o(i.title)}catch(e){console.error(`Trailer error:`,e)}let c=i.genres.map(e=>e.name).join(`, `),l=Math.round(i.vote_average/2),u=`⭐`.repeat(l)+`✩`.repeat(5-l),d=document.querySelector(`#movie-details`),f=t().some(e=>e.id===i.id);d.innerHTML=`
        <section class="movie-detail-card">

            <img
                src="https://image.tmdb.org/t/p/w500${i.poster_path}"
                alt="${i.title}"
            >

            <div class="movie-detail-info">

                <h1>${i.title}</h1>

                <button id="favorite-button">
                    ${f?`Remove from Favorites`:`Add to Favorites`} 
                </button>

                <p>
                    <strong>Rating:</strong>
                    <span class="rating-stars">${u}</span>
                    ${i.vote_average.toFixed(1)}/10
                </p>

                <p><strong>Genres:</strong> ${c}</p>

                <p><strong>Runtime:</strong> ${i.runtime} minutes</p>

                <p><strong>Language:</strong> ${i.original_language}</p>

                <p class="movie-description">${i.overview}</p>

                <p><strong>Release date:</strong> ${i.release_date}</p>
            </div>

            <div class="trailer-section">
                <h2>Trailer</h2>

                ${a?`
                    <iframe
                        src="https://www.youtube.com/embed/${a.id.videoId}"
                        title="Movie trailer"
                        allowfullscreen>
                    </iframe>            
                    `:`
                    <p>Trailer not available.</p>
                    `}
            </div>
        </section>
    `;let p=document.querySelector(`#favorite-button`);p.addEventListener(`click`,()=>{t().some(e=>e.id===i.id)?(n(i.id),p.textContent=`Add to Favorites`,alert(`Movie removed from favorites!`)):(r(i),p.textContent=`Remove from Favorites`,alert(`Movie added to favorites!`))})}c();