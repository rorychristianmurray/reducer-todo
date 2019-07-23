import React from "react";

const Todo = props => {
  console.log("Todo props", props);
  console.log("Todo props.todo.id", props.todo.id);

  const toggleTodo = event => {
    event.preventDefault();
    props.toggleTodo(props.todo.id);
  };
  return (
    <div onClick={toggleTodo}>
      <div>Todo: {props.todo.item}</div>
    </div>
  );
};

export default Todo;
