import React from "react";

const Todo = props => {
  console.log("Todo props", props);
  return (
    <div>
      <div>Todo: {props.todo.item}</div>
    </div>
  );
};

export default Todo;
