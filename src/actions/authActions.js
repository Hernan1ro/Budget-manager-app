import { types } from "../types/types";

export const authUpdate = (state) => {
  return {
    type: types.auth,
    payload: state,
  };
};
