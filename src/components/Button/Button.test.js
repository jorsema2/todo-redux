import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "./Button";

test("button is in the document and it is not disabled", () => {
  render(<Button />);
  const button = screen.getByRole('button', {name: /add task/i });
  expect(button).toBeInTheDocument;
  expect(button).not.toBeDisabled;
});
