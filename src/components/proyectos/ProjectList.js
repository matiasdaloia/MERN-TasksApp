import React, { useContext } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";

const ProjectList = () => {
  const { projects } = useContext(projectContext);
  return (
    <ul>
      {projects.map((project) => (
        <Project key={project.name} name={project.name} />
      ))}
    </ul>
  );
};

export default ProjectList;
