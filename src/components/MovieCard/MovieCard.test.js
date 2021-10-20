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
});
