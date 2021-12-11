import { types } from "../types/types";

export const addExpenseReducer = (state = [], action) => {
  switch (action.type) {
    case types.addFixedExpense:
      return [...state, action.payload];
    default:
      return state;
  }
};
