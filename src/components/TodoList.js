import React, { useReducer } from "react";
import { initialState, reducer, ADD_TODO } from "../reducers/Reducer";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("TodoList state", state);
  console.log("TodoList dispatch", dispatch);

  const addTodo = newTodo => {
    dispatch({ type: ADD_TODO, payload: newTodo });
  };

  return (
    <div className="todo-list">
      <div>{state.item}</div>
      {state.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default TodoList;
