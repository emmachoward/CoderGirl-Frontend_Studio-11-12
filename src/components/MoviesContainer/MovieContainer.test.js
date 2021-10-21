import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MoviesContainer from "./MoviesContainer";
import testMovies from "../../data/dataForTests";

describe("MovieContainer test", () => {
  test("MovieContainer dummy test", () => {
    expect(1).toEqual(1);
  });

  test("MovieContainer renders MovieCards", () => {
    render(<MoviesContainer movieData={testMovies} />);
    expect(screen.queryByText("The Breakfast Club")).toBeInTheDocument();
    expect(screen.queryByText("The Martian")).toBeInTheDocument();
    expect(screen.queryByText("Pride & Prejudice")).toBeInTheDocument();
  });

  test("When MovieCard is clicked, MovieModal appears", () => {
    render(<MoviesContainer movieData={testMovies} />);
    const movieCardSelected = screen.getByText("The Breakfast Club");
    userEvent.click(movieCardSelected);
    expect(screen.queryByText("Five high school students from different walks of life endure a Saturday detention under a power-hungry principal. The disparate group includes rebel John, princess Claire, outcast Allison, brainy Brian and Andrew, the jock. Each has a chance to tell his or her story, making the others see them a little differently -- and when the day ends, they question whether school will ever be the same.")).toBeInTheDocument();
  });
});
