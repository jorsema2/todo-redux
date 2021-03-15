import React, { useState } from "react";
import { createStore } from "redux";
import todoReducer from "../../reducers/todoReducer";
import { Task } from "../Task/Task";
import { Textarea } from "../Textarea/Textarea";
import { Button } from "../Button/Button";
import "./TodoList.css";

export const store = createStore(todoReducer);

export const TodoList = () => {
  const [newTask, setNewTask] = useState("");
  console.log(store.getState())

  return (
    <form className={"listContainer"}>
      <h2 className={"title"}>Todo List</h2>
      {store.getState().map((el) => {
        return <Task task={el} key={Math.random()} />;
      })}
      <Textarea newTask={newTask} setNewTask={setNewTask} />
      <Button newTask={newTask} />
    </form>
  );
};

store.subscribe(TodoList);
