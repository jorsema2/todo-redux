import React from "react";
import "./Textarea.css";

export const Textarea = (props) => {
  const handleChange = (e) => {
    props.setNewTask(e.target.value);
  };
  return (
    <div className={"container"}>
      <label className={"label"} htmlFor={"new-task"}>
        New task:{" "}
      </label>
      <textarea
        id={"new-task"}
        className={"textarea"}
        value={props.newTask}
        onChange={handleChange}
      />
    </div>
  );
};
