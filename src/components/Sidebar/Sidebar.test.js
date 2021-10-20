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
});
