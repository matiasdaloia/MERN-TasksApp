import React from "react";

const TaskForm = () => {
  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            name="name"
            className="input-text"
            type="text"
            placeholder="Task Name..."
          />
        </div>
        <div className="contenedor-input">
          <input
            className="btn btn-primario btn-submit btn-block"
            type="submit"
            value="Add Task"
          />
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
