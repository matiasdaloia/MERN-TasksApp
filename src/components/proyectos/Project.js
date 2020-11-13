import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const Project = ({ name, project }) => {
  // Get the global state
  const { setActiveProject } = useContext(projectContext);

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => setActiveProject(project)}
      >
        {name}
      </button>
    </li>
  );
};

export default Project;
