import { types } from "../types/types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export const registroEmailPasswordNombre = (
  email,
  password,
  name,
  navigate
) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: name });
        dispatch(registerSincrono(user.email, user.uid, user.displayName));
        navigate("/general");
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const registerSincrono = (email, password, name) => {
  return {
    type: types.register,
    payload: {
      email,
      password,
      name,
    },
  };
};
