const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const BASE_URL = "https://www.googleapis.com/youtube/v3";

export async function getMovieTrailer(movieTitle) {

    const response = await fetch(
        `${BASE_URL}/search?part=snippet&q=${movieTitle} official trailer&type=video&key=${YOUTUBE_API_KEY}`
    );

    const data = await response.json();

    return data.items.length > 0 ? data.items[0] : null;
}