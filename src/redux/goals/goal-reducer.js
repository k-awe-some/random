import { goalActionTypes } from "./goal-actions";

const goalReducer = (state = [], action) => {
  switch (action.type) {
    case goalActionTypes.ADD_GOAL:
      return state.concat([action.payload]);

    case goalActionTypes.REMOVE_GOAL:
      return state.map(goal => goal.id !== action.payload.id);

    default:
      return state;
  }
};

export default goalReducer;
