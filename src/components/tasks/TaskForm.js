import React, { useContext, useState } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const TaskForm = () => {
  const { activeproject } = useContext(projectContext);
  const { error, addTask, getTasks, validateTask } = useContext(taskContext);

  // task state
  const [task, setTask] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setTask({
      name: e.target.value,
      completed: false,
      projectId: activeproject[0].id,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate errors
    if (task.name.trim() === "") {
      validateTask();
      return;
    }

    // Add task to global state
    addTask(task);

    // Get updated tasks
    getTasks(activeproject[0].id);

    // Restart the form
    setTask({
      name: "",
    });
  };

  if (!activeproject) return null;

  return (
    <div className="formulario">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="contenedor-input">
          <input
            name="name"
            className="input-text"
            type="text"
            placeholder="Task Name..."
            value={task.name}
            onChange={(e) => handleChange(e)}
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

      {error ? <p className="mensaje error">Task name is mandatory</p> : null}
    </div>
  );
};

export default TaskForm;
