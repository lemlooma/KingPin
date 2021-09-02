import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../context/Modal";
import TaskDetails from "../task/TaskDetails";
import checkmark from "../../frontend-assets/aqua_checkmark.png";
import uncheckmark from "../../frontend-assets/grey_checkmark.png";
const TaskRow = ({ task }) => {
    const [status, setStatus] = useState(task.complete);
    const [showModal, setShowModal] = useState(false);
    const incomplete_check = require('../../frontend-assets/grey_checkmark.png')
    // const onClick = () => { setShowModal(true) }

    const dateFormat = (dateString) => {
        const date = new Date(dateString)
        const day = date.toDateString();
        const month = day.split(" ")[1]
        const dateNum = Number(day.split(" ")[2]) + 1 // add 1 day to offset GMT default time zone
        return `${month} ${dateNum}`
    }
      const toggle_status = () => {
        if (status) {
          setStatus(false);
    
        } else {
          setStatus(true);
        }
        
      };

    let statusImg;
    status ? (statusImg = checkmark) : (statusImg = uncheckmark);

    let due;
    task.due_date ? due = dateFormat(task.due_date) : due = ""

    return (
      <div className="my-task-row">
        {task && (
          <>
            <div style={{ borderRight: "none" }} className="flex-container">
              <img
                style={{ width: "20px" }}
                onClick={toggle_status}
                src={statusImg}
              ></img>
            </div>
            <div className="capitalize" style={{ paddingLeft: "10px" }}>
              <Link to={`/projects/${task.project_id}/tasks/${task.id}`}>
                {status?<strike> {task.title}</strike>:task.title}
              </Link>

              {showModal && (
                <Modal onClose={() => setShowModal(false)} style={{}}>
                  <TaskDetails task={task} date={dateFormat} />
                </Modal>
              )}
            </div>
            <div style={{ borderRight: "none" }}>{due}</div>
          </>
        )}
      </div>
    );
};

export default TaskRow;
