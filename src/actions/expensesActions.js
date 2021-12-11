import { types } from "../types/types";

export const addFixedExpenseAction = (state) => {
  return {
    type: types.addFixedExpense,
    payload: state,
  };
};

export const removeExpenseAction = (state) => {
  return {
    type: types.removeExpense,
    payload: state,
  };
};
