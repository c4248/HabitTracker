import moment from 'moment'
import axios from '../axios/axios'
// export const createHabit = ({title, date}) => ({
//     type: 'CREATE_HABIT',
//     title,
//     date
// })

export const createHabit = (habit) => {
    return dispatch => {
        axios.post('/habits.json', habit)
            .then(({data})=>{
                dispatch(addHabit({...habit, key:data.name}))
            })
    }
}

export const addHabit = (habit) => ({
    type: 'CREATE_HABIT',
    habit
})

export const delHabit = (key) => {
    return dispatch => {
        axios.delete(`/habits/${key}.json`)
            .then(()=>{
                console.log(key)
                dispatch(removeHabit(key)
            )})
    }
}

export const removeHabit = (key) => ({
    type: 'REMOVE_HABIT',
    key
})

export const resetHabit = (key) => {
    return dispatch => {
        axios.patch(`/habits/${key}.json`,{date:moment().valueOf()})
        .then(dispatch(resetReducerHabit(key)))
    }
}

export const resetReducerHabit = (key) => ({
    type: 'SET_REDUCER_HABIT', 
    key
})


// export const resetHabit = (title) => ({
//     type: 'RESET_HABIT',
//     title
// })

export const setReducerState = (payload) => ({
    type: 'SET_STATE',
    payload
})