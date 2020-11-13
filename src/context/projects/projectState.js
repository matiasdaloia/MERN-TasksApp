import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "Test Project" },
    { id: 2, name: "Internet of Things" },
    { id: 3, name: "Data Science" },
    { id: 4, name: "Javascript OOP" },
  ];

  const initialState = {
    form: false,
    projects: [],
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  // functions to execute the dispatch of the actions --> actions types come from projectReducer

  // function to show form whenever you want to add a new project (onClick)
  const showForm = () => {
    dispatch({
      type: "SHOW_FORM",
    });
  };

  // function to get all projects
  const getProjects = () => {
    dispatch({
      type: "GET_PROJECTS",
      payload: projects,
    });
  };

  // Functions for CRUD

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        showForm,
        getProjects,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
