import moment from 'moment'

const habitList = []

export default (state=habitList, action) => {
    switch(action.type){
        case 'CREATE_HABIT':
            return [...state, {title: action.habit.title, date: action.date}]

        case 'REMOVE_HABIT':
            return state.filter(habit=>action.key !== habit.key)

        case 'SET_REDUCER_HABIT':
            return state.map(habit=>{
                if(habit.key == action.key){
                    return {...habit, date: moment().valueOf()}
                } else{
                    return habit
                }
            })

        
        case 'SET_STATE':
            let initialHabitList = []
            for(let habit in action.payload){
                initialHabitList.push(
                    {...action.payload[habit], key:habit})
            }
            return initialHabitList
        
        default:
             return state
    }
}