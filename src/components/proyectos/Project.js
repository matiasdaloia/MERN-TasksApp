import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Project = ({ name, project }) => {
  // Get the global state
  const { setActiveProject } = useContext(projectContext);
  const { getTasks } = useContext(taskContext);

  const selectProject = (project) => {
    setActiveProject(project); // set active project
    getTasks(project.id); // get tasks by project id
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => selectProject(project)}
      >
        {name}
      </button>
    </li>
  );
};

export default Project;
