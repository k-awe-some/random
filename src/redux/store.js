import { createStore, combineReducers } from "redux";
import todoReducer from "./todos/todo-reducer";
import goalReducer from "./goals/goal-reducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  goals: goalReducer
});

export const store = createStore(rootReducer);
