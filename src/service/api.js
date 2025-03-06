const API_KEY = "dcea7a760eecf41e816c7edf999c2256";
const BASE_URL = "https://api.themoviedb.org/3";

export const getMovies = async()=>{
    const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
};

export const searchMovies = async (query) =>
{
    const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await res.json();
    return data.results;
}