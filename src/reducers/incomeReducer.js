import { types } from "../types/types";

export const incomeReducer = (state = [], action) => {
  switch (action.type) {
    case types.addIncome:
      return [...state, action.payload];
    case types.removeIncome:
      return [...state.filter((item) => item.id !== action.payload)];
    default:
      return state;
  }
};
