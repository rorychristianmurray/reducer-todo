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

  //   clearCompleted = (event) => {
  //       event.preventDefault();
  //       this.setState({
  //           newTask : this.state.tasks.filter(task => task.completed)
  //       })
  //   };

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
      {/* <button className="btn" onClick={this.props.clearCompleted}>
          Clear completed
        </button> */}
    </form>
  );
};

export default TodoForm;
