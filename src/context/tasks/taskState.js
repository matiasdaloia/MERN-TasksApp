import React, { useReducer } from "react";
import TaskContext from "./taskContext";
import taskReducer from "./taskReducer";
import { v4 as uuidv4 } from "uuid";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, name: "Choose Platform", completed: true, projectId: 2 },
      { id: 2, name: "Add Peperoncino", completed: false, projectId: 3 },
      { id: 3, name: "Cook Bacon", completed: true, projectId: 1 },
      { id: 4, name: "Grocery Shopping", completed: false, projectId: 4 },
      { id: 5, name: "Choose Platform", completed: true, projectId: 1 },
      { id: 6, name: "Add Peperoncino", completed: false, projectId: 2 },
      { id: 7, name: "Cook Bacon", completed: true, projectId: 1 },
      { id: 8, name: "Grocery Shopping", completed: false, projectId: 4 },
      { id: 9, name: "Choose Platform", completed: true, projectId: 3 },
      { id: 10, name: "Add Peperoncino", completed: false, projectId: 5 },
      { id: 11, name: "Cook Bacon", completed: true, projectId: 2 },
      { id: 12, name: "Grocery Shopping", completed: false, projectId: 4 },
      { id: 13, name: "Choose Platform", completed: true, projectId: 5 },
      { id: 14, name: "Add Peperoncino", completed: false, projectId: 5 },
      { id: 15, name: "Cook Bacon", completed: true, projectId: 1 },
      { id: 16, name: "Grocery Shopping", completed: false, projectId: 5 },
    ],
    projectTasks: null,
    error: false,
    selectedtask: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  // Get tasks by project id
  const getTasks = (projectId) => {
    dispatch({
      type: "GET_TASKS",
      payload: projectId,
    });
  };

  // Add task to selected project
  const addTask = (task) => {
    task.id = uuidv4();
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  };

  // Function to validate tasks errors
  const validateTask = () => {
    dispatch({
      type: "VALIDATE_TASK",
    });
  };

  // Function to delete tasks
  const deleteTask = (taskId) => {
    dispatch({
      type: "DELETE_TASK",
      payload: taskId,
    });
  };

  // Function to change task state from completed to incomplete and visceversa
  const changeTaskState = (task) => {
    dispatch({
      type: "CHANGE_TASK_STATE",
      payload: task,
    });
  };

  // Function to select the clicked task
  const selectActualTask = (task) => {
    dispatch({
      type: "SELECT_TASK",
      payload: task,
    });
  };

  // Function to edit the current selected task
  const editTask = (task) => {
    dispatch({
      type: "EDIT_TASK",
      payload: task,
    });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        projectTasks: state.projectTasks,
        error: state.error,
        selectedtask: state.selectedtask,
        getTasks,
        addTask,
        validateTask,
        deleteTask,
        changeTaskState,
        selectActualTask,
        editTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
