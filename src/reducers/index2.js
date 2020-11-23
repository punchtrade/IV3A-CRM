import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import { sessionReducer } from 'redux-react-session';
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  session: sessionReducer
});