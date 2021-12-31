import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projects } from "../../store/project";
import SideBar from "../SideBar";
import ProjectDisplay from "./ProjectDisplay";
import TaskDisplay from "./TaskDisplay";
import ProjectDeleteForm from "./ProjectDeleteForm";
import { Modal } from "../../context/Modal";
import pics from "../../frontend-assets/remove_icon.png";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const user = useSelector((state) => state.session.user);
  const current_projects = useSelector((state) => state.project.projects);
  const divider = (
    <hr style={{ color: "var(--GREY_TEXT_LABELS)", height: "15" }} />
  );

  let my_projects;
  if (current_projects)
    my_projects = current_projects.filter(
      (project) => project.user_id === user.id
    );

  useEffect(() => {
    dispatch(projects());
  }, [dispatch]);

  const onDelete = () => {
    setShowModal(true);
  }; 
  const props = { projects: my_projects, modal: setShowModal };

 
  return (
    <div className="profile-container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div>
        <div className="flex-container">
          <h3 className="min-margin" style={{ paddingTop: "30px" }}>
            My Tasks
          </h3>
        </div>
        <div className="my-tasks">
          <TaskDisplay projects={current_projects} />
        </div>
      </div>
      <div className="my-projects">
        <div>
          <div
            className="flex-container"
            style={{ justifyContent: "flex-start", marginRight: "50px" }}
          >
            <h3 className="min-margin" style={{ paddingTop: "3px" }}>
              My Projects
            </h3>
            <img
              className="remove-project-button"
              src={pics}
              onClick={onDelete}
            ></img>

            {showModal && (
              <Modal onClose={() => setShowModal(false)} style={{}}>
                <ProjectDeleteForm props={props} />
              </Modal>
            )}
          </div>
          {divider}
          <ProjectDisplay projects={my_projects} />
          {/* <div style={{ paddingTop: "50px" }}>
            <h3 className="min-margin">Team Projects</h3> 
           </div>
           {divider} 
          <ProjectDisplay projects={current_projects} /> */}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
