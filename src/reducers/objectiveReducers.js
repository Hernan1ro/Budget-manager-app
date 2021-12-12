import { types } from "../types/types";

const INITIAL_STATE = {
  budget: 0,
  expense: 0,
  savings: 0,
};

export const monthObjectiveReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.monthObjective:
      return (state = action.payload);
    default:
      return state;
  }
};
