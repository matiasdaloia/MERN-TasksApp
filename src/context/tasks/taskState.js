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
      { name: "Add Peperoncino", completed: false, projectId: 2 },
      { name: "Cook Bacon", completed: true, projectId: 2 },
      { name: "Grocery Shopping", completed: false, projectId: 4 },
      { name: "Choose Platform", completed: true, projectId: 2 },
      { name: "Add Peperoncino", completed: false, projectId: 3 },
      { name: "Cook Bacon", completed: true, projectId: 1 },
      { name: "Grocery Shopping", completed: false, projectId: 4 },
    ],
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ tasks: state.tasks }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
