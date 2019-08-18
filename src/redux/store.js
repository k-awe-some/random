import { createStore, combineReducers, applyMiddleware } from "redux";
import todoReducer from "./todos/todo-reducer";
import goalReducer from "./goals/goal-reducer";
import logger from "redux-logger"

const rootReducer = combineReducers({
  todos: todoReducer,
  goals: goalReducer
});

export const store = createStore(rootReducer, applyMiddleware(logger));
