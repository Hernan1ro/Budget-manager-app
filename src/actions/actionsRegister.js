import { types } from "../types/types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { authUpdate } from "../actions/authActions";
import { loadingAction } from "../actions/actionsLoading";
import { db } from "../firebase/firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";

const updateAuth = async (id, auth) => {
  const userDoc = doc(db, "auth", id);
  const newFields = { auth: true };
  await updateDoc(userDoc, newFields);
};

export const registroEmailPasswordNombre = (email, password, name) => {
  return (dispatch) => {
    dispatch(loadingAction(true));
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        updateAuth("0SvSED3RQHVxkpQZxDyX", true);
        await updateProfile(auth.currentUser, { displayName: name });
        setTimeout(() => {
          dispatch(registerSincrono(user.email, user.uid, user.displayName));
          dispatch(authUpdate(true));
          dispatch(loadingAction(false));
          window.location.href = "/general";
        }, 1000);
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
