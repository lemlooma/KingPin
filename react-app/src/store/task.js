const LOAD = 'tasks/LOAD'
const ONE = 'tasks/ONE'
const DELETE = 'tasks/DELETE'
const CRU = 'tasks/CRU'

const getTasks = (list) => ({
    type: LOAD,
    list
})


const getOneTask = (payload) => ({
    type: ONE,
    payload
})

const makeTask = (payload) =>({
        type: CRU,
        payload
    })
    
const deleteTask = (payload) => ({
    type: DELETE,
        payload
    })
    
export const getTasksForProjectsFunction = (projectId) => async dispatch => {
        const response = await fetch(`/api/projects/${projectId}/tasks`,{
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            const tasks = await response.json()
            dispatch(getTasks(tasks));
        }
}

export const getTasksFunction = () => async dispatch => {
    const response = await fetch('/api/tasks',{
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
        const tasks = await response.json()
        dispatch(getTasks(tasks));
    }
}

export const getOneTaskFunction = (taskId) => async dispatch => {
    const response = await fetch(`/api/tasks/${taskId}`, {
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
        const task = await response.json()
        dispatch(getOneTask(task))
    }
}


export const deleteTaskFunction = (taskId) => async dispatch => {
    const response = await fetch(`/api/tasks/${taskId}`, {
        headers: {'Content-Type': 'application/json'},
        method: 'DELETE',
    });
    if (response.ok) {
        const deletedTaskIdObj = await response.json()
        dispatch(deleteTask(deletedTaskIdObj))
    }
}
export const makeTaskFunction = (projectId,  title, complete, userId, dueDate, description) => async dispatch => {
    const response = await fetch('/api/tasks/', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify({ 
            'title': title,
            'project_id': projectId,
            'complete': complete,
            'user_id': userId,
            'due_date': dueDate,
            'description': description
        })
    });
    if (response.ok) {
        const task = await response.json()
        dispatch(makeTask(task))
    }
}

export const updateTaskFunction = (taskId, projectId,  title, complete, userId, dueDate, description) => async dispatch => {
    const response = await fetch(`/api/tasks/${taskId}`, {
        headers: {'Content-Type': 'application/json'},
        method: 'PUT',
        body: JSON.stringify({ 
            'title': title,
            'project_id': projectId,
            'complete': complete,
            'user_id': userId,
            'due_date': dueDate,
            'description': description
        })
    });
    if (response.ok) {
        const task = await response.json()
        dispatch(makeTask(task))
    }
}

const initialState = {task: null, tasks: []}

const taskReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOAD: {
            const allTasks = {}
            const saveTask = state.task
            const list = action.list
            const keys = Object.keys(list)
            const listLength = keys.length
            const array = []
            for (let i = 0; i < listLength; i++) {
                allTasks[keys[i]] = action.list[keys[i]]
                array.push(allTasks[keys[i]]) 
            }
            return {...allTasks, task: saveTask, tasks: array}
        }
        case ONE: {
            return {
                ...state,
                task:{
                    [action.payload.id]: action.payload
                }
            }
        }
        case DELETE: {
            const newState = {...state};
            const id = action.payload.id
            delete newState[id]
            // if(newState.task[id]) delete newState.task[id]
            newState.tasks = newState.tasks.filter(task => task.id !== id)
            return {
                ...newState
            }
        }
        case CRU: {
            const newState = {...state}
            newState.task ={ [action.payload.id] : action.payload }
            if (newState[action.payload.id]){
                newState[action.payload.id] = action.payload
                newState.tasks.forEach((element, index) => {
                    if (element.id === action.payload.id){
                        newState.tasks.splice(index, 1, action.payload)
                    }
                });
            } else {
                newState.tasks.push(action.payload)
                newState[action.payload.id] = action.payload;
            }
            return {
                ...newState,
                tasks : newState.tasks,
                [action.payload.id] : action.payload,
            }
        }
        default:
            return state;
    }
}

export default taskReducer