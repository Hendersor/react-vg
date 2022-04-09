import React from "react";
import "./../styles/Filter.scss";

const Filter = ({ searchMovies, setSearchMovies }) => {
  const searchMovie = (event) => {
    setSearchMovies(event.target.value);
  };
  return (
    <section className="searchContainer">
      <h1>Movies rating</h1>
      <input
        onChange={searchMovie}
        className="input"
        type="text"
        placeholder="Look for your favorite movie"
      />
    </section>
  );
};

export { Filter };
