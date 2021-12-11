import { types } from "../types/types";

export const addExpenseReducer = (state = [], action) => {
  switch (action.type) {
    case types.addFixedExpense:
      return [...state, action.payload];
    case types.removeExpense:
      return [...state.filter((item) => item.id !== action.payload)];
    default:
      return state;
  }
};
