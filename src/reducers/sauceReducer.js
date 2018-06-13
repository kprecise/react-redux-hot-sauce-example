
import { SELECTED_SAUCE } from "../constants/action-types";
import { CLEAR_SAUCES } from "../constants/action-types";

const sauceReducer = (state = [], action) => {
  switch (action.type) {
    case SELECTED_SAUCE:
      return [...state, action.sauce ];
    case CLEAR_SAUCES:
      return [];
    default:
      return state;
  }
};

export default sauceReducer;