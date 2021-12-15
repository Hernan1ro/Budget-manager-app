import { types } from "../types/types";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { google, facebook } from "../firebase/firebaseConfig";
import { authUpdate } from "../actions/authActions";
import { loadingAction } from "../actions/actionsLoading";
import { db } from "../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

const updateAuth = async (id, auth) => {
  const userDoc = doc(db, "auth", id);
  const newFields = { auth: true };
  await updateDoc(userDoc, newFields);
};

export const loginEmailPassword = (
  email,
  password,
  navigate,
  objectiveAlert
) => {
  return (dispatch) => {
    dispatch(loadingAction(true));
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        updateAuth("0SvSED3RQHVxkpQZxDyX", true);
        setTimeout(() => {
          dispatch(loginSincrono(user.uid, user.displayName));
          dispatch(authUpdate(true));
          dispatch(loadingAction(false));
          window.location.href = "/general";
        }, 1000);
      })
      .catch((err) => {
        dispatch(loadingAction(false));
        objectiveAlert.fire({
          icon: "error",
          title: "Usuario no existente o password incorrecta",
          text: "Prueba ingresando nuevamente",
          confirmButtonColor: "#00b30c",
        });
      });
  };
};

export const loginGoogle = (navigate) => {
  return (dispatch) => {
    dispatch(loadingAction(true));
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        updateAuth("0SvSED3RQHVxkpQZxDyX", true);
        setTimeout(() => {
          dispatch(authUpdate(true));
          dispatch(loginSincrono((user.uid, user.displayName)));
          dispatch(loadingAction(false));
          window.location.href = "/general";
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        dispatch(loadingAction(false));
      });
  };
};

export const loginFacebook = (navigate) => {
  return (dispatch) => {
    dispatch(loadingAction(true));
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        updateAuth("0SvSED3RQHVxkpQZxDyX", true);
        setTimeout(() => {
          dispatch(authUpdate(true));
          dispatch(loginSincrono((user.uid, user.displayName)));
          dispatch(loadingAction(false));
          window.location.href = "/general";
        }, 1000);
      })
      .catch((err) => {
        dispatch(loadingAction(false));
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
