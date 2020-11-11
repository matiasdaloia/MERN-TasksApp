import React from "react";
import NewProject from "../proyectos/NewProject";
import ProjectList from "../proyectos/ProjectList";

function Sidebar() {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>
      <NewProject />
      <div className="proyectos">
        <h2>Your Projects</h2>
        <ProjectList />
      </div>
    </aside>
  );
}

export default Sidebar;
