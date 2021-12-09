import { types } from "../types/types";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { google } from "../firebase/firebaseConfig";

export const loginEmailPassword = (email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSincrono(user.uid, user.displayName));
        console.log("Bienvenido", user);
      })
      .catch((err) => {
        console.log(err);
        console.log("El usuario no existe");
      });
  };
};

export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        dispatch(loginSincrono((user.uid, user.displayName)));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const loginSincrono = (id, displayname) => {
  return {
    type: types.login,
    payload: { id, displayname },
  };
};
