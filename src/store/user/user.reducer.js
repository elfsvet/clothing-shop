import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

// on the first run give the initial state.
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        // give me the same values on the previous object that we had except for the one we modified
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
