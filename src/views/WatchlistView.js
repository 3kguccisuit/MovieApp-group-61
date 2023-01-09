import React from 'react';
import './WatchlistView.css';
import noImg from '../img/no-image.png'

const WatchlistView = ({ movies, onRemoveWatchlist, user, loading, selectedCategory, onCategoryChange }) => {
  //console.log('WatchlistPresenter component rendered');

  // Filter the movies based on the selected category
  const filteredMovies = movies.filter(movie => {
    if (selectedCategory === 'all') {
      return true;
    } else {
      return movie.Type === selectedCategory;
    }
  });

  if (!user) {
    return (
      <>
        <p>You need to log in!</p>
      </>
    );
  }

  if (loading) {
    return (
      <div>
        <img src="https://www.csc.kth.se/~cristi/loading.gif" />
      </div>
    );
  }

  if (user && movies.length === 0) {
    return (
      <>
        <p>You have 0 movies in your watchlist</p>
      </>
    );
  }

  return (
    <div>
      <select onChange={onCategoryChange} value={selectedCategory}>
        <option value="all">All</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="game">Games</option>
      </select>
      <div>
        <ul className="watchlist-presenter">
          {filteredMovies.map(movie => (
            <li key={movie.imdbID}>
              <div className="image-container">
              {movie.Poster === "N/A" ? (
                <img src={noImg}
                  alt={movie.Title} className="movie-poster" />
              ) : (
                <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
              )}
                <button onClick={() => onRemoveWatchlist(movie)}>Remove</button>
              </div>
              <p>{movie.Title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WatchlistView;
