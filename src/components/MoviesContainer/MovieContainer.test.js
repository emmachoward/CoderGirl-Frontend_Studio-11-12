import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MoviesContainer from "./MoviesContainer";
import testMovies from "../../data/dataForTests";

/*
TODO:
- Write up instructions for MovieCard.test.js. It's very similar, so be less hand-hold-y and don't give the code
- Write tests for Sidebar: test updating genre and checking to see if updated (userEvent.change ?)
- Write integration test for MovieContainer - create a test array with 3 movies, check that 3 movie cards are rendered
  - Then check that clicking a card will cause the modal to appear
- Then write instructions for Sidebar & MovieContainer
- Make a new branch & revert back the studio to the basic form
*/

describe("MovieContainer test", () => {
  test("MovieContainer renders MovieCards", () => {
    render(<MoviesContainer movieData={testMovies} />);
    expect(screen.getByText("The Breakfast Club")).toBeInTheDocument();
    expect(screen.getByText("The Martian")).toBeInTheDocument();
    expect(screen.getByText("Pride & Prejudice")).toBeInTheDocument();
  });
  test("When MovieCard is clicked, MovieModal appears", () => {
    render(<MoviesContainer movieData={testMovies} />);
    const movieCard = screen.getByText("The Martian");
    userEvent.click(movieCard);
    expect(screen.getByTestId("MovieDetailCard")).toBeInTheDocument();
    expect(screen.getByText(testMovies[1].description)).toBeInTheDocument();
  });
});
