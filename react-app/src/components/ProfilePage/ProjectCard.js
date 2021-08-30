import React from "react";
import { NavLink } from "react-router-dom";
import tasklist from "../../frontend-assets/task_list_icon.png"

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <NavLink to={`/projects/${project.id}`}>
        <img alt="project_icon" src={tasklist}></img>
      </NavLink>
      <h5 className="min-margin"> {project.title}</h5>
    </div>
  );
};

export default ProjectCard;
