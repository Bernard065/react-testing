import { screen, render, fireEvent } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders the Vite logo", () => {
    render(<App />);
    expect(screen.getByAltText("Vite logo")).toBeInTheDocument();
  });

  it("renders the React logo", () => {
    render(<App />);
    expect(screen.getByAltText("React logo")).toBeInTheDocument();
  });

  it("renders the app", () => {
    render(<App />);
    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });

  it("renders the count", () => {
    render(<App />);
    expect(screen.getByText("count is 0")).toBeInTheDocument();
  });

  it("increments the count", () => {
    render(<App />);
    const button = screen.getByText("count is 0");
    fireEvent.click(button);
    expect(screen.getByText("count is 1")).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText("count is 2")).toBeInTheDocument();
  });
});
