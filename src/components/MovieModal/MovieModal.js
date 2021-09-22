import React from "react";
import PropTypes from "prop-types";
import "./MovieModal.scss";

const MovieModal = props => {
  const { movie, setActiveMovie } = props;

  const handleModalClick = event => {
    event.stopPropagation();
    if (
      event.target.classList &&
      event.target.classList.contains("modal-wrap")
    ) {
      setActiveMovie(null);
    }
  };

  const renderGenres = () => {
    let genreString = movie.genre.map(genre => {
      return genre.name;
    });
    genreString = genreString.join(", ");
    return genreString;
  };

  return (
    <div className="modal-wrap" onClick={handleModalClick}>
      <div className="modal">
        <div data-testid="MovieDetailCard" className="details_container">
          <div
            className="details_backdrop"
            style={{ backgroundImage: "url(" + movie.backdrop + ")" }}
          />
          <div className="details_wrap">
            <div className="details_content">
              <h1>{movie.title}</h1>

              <p>
                {movie.release_date} | {movie.runtime} mins
              </p>
              <p>{movie.description}</p>
              <p>{renderGenres()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
