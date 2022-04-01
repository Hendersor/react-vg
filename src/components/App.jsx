import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../styles/global.scss";
import { Filter } from "./Filter";
import { Movies } from "./Movies";
const API =
  "https://api.themoviedb.org/3/movie/popular?api_key=10a3bf76ca8c31fbf39d182f6c880706&language=en-US&page=5";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setMovies(response.data.results);
  }, []);

  let searchedMovies = [];
  if (!searchMovies.length >= 1) {
    searchedMovies = movies;
  } else {
    searchedMovies = movies.filter((movie) => {
      const movieText = movie.title.toLowerCase();
      const movieSearch = searchMovies.toLowerCase();
      return movieText.includes(movieSearch);
    });
  }

  let page = 1;
  const getValue = (event) => {
    console.log(event.target.value);
    // page = event.value
  };

  return (
    <div>
      <Filter searchMovies={searchMovies} setSearchMovies={setSearchMovies} />

      <section className="moviesList">
        {searchedMovies.map((movie) => (
          <Movies
            key={movie.id}
            movieTitle={movie.title}
            releaseDate={movie.release_date}
            moviePoster={movie.poster_path}
            rating={movie.vote_average}
          />
        ))}
      </section>
      <section className="pages">
        <a onClick={getValue} href="#">
          1
        </a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
      </section>
    </div>
  );
};

export { App };
