import { types } from "../types/types";

let INITIAL_STATE = {
  editMode: false,
  id: "",
};

export const editReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.edit:
      return (state = action.payload);
    default:
      return state;
  }
};
