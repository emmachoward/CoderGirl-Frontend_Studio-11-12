import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("Header Tests", () => {
  test('Header renders "Movie Library" as title', () => {
    render(<Header setSidebarOpen={() => {}} />);
    const headerTitle = screen.getByText("Movie Library");
    expect(headerTitle).toBeInTheDocument();
  });

  test("Header renders sidebar and runs func on click", () => {
    const setSidebarOpen = jest.fn();
    render(<Header setSidebarOpen={setSidebarOpen} />);
    const sidebarBtn = screen.getByAltText("Open Sidebar");
    userEvent.click(sidebarBtn);
    expect(setSidebarOpen).toHaveBeenCalled();
  });
});
