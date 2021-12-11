import { types } from "../types/types";

export const addExpenseAction = (state) => {
  return {
    type: types.addAntExpense,
    payload: state,
  };
};
