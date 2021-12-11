import { types } from "../types/types";

export const addExpenseAction = (state) => {
  return {
    type: types.addAntExpense,
    payload: state,
  };
};

export const removeAntExpenseAction = (state) => {
  return {
    type: types.removeAntExpense,
    payload: state,
  };
};
