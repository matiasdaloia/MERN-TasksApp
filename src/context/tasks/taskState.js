import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import taskReducer from "./taskReducer";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { name: "Choose Platform", completed: true, projectId: 2 },
      { name: "Add Peperoncino", completed: false, projectId: 3 },
      { name: "Cook Bacon", completed: true, projectId: 1 },
      { name: "Grocery Shopping", completed: false, projectId: 4 },
      { name: "Choose Platform", completed: true, projectId: 1 },
      { name: "Add Peperoncino", completed: false, projectId: 2 },
      { name: "Cook Bacon", completed: true, projectId: 1 },
      { name: "Grocery Shopping", completed: false, projectId: 4 },
      { name: "Choose Platform", completed: true, projectId: 3 },
      { name: "Add Peperoncino", completed: false, projectId: 5 },
      { name: "Cook Bacon", completed: true, projectId: 2 },
      { name: "Grocery Shopping", completed: false, projectId: 4 },
      { name: "Choose Platform", completed: true, projectId: 5 },
      { name: "Add Peperoncino", completed: false, projectId: 5 },
      { name: "Cook Bacon", completed: true, projectId: 1 },
      { name: "Grocery Shopping", completed: false, projectId: 5 },
    ],
    projectTasks: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Get tasks by project id
  const getTasks = (projectId) => {
    dispatch({
      type: "GET_TASKS",
      payload: projectId,
    });
  };

  return (
    <TaskContext.Provider
      value={{ tasks: state.tasks, projectTasks: state.projectTasks, getTasks }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
