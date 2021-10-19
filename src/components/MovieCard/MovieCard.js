import React from "react";
import PropTypes from "prop-types";
import "./MovieCard.scss";

const MovieCard = props => {
  const { movie, setActiveMovie } = props;

  return (
    <div
      data-testid="MovieCard"
      className="moviecard"
      onClick={() => setActiveMovie(movie)}
    >
      <div className="moviecard_img">
        <img src={movie.poster} alt={movie.title} />
      </div>
      <div className="moviecard_wrap">
        <div className="moviecard_content">
          <h2>{movie.title}</h2>
          <p className="movidecard_year">{movie.year}</p>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  setActiveMovie: PropTypes.func.isRequired,
};

export default MovieCard;
