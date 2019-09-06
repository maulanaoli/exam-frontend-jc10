import { combineReducers } from "redux";
import userGlobal from "./userGlobal";
import cartGlobal from "./cartGlobal";
import historyGlobal from "./historyGlobal";

export default combineReducers({
  user: userGlobal,
  cart: cartGlobal,
  history: historyGlobal
});
