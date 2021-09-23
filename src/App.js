import React, { useState, useEffect, useReducer } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MoviesContainer from "./components/MoviesContainer/MoviesContainer";
import GENRES from "./data/genres";
import "./App.css";

const movieDataReducer = (state, action) => {
  switch (action.type) {
    //SET_MOVIES will completely replace the current state with the value passed via `action.value`
    case "SET_MOVIES":
      return action.value;
    case "FILTER_MOVIES": {
      return action.value.allMovies.filter(movie => {
          const filteredGenres = movie.genre.filter(
            genre => genre.name === action.value.selectedGenre
            );
          return filteredGenres.length !== 0 ? true : false;
        });
    }
    default:
      return state;
  }
};

const App = () => {
  const [staticMovieData, setStaticMovieData] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [movieData, movieDataDispatch] = useReducer(movieDataReducer, []);
  

  //Part 1.a
  //Add a useEffect to fetch the movie data and update the staticMovieData state
  //This useEffect should only run once

  
  useEffect(() => {
    fetch("https://getpantry.cloud/apiv1/pantry/5daec432-c358-442e-bbac-be944968a126/basket/movies")
      .then(res => res.json())
      .then(data => { 
    setStaticMovieData(data.movieData);
      movieDataDispatch({type: "SET_MOVIES", value: data.movieData});
    })
      .catch(err =>{ console.error(err => console.error(err))
      }
      ); 
    }, []);

  //Part 4.b
  //Add a useEffect that will update the movieData reducer state to only hold movies that
  //have the selected genre. It should run whenever selectedGenre is changed AND when staticMovieData changes


  useEffect(() => {
    if (staticMovieData.length !== 0) {
      if (selectedGenre !== "") {
        movieDataDispatch({
          type: "FILTER_MOVIES",
          value: { allMovies: staticMovieData, selectedGenre },
        });
      } else {
        movieDataDispatch({ type: "SET_MOVIES", value: staticMovieData });
      }
      setSidebarOpen(false);
    }
  }, [selectedGenre, staticMovieData]);

  return (
    <div className="App">
      <Header setSidebarOpen={setSidebarOpen} />
      {sidebarOpen && <Sidebar 
        genres={GENRES} 
          selectedGenre={selectedGenre} 
          setSelectedGenre={setSelectedGenre} />}
      
      <MoviesContainer movieData={movieData} />
    </div>
  );
};

export default App;
