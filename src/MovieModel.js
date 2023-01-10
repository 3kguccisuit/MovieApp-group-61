class MovieModel {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    // Check if the movie already exists in the array
    for (let i = 0; i < this.movies.length; i++) {
      if (this.movies[i].imdbID === movie.imdbID) {
        return -1;
      }
    }
    this.movies = [...this.movies, movie];
  }

  removeMovie(movie) {
    this.movies = this.movies.filter(m => m.imdbID !== movie.imdbID);
  }

  updateMovieList(newMovieList) {
    this.movies = newMovieList;
  }

}

export default MovieModel;