import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { bankReducer } from "./bankReducer";


const rootReducer = combineReducers({
  // Yang depan bisa diganti alias
  bankReducer: bankReducer,
  authReducer: authReducer,
});

export default rootReducer;
