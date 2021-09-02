import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { Modal } from '../../context/Modal';
import ProjectForm from '../ProjectForm';
import pic from "../../frontend-assets/add_project_icon.png";

const ProjectDisplay = ({ projects }) => {
   

    const [showModal, setShowModal] = useState(false);

    const onClick = e => {
        e.preventDefault();
        setShowModal(true)
    }
    // console.log(projects)
    return (
        <div className="my-project-wrap">
            <div className="project-card">
                <NavLink onClick={onClick} to={`/new_project`}>
                    <img alt="new_project_icon" src={pic}></img>
                </NavLink>
                {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <ProjectForm onClick={() => setShowModal(false)}/>
                        </Modal>
                    )}
                <h5 className='min-margin'> New Project</h5>
            </div>
            {projects && projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
        </div>
    );
};

export default ProjectDisplay;
