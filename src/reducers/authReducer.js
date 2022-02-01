import { types } from "../types/types";

let INITIAL_STATE = true;
// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     INITIAL_STATE = true;
//     console.log("usuario logeado");
//   } else {
//     INITIAL_STATE = false;
//     console.log("usuario no logeado");
//   }
// });

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.auth:
      return (state = action.payload);
    default:
      return state;
  }
};
