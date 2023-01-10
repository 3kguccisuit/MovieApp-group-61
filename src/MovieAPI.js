import { API_KEY } from "./apiConfig";


function treatHTTPResponseACB(response) {
    if (!response.ok) throw new Error("API problem " + response.status); 
    return response.json();
}

export function getMovieDetails(imdbID) {
    return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s&i=${imdbID}`)
      .then(treatHTTPResponseACB);
  }

  
export function searchMovies(title, category) {
  let urlParams = new URLSearchParams({ s: title, type: category });
  return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&${urlParams}`)
    .then(treatHTTPResponseACB)
    .then(data => data.Search);
}