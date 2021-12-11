import { types } from "../types/types";

export const addAntExpenseReducer = (state = [], action) => {
  switch (action.type) {
    case types.addAntExpense:
      return [...state, action.payload];
    case types.removeAntExpense:
      return [...state.filter((item) => item.id !== action.payload)];
    default:
      return state;
  }
};
