import './DetailsView.css'
import noImg from '../img/no-image.png'
const DetailsView = ({
  title, loading, poster, year, released, runtime, genre,
  plot, imdbRating, Type, actors, language, imdbID, onGoback, onAddToWatchlist
}) => {
  if (loading) {
    return (
      <div>
        <img src="https://www.csc.kth.se/~cristi/loading.gif" />
      </div>
    );
  }

  return (
    <div>

      <div className="back-button">
        <div className="buttons">
          <button onClick={() => onGoback()} >
            Back
          </button>

          <button onClick={() => onAddToWatchlist(poster, title, Type, imdbID)} >
            Add to watchlist
          </button>
        </div>

        {poster === "N/A" ? (
                <img className='image' src={noImg}
                   />
              ) : (
                <img className='image' src={poster} />
              )}
      </div>

      <div className="details-view">
        <h1 style={{ marginTop: '10px' }}>{title}</h1>
        <div style={{ marginTop: '75px' }}>
          <div>
            {year && (
              <p>
                <span className="label">Year:</span> {year}
              </p>
            )}
            {released && (
              <p>
                <span className="label">Released:</span> {released}
              </p>
            )}
            {runtime && (
              <p>
                <span className="label">Runtime:</span> {runtime}
              </p>
            )}
            {genre && (
              <p>
                <span className="label">Genre:</span> {genre}
              </p>
            )}
            {plot && (
              <p className="plot">
                <span className="label">Plot:</span> {plot}
              </p>
            )}
            {imdbRating && (
              <p>
                <span className="label">IMDB Rating:</span> {imdbRating}
              </p>
            )}
            {Type && (
              <p>
                <span className="label">Type:</span> {Type}
              </p>
            )}
            {actors && (
              <p>
                <span className="label">Actors:</span> {actors}
              </p>
            )}
            {language && (
              <p>
                <span className="label">Language:</span> {language}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default DetailsView;
