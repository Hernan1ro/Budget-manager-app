import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../reducers/loginReducer";
import { registerReducer } from "../reducers/registerReducer";
import { authReducer } from "../reducers/authReducer";
import { incomeReducer, editIncomeReducer } from "../reducers/incomeReducer";
import { addExpenseReducer } from "../reducers/fixedExpensesReducers";
import { addAntExpenseReducer } from "../reducers/antExpensesReducers";
import { monthObjectiveReducer } from "../reducers/objectiveReducers";
import { loadingReducer } from "../reducers/loadingReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  login: loginReducer,
  register: registerReducer,
  auth: authReducer,
  loading: loadingReducer,
  income: incomeReducer,
  editIncome: editIncomeReducer,
  expense: addExpenseReducer,
  antExpense: addAntExpenseReducer,
  monthObjectives: monthObjectiveReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
