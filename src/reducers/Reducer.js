export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    item: "Eat a banana",
    completed: false,
    id: 3892987587
  }
];

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_TODO = "CLEAR_TODO";

export function reducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return [...state, newTodo];
    case TOGGLE_TODO:
      console.log("TOGGLE_TODO action.payload", action.payload);
      return action.payload;
    case CLEAR_TODO:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
}
