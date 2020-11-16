/* eslint-disable import/no-anonymous-default-export */

export default (state, action) => {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        projectTasks: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };
    case "ADD_TASK":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        error: false,
      };
    case "VALIDATE_TASK":
      return {
        ...state,
        error: true,
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};
