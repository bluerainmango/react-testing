import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";

test("renders learn react link", () => {
  render(<App />);

  // access to DOM
  // getByRole is recommended over getById for accessibility.
  // name: innerText(name that user actually see on the screen, not the name for coding)
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

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(colorBtn).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorBtn).toBeEnabled();
});

test("color", () => {
  render(<App />);

  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const colorBtn = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(colorBtn).toHaveStyle({ backgroundColor: "gray" });
  expect(colorBtn).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorBtn).toHaveStyle({ backgroundColor: "red" });
  expect(colorBtn).toBeEnabled();

  fireEvent.click(colorBtn);
  expect(colorBtn).toHaveStyle({ backgroundColor: "blue" });

  fireEvent.click(colorBtn);
  expect(colorBtn).toHaveStyle({ backgroundColor: "red" });
});

// one test suite
describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  test("Works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
