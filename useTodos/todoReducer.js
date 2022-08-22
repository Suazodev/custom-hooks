export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] ADD_TODO':
      return [...initialState, action.payload];
    case '[TODO] REMOVE_TODO':
      return initialState.filter((todo) => todo.id !== action.payload);
    case '[TODO] TOGGLE_TODO':
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });

    default:
      return initialState;
  }
};
