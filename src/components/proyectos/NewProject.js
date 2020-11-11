import React, { Fragment, useContext, useState } from "react";
import projectContext from "../../context/projects/projectContext";

function NewProject() {
  // Get state for form (from context)
  const projectsContext = useContext(projectContext);

  const { form, showForm } = projectsContext;

  //state for new project
  const [project, setProject] = useState({
    name: "",
  });

  const { name } = project;

  //Read data from input
  const onChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => showForm()}
      >
        New Project
      </button>

      {form ? (
        <form
          className="formulario-nuevo-proyecto"
          onSubmit={(e) => onSubmit(e)}
        >
          <input
            type="text"
            className="input-text"
            placeholder="Project Name"
            onChange={(e) => onChange(e)}
            name="name"
            value={name}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Add Project"
          />
        </form>
      ) : null}
    </Fragment>
  );
}

export default NewProject;
