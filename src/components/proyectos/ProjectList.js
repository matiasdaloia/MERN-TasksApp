import React, { useContext, useEffect } from "react";
import Project from "./Project";
import projectContext from "../../context/projects/projectContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ProjectList = () => {
  // Extract projects from global context
  const { projects, getProjects } = useContext(projectContext);

  // Get the projects as soon as the component loads
  useEffect(() => {
    getProjects();
  }, []);

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
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project.id} timeout={200} classNames="tarea">
            <Project name={project.name} project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ProjectList;
