import { todoActionTypes } from "./todo-actions";

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case todoActionTypes.ADD_TODO:
      return state.concat([action.payload]);

    case todoActionTypes.REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);

    case todoActionTypes.TOGGLE_TODO:
      return state.map(todo =>
        todo.id !== action.payload.id
          ? todo
          : {
              ...todo,
              completed: !todo.completed
            }
      );

    default:
      return state;
  }
};

export default todoReducer;
