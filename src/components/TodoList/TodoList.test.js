import React from "react";
import {
  render,
  mount,
  fireEvent,
  waitFor,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { TodoList } from "./TodoList";

test("Todo List title appears", () => {
  render(<TodoList />);
  const heading = screen.getByRole("heading", { name: /Todo List/i });
  expect(heading).toBeInTheDocument;
});

test('Todo list should contain "go to gym"', () => {
  const allTasks = ["Go to gym", "Clean dishes"];
  expect(allTasks).toContain("Go to gym");
});

test("User can add a new task", () => {
  const { getByTestId, getByLabelText, getByRole } = render(<TodoList />);
  const textarea = getByLabelText("New task:");
  fireEvent.change(textarea, { target: { value: "Take a walk" } });
  fireEvent.click(getByRole('button', {name: /add task/i }))
  expect(getByTestId("3")).toHaveTextContent(/take a walk/i);
});
