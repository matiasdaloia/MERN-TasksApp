import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { v4 as uuidv4 } from "uuid";

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "Test Project" },
    { id: 2, name: "Internet of Things" },
    { id: 3, name: "Data Science" },
    { id: 4, name: "Javascript OOP" },
    { id: 5, name: "Python" },
  ];

  const initialState = {
    form: false,
    projects: [],
    error: false,
    activeproject: null,
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

  // function to add a form to the global projects state
  const addProject = (project) => {
    project.id = uuidv4();

    dispatch({
      type: "ADD_PROJECT",
      payload: project,
    });
  };

  // function to check for errors (blank form)
  const showError = () => {
    dispatch({
      type: "SHOW_ERROR",
    });
  };

  // function to get active project
  const setActiveProject = (project) => {
    dispatch({
      type: "SET_ACTIVE_PROJECT",
      payload: project,
    });
  };

  // function to delete active project
  const deleteProject = (project) => {
    dispatch({
      type: "DELETE_PROJECT",
      payload: project,
    });
  };

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        error: state.error,
        activeproject: state.activeproject,
        showForm,
        getProjects,
        addProject,
        showError,
        setActiveProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
