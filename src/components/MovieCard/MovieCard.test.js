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
  test("MovieCard dummy test", () => {
    expect(1).toEqual(1);
  });

  test("MovieCard renders title, year & image", () => {
    render(<MovieCard movie={testMovie} setActiveMovie={() => {}} />);
    expect(screen.queryByText('The Martian')).toBeInTheDocument();
    expect(screen.queryByText('2015')).toBeInTheDocument();
    expect(screen.queryByAltText('The Martian')).toBeInTheDocument();
  });

  test("When MovieCard is clicked, function runs", () => {
      const setActiveMovie = jest.fn();
      render(<MovieCard movie={testMovie} setActiveMovie={setActiveMovie} />);
      const movieCardCapture = screen.getByTestId("MovieCard");
      userEvent.click(movieCardCapture);
      expect(setActiveMovie).toHaveBeenCalled;
  });
});

