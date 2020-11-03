import React from "react";

function MovieCardList(props) {
  const { allMovies } = props;
  return (
    <div className="movie-card-list">
      {allMovies
        .filter((movie) => movie.poster_path)
        .map((movie) => {
          return (
            <div className="movie-card" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + "poster"}
                className="movie-card-image"
              />
              <div className="card-content">
                <h3 className="card-title">{movie.title}</h3>
                <p className="release-date">
                  <small>Release Date: {movie.release_date}</small>
                </p>
                <p>Rating: {movie.vote_average}</p>
                <p className="card-description">{movie.overview}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default MovieCardList;
