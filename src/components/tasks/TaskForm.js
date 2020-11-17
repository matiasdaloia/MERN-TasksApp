import React, { useContext, useEffect, useState } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const TaskForm = () => {
  const { activeproject } = useContext(projectContext);
  const {
    selectedtask,
    error,
    addTask,
    getTasks,
    validateTask,
    editTask,
  } = useContext(taskContext);

  // task state
  const [task, setTask] = useState({
    name: "",
  });

  // Effect that detects if there is a selected task
  useEffect(() => {
    if (selectedtask !== null) {
      setTask(selectedtask);
    } else {
      setTask({
        name: "",
      });
    }
  }, [selectedtask]);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate errors
    if (task.name.trim() === "") {
      validateTask();
      return;
    }

    // Check if it is editing or creating new task
    if (selectedtask === null) {
      // Add task to global state
      addTask(task);
    } else {
      // Edit task
      editTask(task);
      // console.log(task);
    }

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
            placeholder={selectedtask ? "New Task Name" : "Task Name..."}
            value={task.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="contenedor-input">
          <input
            className="btn btn-primario btn-submit btn-block"
            type="submit"
            value={selectedtask ? "Edit Task" : "Add Task"}
          />
        </div>
      </form>

      {error ? <p className="mensaje error">Task name is mandatory</p> : null}
    </div>
  );
};

export default TaskForm;
