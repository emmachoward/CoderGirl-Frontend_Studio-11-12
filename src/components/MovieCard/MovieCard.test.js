import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MovieCard from "./MovieCard";

let testMovie = {
  id: 286217,
  title: "The Martian",
  year: "2015",
  poster: "http://image.tmdb.org/t/p/w500/5BHuvQ6p9kfc091Z8RiFNhCwL4b.jpg",
};

describe("MovieCard tests", () => {
  test("MovieCard renders title, year & image", () => {
    render(<MovieCard movie={testMovie} setActiveMovie={() => {}} />);

    const movieTitle = screen.getByText(testMovie.title);
    expect(movieTitle).toBeInTheDocument();
    const movieYear = screen.getByText(testMovie.year);
    expect(movieYear).toBeInTheDocument();
    const moviePoster = screen.getByAltText(testMovie.title);
    expect(moviePoster).toBeInTheDocument();
  });

  test("When MovieCard is clicked, function runs", () => {
    const setActiveMovie = jest.fn();
    render(<MovieCard movie={testMovie} setActiveMovie={setActiveMovie} />);
    const card = screen.getByTestId("MovieCard");
    userEvent.click(card);
    expect(setActiveMovie).toHaveBeenCalled();
  });
});
