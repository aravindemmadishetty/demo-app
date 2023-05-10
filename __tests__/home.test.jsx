import { render, screen } from "@testing-library/react";
import Home from "../pages/index.js";
import "@testing-library/jest-dom";

test("rendering home page", () => {
  render(<Home />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});

it("renders homepage unchanged", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
