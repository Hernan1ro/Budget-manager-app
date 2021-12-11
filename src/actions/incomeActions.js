import { types } from "../types/types";

export const addIncomeAction = (state) => {
  return {
    type: types.addIncome,
    payload: state,
  };
};

export const removeIncomeAction = (state) => {
  return {
    type: types.removeIncome,
    payload: state,
  };
};

export const editIncomeAction = (state) => {
  return {
    type: types.editIncome,
    payload: state,
  };
};
