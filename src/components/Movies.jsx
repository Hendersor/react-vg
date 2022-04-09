import React from "react";
import "./../styles/FavoriteMovies.scss";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";

import "./../styles/Movies.scss";
const Movies = (props) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${props.moviePoster}`;
  return (
    <section className="moviesContainer">
      <div className="movieContainer">
        <img src={imageUrl} alt="movie poster" />

        <section className="infoContainer">
          <h3>{props.movieTitle}</h3>
          <div className="movieInfo">
            <div className="rating">
              <h4>Release date {props.releaseDate}</h4>
              <h4>Rating {props.rating}</h4>
            </div>
            <IoIosHeart
              onClick={() =>
                props.pushFavoriteMovies(
                  props.movieTitle,
                  props.moviePoster,
                  props.id
                )
              }
              className="icon"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export { Movies };
