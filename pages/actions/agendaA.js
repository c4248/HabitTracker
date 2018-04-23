import axios from '../axios/axios'

export const addTaskSuccess = (task) => ({
    type: 'ADD_TASK',
    task
})

export const removeTask = (taskName) => ({
    type: 'REMOVE_TASK',
    taskName
})

export const setReducerState = (tasks) => ({
    type: 'SET_REDUCER_STATE',
    tasks
})

export const addTask = (task) => {
    return dispatch => {
        axios.post('/tasks.json', task)
            .then(response => {
                const taskToDispatch = {
                    task: task.task,
                    day: task.day,
                    key: response.data.name,
                    hour: task.hour,
                }
                dispatch(addTaskSuccess(taskToDispatch))
            })
    }
}

export const updateTask = (task) => {
    return dispatch =>{
        axios.patch(`/tasks/${task.key}.json`, {task: task.task})
            .then(response =>{
                console.log(response.data)
            })
    }
}