import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  // getByRole is recommended over getById for accessibility.
  // name: innerText
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });

  // toHaveStyle(): jest-dom's method
  expect(colorBtn).toHaveStyle({ backgroundColor: "red" });
});
