import React, { useState } from "react";
// import { Modal } from "../../context/Modal";
// import ProjectForm from "../ProjectForm";
import tasklist from "../../frontend-assets/task_list_icon.png";
import checkmark from "../../frontend-assets/aqua_checkmark.png";
import uncheckmark from "../../frontend-assets/grey_checkmark.png";
const ProjectHeader = ({project, projectStatus, toggleProjectStatus}) => {
    
    // const [showModal, setShowModal] = useState(false);
    const completed = project?.complete === true ? 'Completed' : 'In Progress'

    // const onClick = e => {
    //     e.preventDefault();
    //     setShowModal(true);
    // };

    let statusDisplay;
    projectStatus ? statusDisplay = uncheckmark : statusDisplay = uncheckmark

    return (
        <>
            <div></div>
            <div className='flex-container' style={{ 'width': '100%', 'height':'100%', 'transform':'scale(.8)', 'paddingTop':'10px' }}>
                <img  title="Create Project" src={tasklist} alt="task_icon"></img>
                {/* { showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ProjectForm />
                </Modal>
                )} */}
            </div>
            <div style={{ 'textTransform': 'capitalize', 'paddingTop':'10px' }}>
                <h3 style={{ 'paddingTop': '15px' }}>{project?.title}</h3>
                <div className="flex-container" style={{ 'justifyContent':'flex-start'}}>
                    <h4 style={{ 'color': 'var(--GREY_TEXT_LABELS', 'margin': '0px'}}>{completed}</h4>
                    <img onClick={toggleProjectStatus} className="complete-task-button" src={statusDisplay}></img>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </>

        
    );
};

export default ProjectHeader;
