import { types } from "../types/types";

export const addFixedExpenseAction = (state) => {
  return {
    type: types.addFixedExpense,
    payload: state,
  };
};
