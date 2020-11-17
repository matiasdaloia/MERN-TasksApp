import React, { useContext } from "react";
import taskContext from "../../context/tasks/taskContext";

const Task = ({ task }) => {
  // Global state for tasks
  const {
    deleteTask,
    getTasks,
    changeTaskState,
    selectActualTask,
  } = useContext(taskContext);

  // Function to handle task deletion
  const handleDelete = () => {
    deleteTask(task.id); // delete the task from the state
    getTasks(task.projectId); // get updated task list
  };

  // Function to change state (completed/incomplete)
  const handleChange = (task) => {
    if (task.completed) {
      task.completed = false;
    } else {
      task.completed = true;
    }
    changeTaskState(task);
  };

  // Function to select the task
  const selectTask = (task) => {
    selectActualTask(task);
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.completed ? (
          <button
            type="button"
            className="completo"
            onClick={() => handleChange(task)}
          >
            Complete
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => handleChange(task)}
          >
            Incomplete
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => selectTask(task)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={handleDelete}
        >
          Delete{" "}
        </button>
      </div>
    </li>
  );
};

export default Task;
