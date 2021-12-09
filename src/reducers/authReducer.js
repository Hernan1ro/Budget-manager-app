import { types } from "../types/types";

export const authReducer = (state = false, action) => {
  switch (action.type) {
    case types.auth:
      return (state = action.payload);

    default:
      return state;
  }
};
