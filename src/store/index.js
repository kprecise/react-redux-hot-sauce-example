import { createStore } from "redux";
import sauceReducer from "../reducers/index";

const store = createStore(sauceReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;