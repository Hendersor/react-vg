import React, { useEffect, useState } from "react";
import axios from "axios";
import "./../styles/global.scss";
import "./../styles/Pages.scss";
import { Filter } from "./Filter";
import { Movies } from "./Movies";
import { FavoriteMovies } from "./FavoriteMovies";
const API =
  "https://api.themoviedb.org/3/movie/popular?api_key=10a3bf76ca8c31fbf39d182f6c880706&language=en-US&page=10";

const App = () => {
  //Local Storage
  const localStorageMovies = localStorage.getItem("MOVIES_V1");
  let parsedMovies;

  if (!localStorageMovies) {
    localStorage.setItem("MOVIES_V1", JSON.stringify([]));
    parsedMovies = [];
  } else {
    parsedMovies = JSON.parse(localStorageMovies);
  }

  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [favoriteMovies, setFavoriteMovies] = useState(parsedMovies);

  //API conection
  useEffect(async () => {
    const response = await axios(API);
    setMovies(response.data.results);
  }, []);

  //Search movies
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

  //Persist data in local storage
  const saveMovies = (newMovies) => {
    const stringifiedMovies = JSON.stringify(newMovies);
    localStorage.setItem("MOVIES_V1", stringifiedMovies);
    setFavoriteMovies(newMovies);
  };

  //Add your favorite movies
  const pushFavoriteMovies = (movieTitle) => {
    const getMovieIndex = movies.findIndex(
      (movie) => movie.title == movieTitle
    );

    //Filter for dont repeat the movie
    const dontReapet = favoriteMovies.findIndex(
      (movie) => movie.title === movieTitle
    );
    if (dontReapet === -1) {
      favoriteMovies.push(movies[getMovieIndex]);
      const newFavorites = [...favoriteMovies];
      // setFavoriteMovies(newFavorites);
      saveMovies(newFavorites);
    }
  };

  //Delete favorite movie
  const deleteMovie = (movie) => {
    const movieIndex = favoriteMovies.findIndex(
      (movies) => movies.title === movie
    );
    favoriteMovies.splice(movieIndex, 1);
    const newFavoriteMovies = [...favoriteMovies];
    // setFavoriteMovies(newFavoriteMovies);
    saveMovies(newFavoriteMovies);
  };

  return (
    <div>
      <Filter searchMovies={searchMovies} setSearchMovies={setSearchMovies} />
      {favoriteMovies.length > 0 ? (
        <FavoriteMovies
          favoriteMovies={favoriteMovies}
          setFavoriteMovies={setFavoriteMovies}
          deleteMovie={deleteMovie}
        />
      ) : null}
      <section className="moviesList">
        {searchedMovies.map((movie) => (
          <Movies
            key={movie.id}
            movieTitle={movie.title}
            releaseDate={movie.release_date}
            moviePoster={movie.poster_path}
            rating={movie.vote_average}
            pushFavoriteMovies={pushFavoriteMovies}
          />
        ))}
      </section>
      <section className="pages">
        {/* <a onClick={getValue} value="#" href="#">
          1
        </a> */}
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
      </section>
    </div>
  );
};

export { App };
