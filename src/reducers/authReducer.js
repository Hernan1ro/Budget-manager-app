import { types } from "../types/types";
import { getAuth, onAuthStateChanged } from "firebase/auth";

let INITIAL_STATE = false;
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    INITIAL_STATE = false;
  } else {
    INITIAL_STATE = true;
  }
});

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.auth:
      return (state = action.payload);
    default:
      return state;
  }
};
