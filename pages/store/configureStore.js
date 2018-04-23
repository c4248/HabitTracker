import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import agendaR from '../reducers/agendaR'
import habitR from '../reducers/habitR'


export default () => {

    const rootReducer = combineReducers({
        habit:habitR, 
        agenda: agendaR
    })
    const store = createStore(rootReducer, applyMiddleware(thunk))
    return store
}