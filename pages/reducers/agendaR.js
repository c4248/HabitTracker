const taskList = []

export default (state=taskList, action) => {
    switch(action.type){
        case('ADD_TASK'):
            return [...state, action.task]
        case('REMOVE_TASK'):
            return state.filter(task=>action.taskName !== task.task)
        case('SET_REDUCER_STATE'):
            let initialList = []
            for(let task in action.tasks){
                const taskWithKey = {...action.tasks[task], key: task}
                initialList.push(taskWithKey)
            }
            return initialList
        default:
            return state
    }
}