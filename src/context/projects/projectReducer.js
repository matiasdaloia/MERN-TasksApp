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
    case "ADD_PROJECT":
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        error: false,
      };
    case "SHOW_ERROR":
      return {
        ...state,
        error: true,
      };
    case "SET_ACTIVE_PROJECT":
      return {
        ...state,
        activeproject: state.projects.filter(
          (project) => project.id === action.payload.id
        ),
      };
    case "DELETE_PROJECT":
      return {
        ...state,
        projects: [
          state.projects.filter((project) => project.id !== action.payload.id),
        ],
        activeproject: null,
      };
    default:
      return state;
  }
};
