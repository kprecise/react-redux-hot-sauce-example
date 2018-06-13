
import { combineReducers } from "redux";
import sauceReducer from "./sauceReducer";

export default combineReducers({ selectedSauces: sauceReducer });