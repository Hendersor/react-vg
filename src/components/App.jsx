import React, { useEffect, useState } from "react";
import "./../styles/global.scss";
import { Filter } from "./Filter";
import { Movies } from "./Movies";
import axios from "axios";
const API =
  "https://api.themoviedb.org/3/movie/popular?api_key=10a3bf76ca8c31fbf39d182f6c880706&language=en-US&page=1";

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    console.log(response.data.results);
    setMovies(response.data.results);
  }, []);

  return (
    <div>
      <Filter />
      {movies.map((movie) => (
        <Movies
          key={movie.id}
          movieTitle={movie.title}
          releseDate={movie.release_date}
          moviePoster={movie.poster_path}
          rating={movie.vote_average}
        />
      ))}
    </div>
  );
};

export { App };
