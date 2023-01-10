import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import './SearchMovieView.css'
import noImg from '../img/no-image.png'

const SearchMovieView = ({ query, category, movies, onQueryChange, onCategoryChange,
  onSearch, onAddToWatchlist, loading, goToDetails }) => {

  if (loading) {
    return (
      <div>
        <img src="https://www.csc.kth.se/~cristi/loading.gif" />
      </div>
    );
  }

  if (!movies) {
    return (
      <form onSubmit={onSearch}>
        <label>
          Search :
          <input type="text" value={query} onChange={onQueryChange} />
        </label>
        <select value={category} onChange={onCategoryChange}>
          <option value="">All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
          <option value="game">Games</option>
        </select>
        <button type="submit">Search</button>
        <p className='not-found'>No results found with "{query}" search</p>
      </form>

    );
  }

  return (
    <form onSubmit={onSearch}>
      <label>
        Search :
        <input type="text" value={query} onChange={onQueryChange} />
      </label>
      <select value={category} onChange={onCategoryChange}>
        <option value="">All</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="game">Games</option>
      </select>
      <button type="submit">Search</button>
      {movies && (
        <div className="movies">
          {movies.map(movie => (
            <div key={movie.imdbID} className="movie-item">
              <div className="movie-poster-container">
                {movie.Poster === "N/A" ? (
                  <img src={noImg}
                    alt={movie.Title} className="movie-poster" />
                ) : (
                  <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
                )}
                <button onClick={() => goToDetails(movie.imdbID, query, category)} className="add-to-watchlist-button">
                  Details
                </button>
              </div>
              <div className="movie-info">
                <p><Link class="my-link-2"
                  to='/Details'
                  state={{ id: movie.imdbID, prevQuery: query, prevCategory: category }}
                >{movie.Title} {movie.Year}</Link></p>
              </div>
            </div>
          ))}
        </div>
      )}
    </form>
  );
}

export default SearchMovieView;