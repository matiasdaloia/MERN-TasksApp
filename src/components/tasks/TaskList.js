import React, { Fragment, useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";
import Task from "./Task";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const TaskList = () => {
  // Get global context for projects (to get active project name)
  const { activeproject, deleteProject } = useContext(projectContext);

  // Get global state for tasks

  const { projectTasks } = useContext(taskContext);
  console.log(projectTasks);

  // Validate if there is no selected project
  if (!activeproject) return <h2>Please Select a Project</h2>;

  const [project] = activeproject;

  return (
    <Fragment>
      <h2>Project : {project.name}</h2>
      <ul className="listado-tareas">
        {projectTasks.length === 0 ? (
          <p>No tasks available for this Project</p>
        ) : (
          <TransitionGroup>
            {projectTasks.map((task) => (
              <CSSTransition key={task.id} classNames="tarea" timeout={200}>
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
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
