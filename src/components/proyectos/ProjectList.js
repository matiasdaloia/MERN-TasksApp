import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";

const ProjectList = () => {
  // Extract projects from global context
  const { projects, getProjects } = useContext(projectContext);

  // Get the projects as soon as the component loads
  useEffect(() => {
    getProjects();
  }, []);

  console.log(projects);

  //Check if there are any projects, if not return null
  if (projects.length === 0)
    return (
      <p>
        There are no projects created. Please begin creating one with above
        button
      </p>
    );

  return (
    <ul>
      {projects.map((project) => (
        <Project key={project.id} name={project.name} project={project} />
      ))}
    </ul>
  );
};

export default ProjectList;
