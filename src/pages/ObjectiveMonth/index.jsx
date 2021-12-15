import React from "react";
import Menu from "../../components/Menu";
import WhiteBackground from "../../layout/WhiteBackground";
import { useDispatch, useSelector } from "react-redux";
import { monthObjectivesAction } from "../../actions/actionsMonthObjetives";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./styles.css";

const ObjectiveMonth = () => {
  const form = React.useRef(null);
  const objectiveAlert = withReactContent(Swal);
  const objectiveMonthData = useSelector((state) => state.monthObjectives);
  const { budget, expense, savings } = objectiveMonthData;

  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current);
    const userData = {
      budget: Number(formData.get("budget")),
      expense: Number(formData.get("expense")),
      savings: Number(formData.get("savings")),
    };
    if (userData.budget < 0 || userData.expense < 0 || userData.savings < 0) {
      objectiveAlert.fire({
        icon: "error",
        title: "Oops...",
        text: "Los valores deben ser mayor a cero",
        confirmButtonColor: "#00b30c",
      });
    } else if (
      userData.budget === "" ||
      userData.expense === "" ||
      userData.savings === ""
    ) {
      objectiveAlert.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos son obligatorios",
        confirmButtonColor: "#00b30c",
      });
    } else {
      dispatch(monthObjectivesAction(userData));
      objectiveAlert.fire({
        position: "center",
        icon: "success",
        title: "Tus objetivos financieros han sido guardados correctamente",
        showConfirmButton: true,
        timer: 2500,
      });
    }
  };
  return (
    <>
      <Menu />
      <WhiteBackground>
        <div className="objective-container">
          <div className="title-container">
            <h1 className="objective-container__title">
              OBJETIVOS PARA EL MES
            </h1>
          </div>
          <div className="objective-keys-container">
            <form ref={form} action="" className="objective-form">
              <div className="label-container">
                <label htmlFor="month-budget">Presupuesto Mensual</label>
                <input
                  placeholder={`$ ${budget}`}
                  id="month-budget"
                  name="budget"
                  type="number"
                />
              </div>
              <div className="label-container">
                <label htmlFor="month-expenses">Gasto mensual actual</label>
                <input
                  placeholder={`$ ${expense}`}
                  id="month-expenses"
                  name="expense"
                  type="number"
                />
              </div>
              <div className="label-container">
                <label htmlFor="average-savings">Ahorro estimado</label>
                <input
                  placeholder={`$ ${savings}`}
                  id="average-savings"
                  name="savings"
                  type="number"
                />
              </div>
              <button onClick={handleSubmit} id="form-button" type="">
                Guardar
              </button>
            </form>
            <div className="alert-container">
              <div className="alert-message">
                {/* <h3>No hay novedades</h3> */}
              </div>
            </div>
          </div>
        </div>
      </WhiteBackground>
    </>
  );
};

export default ObjectiveMonth;
