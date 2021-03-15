import React from "react";
import "./Task.css";

export const Task = ({ task }) => {
  return (
    <p className={"task"} id={task.id} data-testid={task.id}>
      {task}
    </p>
  );
};
