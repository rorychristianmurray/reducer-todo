import React, { useReducer } from "react";
import { initialState, reducer } from "../reducers/Reducer";
import Todo from "./Todo";

const TodoList = () => {
  console.log("TodoList initialState", initialState);
  //   console.log("TodoList state", state);
  //   console.log("TodoList dispatch", dispatch);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="todo-list">
      <div>{state.item}</div>
      {state.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
