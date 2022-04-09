import React from "react";
import "./../styles/FavoriteMovies.scss";
import "./../styles/Movies.scss";
import { IoIosCloseCircle } from "react-icons/io";
import { StarRating } from "./StarRating";

const FavoriteMovies = (props) => {
  const imageUrl = `https://image.tmdb.org/t/p/original`;
  return (
    <div className="favoriteMoviesContainer">
      {props.favoriteMovies.map((movie) => (
        <div className="movieContainer">
          <img src={`${imageUrl}${movie.poster_path}`} alt="Movie poster" />
          <section className="infoFavoriteContainer">
            <div className="deleteMovieContainer">
              <div className="movieName">
                <h1>{movie.title}</h1>
                <IoIosCloseCircle
                  className="removeMovie"
                  onClick={() => props.deleteMovie(movie.title)}
                />
              </div>
              <section className="ratingContainer">
                <StarRating />
              </section>
            </div>
          </section>
        </div>
      ))}
    </div>
  );
};

export { FavoriteMovies };
