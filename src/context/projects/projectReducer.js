// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  // switches on the action type and depending on which one is triggered, we then dispatch the function in projectState
  switch (action.type) {
    case "SHOW_FORM":
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
    case "GET_PROJECTS":
      return {
        ...state,
        projects: action.payload,
      };
    default:
      return state;
  }
};
