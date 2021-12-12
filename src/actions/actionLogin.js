import { types } from "../types/types";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { google, facebook } from "../firebase/firebaseConfig";
import { authUpdate } from "../actions/authActions";
import { loadingAction } from "../actions/actionsLoading";

export const loginEmailPassword = (email, password, navigate) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSincrono(user.uid, user.displayName));
        dispatch(authUpdate(true));
        alert("Bienvenido", user.displayName);
        navigate("/general");
      })
      .catch((err) => {
        console.log(err);
        alert("El usuario no existe");
      });
  };
};

export const loginGoogle = (navigate) => {
  return (dispatch) => {
    dispatch(loadingAction(true));
    console.log("cargando...");
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        dispatch(authUpdate(true));
        dispatch(loginSincrono((user.uid, user.displayName)));
        dispatch(loadingAction(false));
        console.log("finalizando carga");
        navigate("/general");
        alert("Bienvenido", user.displayName);
      })
      .catch((err) => {
        console.log(err);
        dispatch(loadingAction(false));
      });
  };
};

export const loginFacebook = (navigate) => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        dispatch(authUpdate(true));
        dispatch(loginSincrono((user.uid, user.displayName)));
        navigate("/general");
        alert("Bienvenido", user.displayName);
      })
      .catch((err) => console.log(err));
  };
};

export const loginSincrono = (id, displayname) => {
  return {
    type: types.login,
    payload: { id, displayname },
  };
};
