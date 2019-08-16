const todoActionTypes = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO"
};

const addTodoAction = todo => ({
  type: todoActionTypes.ADD_TODO,
  payload: todo
});

const removeTodoAction = todo => ({
  type: todoActionTypes.REMOVE_TODO,
  payload: todo
});

const toggleTodoAction = todo => ({
  type: todoActionTypes.TOGGLE_TODO,
  payload: todo
});

export { todoActionTypes, addTodoAction, removeTodoAction, toggleTodoAction };
