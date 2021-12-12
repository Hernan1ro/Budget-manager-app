import { types } from "../types/types";

export const loadingAction = (state) => {
  return {
    type: types.loading,
    payload: state,
  };
};
