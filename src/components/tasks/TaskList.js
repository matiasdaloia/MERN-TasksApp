import React, { Fragment } from "react";
import Task from "./Task";

const TaskList = () => {
  const tasks = [
    { name: "Choose Platform", completed: true },
    { name: "Add Peperoncino", completed: false },
    { name: "Cook Bacon", completed: true },
    { name: "Grocery Shopping", completed: false },
  ];

  return (
    <Fragment>
      <h2>Proyecto : Internet of things</h2>
      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <p>No tasks available for this Project</p>
        ) : (
          tasks.map((task) => <Task task={task} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Delete Project &times;
      </button>
    </Fragment>
  );
};

export default TaskList;
