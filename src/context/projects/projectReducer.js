import { FORM_PROJECT } from "../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  // switches on the action type and depending on which one is triggered, we then dispatch the function in projectState
  switch (action.type) {
    case FORM_PROJECT:
      if (state.form === true) {
        return {
          ...state,
          form: false,
        };
      } else {
        return {
          ...state,
          form: true,
        };
      }
    default:
      return state;
  }
};
