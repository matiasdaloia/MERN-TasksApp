import React, { useReducer } from "react";
import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import { FORM_PROJECT } from "../../types/index";

const ProjectState = (props) => {
  const initialState = {
    form: false,
    projects: [
      { id: 1, name: "Test Project" },
      { id: 2, name: "Internet of Things" },
      { id: 3, name: "Data Science" },
      { id: 4, name: "Javascript OOP" },
    ],
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  // functions to execute the dispatch of the actions --> actions come from projectReducer
  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  // Functions for CRUD

  return (
    <projectContext.Provider
      value={{ form: state.form, projects: state.projects, showForm }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
