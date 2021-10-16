import React, { useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import MovieModal from "../MovieModal/MovieModal";
import PropTypes from "prop-types";

const MoviesContainer = props => {
  const { movieData } = props;
  const [activeMovie, setActiveMovie] = useState(null);

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
  movieData: PropTypes.array.isRequired,
};

export default MoviesContainer;
