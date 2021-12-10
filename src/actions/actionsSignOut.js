import { getAuth, signOut } from "firebase/auth";
import { authUpdate } from "../actions/authActions";

export const SignOutAction = (navigate) => {
  const auth = getAuth();
  console.log(auth);
  signOut(auth)
    .then(() => {
      alert("Signout exitosamente");
      authUpdate(false);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
