import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Sidebar from "./Sidebar";

let genres = [
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 18, name: "Drama" },
];
let selectedGenre = "Comedy";
let setSelectedGenre = jest.fn();

describe("Sidebar tests", () => {
  test("Sidebar dummy test", () => {
    expect(1).toEqual(1);
  });

  test('Sidebar renders "Filter Movies"', () => {
    render(<Sidebar genres={genres} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />);
    expect(screen.queryByText("Filter Movies")).toBeInTheDocument();
  });

  test('Sidebar renders select, user can select a genre', () => {
    render(<Sidebar genres={genres} selectedGenre={selectedGenre} setSelectedGenre={setSelectedGenre} />);
    const genreSelect = screen.getByTestId("genreSelect");
    expect(genreSelect).toBeInTheDocument();
    userEvent.selectOptions(genreSelect, ['Comedy']);
    expect(screen.getByRole('option', {name: 'Comedy'}).selected).toBe(true);
    

  });
});
