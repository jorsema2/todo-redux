import React from "react";
import { render, screen, act, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Task } from "./Task";

const tasksList = [
  { name: "Go to gym", id: 1 },
  { name: "Clean dishes", id: 2 },
];

test("First task has text 'Go to gym'", () => {
  const { getByTestId } = render(<Task task={tasksList[0]} />);
  expect(getByTestId("1")).toHaveTextContent(/go to gym/i);
});

test("All tasks have their correspondent text", () => {
  for (let i = 1; i < tasksList.length; i++) {
    const { getByTestId } = render(<Task task={tasksList[i]} />);
    expect(getByTestId(`${tasksList[i].id}`)).toHaveTextContent(`${tasksList[i].name}`);
  }
});
