import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import MovieModal from "../MovieModal/MovieModal";
import PropTypes from "prop-types";

const MoviesContainer = props => {
  const { movieData } = props;
  const [activeMovie, setActiveMovie] = useState(null);

  const handleModalClick = event => {
    event.stopPropagation();
    if (event.target.classList && event.target.classList.contains("modal")) {
      event.target.classList.remove("modal-show");
      setActiveMovie(null);
    }
  };

  return (
    <main className="movieContainer">
      {movieData.length !== 0
        ? movieData.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              setActiveMovie={setActiveMovie}
            />
          ))
        : null}
      {activeMovie && (
        <MovieModal movie={activeMovie} setActiveMovie={setActiveMovie} />
      )}
    </main>
  );
};

MoviesContainer.propTypes = {
  movieData: PropTypes.array,
};

export default MoviesContainer;
