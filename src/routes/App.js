import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Background from "../layout/Background/index";
import Home from "../pages/Home/";
import Login from "../pages/Login/";
import Register from "../pages/Register/";
import General from "../pages/General";
import AntExpenses from "../pages/AntExpenses";
import FixedExpenses from "../pages/FixedExpenses";
import Income from "../pages/Income";
import ObjectiveMonth from "../pages/ObjectiveMonth";
import NotFound from "../pages/NotFound";
import { useSelector } from "react-redux";
import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { loadingAction } from "../actions/actionsLoading";
import Spinner from "../components/spinner2";

function App() {
  // const { auth } = useSelector((state) => state);
  const isLoading = useSelector((state) => state.loading);
  const [auth, setAuth] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadingAction(true));
    const authCollectionRef = collection(db, "auth");
    const getAuth = async () => {
      const data = await getDocs(authCollectionRef);
      setAuth(data.docs.map((doc) => ({ ...doc.data() }))[0].auth);
      dispatch(loadingAction(false));
    };
    getAuth();
  }, []);
  return (
    <Background>
      {isLoading ? (
        <Spinner />
      ) : (
        <BrowserRouter>
          <Routes>
            {!auth && (
              <Route path="/general" element={<Navigate to="/login" />} />
            )}
            {!auth && (
              <Route
                path="/gastos-hormiga"
                element={<Navigate to="/login" />}
              />
            )}
            {!auth && (
              <Route path="/gastos" element={<Navigate to="/login" />} />
            )}
            {!auth && (
              <Route path="/ingresos" element={<Navigate to="/login" />} />
            )}
            {!auth && (
              <Route path="/objetivos" element={<Navigate to="/login" />} />
            )}
            {auth && (
              <Route path="/login" element={<Navigate to="/general" />} />
            )}
            {auth && (
              <Route path="/register" element={<Navigate to="/general" />} />
            )}
            {auth && <Route path="/" element={<Navigate to="/general" />} />}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/general" element={<General />} />
            <Route path="/gastos-hormiga" element={<AntExpenses />} />
            <Route path="/gastos" element={<FixedExpenses />} />
            <Route path="/ingresos" element={<Income />} />
            <Route path="/objetivos" element={<ObjectiveMonth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </Background>
  );
}

export default App;
