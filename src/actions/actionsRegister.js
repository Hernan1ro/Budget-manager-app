import { types } from "../types/types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { authUpdate } from "../actions/authActions";
import { loadingAction } from "../actions/actionsLoading";

export const registroEmailPasswordNombre = (
  email,
  password,
  name,
  navigate
) => {
  return (dispatch) => {
    console.log("cargando...");
    dispatch(loadingAction(true));
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: name });
        dispatch(registerSincrono(user.email, user.uid, user.displayName));
        dispatch(authUpdate(true));
        navigate("/general");
        console.log("Terminó de cargar");
        dispatch(loadingAction(false));
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
