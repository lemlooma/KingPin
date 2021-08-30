import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyTaskRow from './MyTaskRow';
import { getTasksFunction } from '../../store/task';

const TaskDisplay = ({projects}) => {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.task.tasks)
    const user = useSelector(state => state.session.user);
    const project = useSelector(state => state.project.projects);
    let myTasks;
    if (tasks){
        myTasks = tasks.filter(task => task.user_id === user.id)
    }

    useEffect(() => {
        dispatch(getTasksFunction())
    }, [dispatch, project])

    let task_components = myTasks.map((task, ind) => (
        <MyTaskRow key={ind} task={task} />
    ))

    return (
        <div className='my-task-row-entries'>
            {task_components}
        </div>
    );
};

export default TaskDisplay;