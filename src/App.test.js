import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);

  // access to DOM
  // getByRole is recommended over getById for accessibility.
  // name: innerText
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });

  // assertion. always start with expect. toHaveStyle(): jest-dom's method
  expect(colorBtn).toHaveStyle({ backgroundColor: "red" });
});

test("button turns blue when clicked", () => {
  render(<App />);

  const colorBtn = screen.getByRole("button", { name: "Change to blue" });

  expect(colorBtn).toHaveStyle({ backgroundColor: "red" });

  // click button
  fireEvent.click(colorBtn);

  expect(colorBtn).toHaveStyle({ backgroundColor: "blue" });

  // expect the button text to be 'Change to red'
  expect(colorBtn.textContent).toBe("Change to red");
});

test("initial conditions", () => {
  render(<App />);

  const colorBtn = screen.getByRole("button", { name: "Change to blue" });
  expect(colorBtn).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("checkbox disabled button on first click and enables on second click", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox");
  const colorBtn = screen.getByRole("button");

  fireEvent.click(checkbox);
  expect(colorBtn).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorBtn).toBeEnabled();
});
