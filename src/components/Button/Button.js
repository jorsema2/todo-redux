import React from "react";
import "./Button.css";
import { store } from "../TodoList/TodoList";

export const Button = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch({type: "ADD_TASK"});
  };

  return (
    <button
      type="submit"
      className={"button"}
      onClick={handleSubmit}
      name={"submit"}
    >
      Add task
    </button>
  );
};
