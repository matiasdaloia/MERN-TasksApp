import React, { Fragment, useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import Task from "./Task";

const TaskList = () => {
  // Get global context for projects (to get active project name)
  const { activeproject, deleteProject } = useContext(projectContext);

  // Validate if there is no selected project
  if (!activeproject) return <h2>Please Select a Project</h2>;

  const [project] = activeproject;

  const tasks = [];

  return (
    <Fragment>
      <h2>Project : {project.name}</h2>
      <ul className="listado-tareas">
        {tasks.length === 0 ? (
          <p>No tasks available for this Project</p>
        ) : (
          tasks.map((task) => <Task key={task.name} task={task} />)
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => deleteProject(project)}
      >
        Delete Project &times;
      </button>
    </Fragment>
  );
};

export default TaskList;
