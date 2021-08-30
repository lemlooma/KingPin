import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Modal } from "../../context/Modal";
import { updateTaskFunction  } from '../../store/task'
import TaskDetails from "../task/TaskDetails";
import styles from './TaskRow.module.css';
import checkmark from "../../frontend-assets/aqua_checkmark.png";
import uncheckmark from '../../frontend-assets/grey_checkmark.png';
import deleteicon from "../../frontend-assets/remove_icon.png";

const TaskRow = ({users, task, currentTask, onClick, deleteTask}) => {
 

    const dispatch = useDispatch();
    const { project_id } = useParams();

    const [status, setStatus] = useState(task.complete);

    const toggle_status = () => {
        let payload;
        if(status){
            setStatus(false)
            payload = [task.id, task.project_id,  task.title, false, assigneeId, task.due_date, task.description]
        } else {
            setStatus(true)
            payload = [task.id, task.project_id, task.title, true, assigneeId, task.due_date, task.description]
        }
        dispatch(updateTaskFunction(...payload))
    }

    const deleteThisTask = () => {
        deleteTask(task.id)
    }

    const dateFormat = (dateString) => {
        const date = new Date(dateString)
        const day = date.toDateString();
        const month = day.split(" ")[1]
        const dateNum = Number(day.split(" ")[2]) + 1 // adding +1 to offset GMT default time zone
        return `${month} ${dateNum}`
    }

    let due;
    task.due_date ? due= dateFormat(task.due_date) : due=""

    let statusImg;
    status ? statusImg = checkmark : statusImg = uncheckmark ;

    let assignedUser, assignee, assigneeId;
    if (users && task.user_id) { assignedUser = users.find(user => user.id == task.user_id) }
    (assignedUser) ? assignee = assignedUser.username : assignee = "";
    (assignedUser) ? assigneeId = assignedUser.id : assigneeId = "";

    return (
      <tr className="task-row">
        {task && (
          <>
            <td style={{ borderRight: "none" }} className="flex-container">
              <img
                onClick={toggle_status}
                className="complete-task-button"
                src={statusImg}
              ></img>
            </td>
            <td>
              <div
                style={{ justifyContent: "space-between" }}
                className="capitalize flex-container"
              >
                <Link to={`/projects/${task.project_id}/tasks/${task.id}`}>
                  {status ? <strike> {task.title}</strike> : task.title}
                </Link>
                {currentTask === task.id && (
                  <Modal styles={styles}>
                    <TaskDetails users={users} task={task} onClick={onClick} />
                  </Modal>
                )}
                <img
                  onClick={deleteThisTask}
                  className="remove-task-button"
                  src={deleteicon}
                ></img>
              </div>
            </td>
            <td>{assignee}</td>
            <td style={{ borderRight: "none" }} className="task-due-date">
              {due}
            </td>
          </>
        )}
      </tr>
    );
};

export default TaskRow;
