import { types } from "../types/types";

export const addAntExpenseReducer = (state = [], action) => {
  switch (action.type) {
    case types.addAntExpense:
      return [...state, action.payload];
    default:
      return state;
  }
};
