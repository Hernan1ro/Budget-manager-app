import { getAuth, signOut } from "firebase/auth";

export const SignOutAction = (navigate) => {
  return (dispatch) => {
    const auth = getAuth();
    console.log(auth);
    signOut(auth)
      .then(() => {
        alert("Signout exitosamente");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
