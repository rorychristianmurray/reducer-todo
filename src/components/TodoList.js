import React, { useReducer } from "react";
import {
  initialState,
  reducer,
  ADD_TODO,
  TOGGLE_TODO,
  CLEAR_TODO
} from "../reducers/Reducer";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("TodoList state", state);
  //   console.log("TodoList dispatch", dispatch);

  const addTodo = newTodo => {
    dispatch({ type: ADD_TODO, payload: newTodo });
  };

  const toggleTodo = id => {
    // loop through state
    // find the todo the user clicked on
    // toggle the boolean completed operator on the clicked todo

    dispatch({
      type: TOGGLE_TODO,
      payload: state.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
    // console.log("toggleTodo todos", todos);
  };

  const clearTodo = () => {
    dispatch({ type: CLEAR_TODO });
  };

  return (
    <div className="todo-list">
      <div>{state.item}</div>
      {state.map(todo => (
        <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
      ))}
      <TodoForm addTodo={addTodo} clearTodo={clearTodo} />
    </div>
  );
};

export default TodoList;
