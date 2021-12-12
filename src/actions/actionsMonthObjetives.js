import { types } from "../types/types";

export const monthObjectivesAction = (state) => {
  return {
    type: types.monthObjective,
    payload: state,
  };
};
