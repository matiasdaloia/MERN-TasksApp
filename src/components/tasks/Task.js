import React, { useContext } from "react";
import taskContext from "../../context/tasks/taskContext";

const Task = ({ task }) => {
  // Global state for tasks
  const { deleteTask, getTasks } = useContext(taskContext);

  // Function to handle task deletion
  const handleDelete = () => {
    deleteTask(task.id); // delete the task from the state
    getTasks(task.projectId); // get updated task list
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.completed ? (
          <button type="button" className="completo">
            Complete
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incomplete
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
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
