const goalActionTypes = {
  ADD_GOAL: "ADD_GOAL",
  REMOVE_GOAL: "REMOVE_GOAL"
};

const addGoalAction = goal => ({
  type: goalActionTypes.ADD_GOAL,
  payload: goal
});

const removeGoalAction = goal => ({
  type: goalActionTypes.REMOVE_GOAL,
  payload: goal
});

export { goalActionTypes, addGoalAction, removeGoalAction };
