import { types } from "../types/types";

export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case types.loading:
      return (state = action.payload);
    default:
      return state;
  }
};
