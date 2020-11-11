import React from "react";
import Project from "./Project";

const ProjectList = () => {
  const projects = [
    {
      name: "Test Project",
    },
    {
      name: "Internet of Things",
    },
    {
      name: "Data Science",
    },
    {
      name: "Javascript OOP",
    },
  ];

  return (
    <ul>
      {projects.map((project) => (
        <Project key={project.name} name={project.name} />
      ))}
    </ul>
  );
};

export default ProjectList;
