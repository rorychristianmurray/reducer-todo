import React, { useState } from "react";

const TodoForm = props => {
  const [newTodo, setTodo] = useState("");

  const handleChanges = event => {
    setTodo(event.target.value);
  };

  const addTodo = event => {
    event.preventDefault();
    props.addTodo(newTodo);
    setTodo("");
  };

  const clearTodo = event => {
    event.preventDefault();
    props.clearTodo();
  };

  return (
    <form className="todo-form" onSubmit={addTodo}>
      <input
        placeholder="task name"
        type="text"
        onChange={handleChanges}
        value={newTodo}
        name="item"
      />
      <button className="btn">Add Task</button>
      <button className="btn" onClick={clearTodo}>
        Clear Completed
      </button>
    </form>
  );
};

export default TodoForm;
