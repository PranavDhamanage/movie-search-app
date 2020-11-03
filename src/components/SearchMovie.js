import React, { useState } from "react";
import MovieCardList from "./MovieCardList";

function SearchMovie() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async (event) => {
    event.preventDefault();

    try {
      const result = await fetch(
        `https://api.themoviedb.org/3/search/movie/?api_key=8f4530b78de8cd59be44c8e0499ca57d&language=en-US&query=${query}&page=1&include_adult=false`
      );
      const jsonData = await result.json();
      setMovies(jsonData.results);
      console.log(jsonData.results);
    } catch (error) {
      console.error(error);
    }
  };

  function handleChange(event) {
    const { value } = event.target;
    console.log(typeof event.target);
    setQuery(value);
  }

  return (
    <>
      <form className="form" onSubmit={searchMovie}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="query-input"
          name="query"
          value={query}
          type="text"
          placeholder="Search Movies...."
          onChange={handleChange}
        />
        <button className="btn search-movie" type="submit">
          Search
        </button>
      </form>
      <MovieCardList allMovies={movies} />
    </>
  );
}

export default SearchMovie;
