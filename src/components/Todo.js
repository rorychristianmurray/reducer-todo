import React from "react";
import "../index.css";

const Todo = props => {
  console.log("Todo props", props);
  console.log("Todo props.todo.id", props.todo.id);

  const toggleTodo = event => {
    event.preventDefault();
    props.toggleTodo(props.todo.id);
  };
  return (
    <div
      onClick={toggleTodo}
      className={`item${props.todo.completed ? " completed" : ""}`}
    >
      <div>Todo: {props.todo.item}</div>
    </div>
  );
};

export default Todo;
