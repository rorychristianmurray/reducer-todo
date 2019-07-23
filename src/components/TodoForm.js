import React, { useState } from "react";

const TodoForm = props => {
  console.log("TodoForm props", props);

  const [newTodo, setTodo] = useState("");

  console.log("TodoForm newTodo", newTodo);

  const handleChanges = event => {
    console.log(
      "TodoForm handleChanges event.target.value",
      event.target.value
    );

    setTodo(event.target.value);
  };

  const addTodo = event => {
    event.preventDefault();
    props.addTodo(newTodo);
  };

  //   addTask = event => {
  //       event.preventDefault();
  //       this.props.addTask(this.state.taskName)
  //       this.setState({taskName: ""})
  //   }

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
