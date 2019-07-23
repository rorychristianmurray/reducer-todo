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

  const toggleTodo = id => {
    // loop through state
    // find the todo the user clicked on
    // toggle the boolean completed operator on the clicked todo

    const todos = state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });

    dispatch({ type: TOGGLE_TODO, payload: todos });
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
