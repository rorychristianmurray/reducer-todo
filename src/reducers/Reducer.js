const initialState = {
  item: "Learn about reducers",
  completed: false,
  id: 3892987589
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { count: state.count + 1 };
    case "TOGGLE_TODO":
      return { count: state.count + 1 };
    case "EDIT_TODO":
      return { count: state.count + 1 };
    case "DELETE_TODO":
      return { count: state.count + 1 };
    case "CLEAR_TODO":
      return { count: state.count + 1 };
    default:
      return state;
  }
}
